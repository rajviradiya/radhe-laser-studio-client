import React, { useState, useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { StatusBadge } from '../components/StatusBadge';
import { Logo } from '../components/Logo';
import {
  Lock,
  User,
  Search,
  Filter,
  Download,
  Trash2,
  CheckCircle,
  CheckCircle2,
  PhoneCall,
  Zap,
  Eye,
  FileText,
  RefreshCw,
  LogOut,
  MessageCircle,
  Phone,
  Calendar,
  Layers,
  X,
  Save,
  AlertCircle,
  ExternalLink,
  Shield,
  Clock,
  Sparkles,
  Inbox,
} from 'lucide-react';
import { api, ApiError } from '../services/api';

export const AdminPage = () => {
  const [token, setToken] = useState(localStorage.getItem('rls_admin_token') || '');
  const [adminUser, setAdminUser] = useState(localStorage.getItem('rls_admin_user') || '');

  // Login form state
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard state
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    quoted: 0,
    inProduction: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected Enquiry Modal / Drawer
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [internalNotes, setInternalNotes] = useState('');
  const [savingNotes, setSavingNotes] = useState(false);

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const data = await api.adminLogin(loginForm.username, loginForm.password);
      if (data.success) {
        localStorage.setItem('rls_admin_token', data.token);
        localStorage.setItem('rls_admin_user', data.admin.username);
        setToken(data.token);
        setAdminUser(data.admin.username);
      } else {
        setLoginError(data.message || 'Invalid username or password.');
      }
    } catch (err) {
      setLoginError(err.message || 'Failed to communicate with authentication server.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('rls_admin_token');
    localStorage.removeItem('rls_admin_user');
    setToken('');
    setAdminUser('');
    setEnquiries([]);
  };

  // Fetch data
  const fetchData = async () => {
    if (!token) return;
    setLoading(true);
    try {
      // Fetch stats
      const statsData = await api.getAdminStats(token);
      if (statsData.success) {
        setStats(statsData.stats);
      }

      // Fetch enquiries
      const enqData = await api.getEnquiries(token);
      if (enqData.success) {
        setEnquiries(enqData.enquiries || []);
      }
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        handleLogout();
      } else {
        console.warn('Dashboard fetch error:', err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  // Status update handler
  const handleUpdateStatus = async (id, newStatus) => {
    setUpdatingStatus(true);
    try {
      const data = await api.updateEnquiry(token, id, { status: newStatus });
      if (data.success) {
        setEnquiries((prev) => prev.map((e) => (e._id === id ? data.enquiry : e)));
        if (selectedEnquiry && selectedEnquiry._id === id) {
          setSelectedEnquiry(data.enquiry);
        }
        fetchData();
      }
    } catch (err) {
      alert('Failed to update status: ' + err.message);
    } finally {
      setUpdatingStatus(false);
    }
  };

  // Save internal notes
  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    setSavingNotes(true);
    try {
      const data = await api.updateEnquiry(token, selectedEnquiry._id, { internalNotes });
      if (data.success) {
        setSelectedEnquiry(data.enquiry);
        setEnquiries((prev) => prev.map((e) => (e._id === selectedEnquiry._id ? data.enquiry : e)));
        alert('Internal notes saved successfully!');
      }
    } catch (err) {
      alert('Failed to save notes: ' + err.message);
    } finally {
      setSavingNotes(false);
    }
  };

  // Delete enquiry
  const handleDelete = async (id) => {
    if (
      !window.confirm('Are you sure you want to delete this enquiry? This action cannot be undone.')
    ) {
      return;
    }
    try {
      const res = await api.deleteEnquiry(token, id);
      if (res.success) {
        setEnquiries((prev) => prev.filter((e) => e._id !== id));
        if (selectedEnquiry && selectedEnquiry._id === id) {
          setSelectedEnquiry(null);
        }
        fetchData();
      }
    } catch (err) {
      alert('Failed to delete enquiry: ' + err.message);
    }
  };

  const openEnquiryModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setInternalNotes(enquiry.internalNotes || '');
  };

  // Filtered inquiries list
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    const matchesSearch =
      !searchQuery ||
      (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.phone && item.phone.includes(searchQuery)) ||
      (item.service && item.service.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.material && item.material.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // 1. IF NOT LOGGED IN: SHOW FIGMA LIGHT-THEMED LOGIN SCREEN
  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        <SEOHead title="Admin Login | Radhe Laser Studio" />

        {/* Subtle background red glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-md w-full rounded-2xl bg-white border border-slate-200 p-8 shadow-xl relative z-10">
          {/* Logo centered */}
          <div className="flex justify-center mb-6">
            <Logo variant="dark" size="md" layout="stacked" />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Studio Management Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Sign in to manage quote requests, customer files, and workflow statuses.
            </p>
          </div>

          {loginError && (
            <div className="p-3 mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-[#C2272D]" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Username</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  placeholder="admin"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-[#C2272D] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-[#C2272D] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3.5 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-sm shadow-lg shadow-red-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
            >
              {loginLoading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400">
            Protected endpoint • Radhe Laser Studio Internal • Gota, Ahmedabad
          </div>
        </div>
      </div>
    );
  }

  // 2. IF LOGGED IN: SHOW FIGMA LIGHT-THEMED DASHBOARD
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEOHead title="Admin Dashboard | Radhe Laser Studio" />

      {/* Admin Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo variant="dark" size="sm" showTagline={false} />
            <div className="h-5 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Admin Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <Shield className="w-3.5 h-3.5 text-[#C2272D]" />
              <span>
                Signed in as <strong>{adminUser}</strong>
              </span>
            </div>

            <button
              onClick={fetchData}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-black transition-colors"
              title="Refresh Enquiries"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#C2272D]' : ''}`} />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-bold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Statistics Cards Styled in Clean Figma Light Cards */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Operations Overview
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time inquiry metrics and production pipeline stages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {[
              {
                label: 'Total Enquiries',
                value: stats.total,
                badge: 'All Records',
                icon: Inbox,
                iconColor: 'text-[#C2272D]',
                iconBg: 'bg-red-50',
                dotColor: 'bg-[#C2272D]',
              },
              {
                label: 'New',
                value: stats.new,
                badge: 'Unread',
                icon: Sparkles,
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-50',
                dotColor: 'bg-blue-600',
              },
              {
                label: 'Contacted',
                value: stats.contacted,
                badge: 'In Touch',
                icon: PhoneCall,
                iconColor: 'text-purple-600',
                iconBg: 'bg-purple-50',
                dotColor: 'bg-purple-600',
              },
              {
                label: 'Quoted',
                value: stats.quoted,
                badge: 'Pricing Sent',
                icon: FileText,
                iconColor: 'text-amber-600',
                iconBg: 'bg-amber-50',
                dotColor: 'bg-amber-600',
              },
              {
                label: 'In Production',
                value: stats.inProduction,
                badge: 'On Laser Bed',
                icon: Zap,
                iconColor: 'text-sky-600',
                iconBg: 'bg-sky-50',
                dotColor: 'bg-sky-600',
              },
              {
                label: 'Completed',
                value: stats.completed,
                badge: 'Delivered',
                icon: CheckCircle2,
                iconColor: 'text-emerald-600',
                iconBg: 'bg-emerald-50',
                dotColor: 'bg-emerald-600',
              },
            ].map((metric, i) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
                      {metric.label}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl ${metric.iconBg} ${metric.iconColor} flex items-center justify-center shrink-0`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="my-2.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight block">
                      {metric.value}
                    </span>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center text-[11px] font-semibold text-slate-500">
                    <span
                      className={`w-2 h-2 rounded-full ${metric.dotColor} shrink-0 mr-1.5`}
                    ></span>
                    <span className="truncate">{metric.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, phone, material..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-[#C2272D] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1 mr-1" />
            {['All', 'New', 'Contacted', 'Quoted', 'In Production', 'Completed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  statusFilter === st
                    ? 'bg-[#C2272D] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiries Table Styled with Figma Theme */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/60">
            <div className="flex items-center gap-2">
              <Inbox className="w-4 h-4 text-[#C2272D]" />
              <h3 className="text-sm font-extrabold text-slate-900">
                Customer Inquiries ({filteredEnquiries.length})
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Showing filtered results</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase tracking-wider font-bold text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Customer</th>
                  <th className="py-3.5 px-4">Phone / WhatsApp</th>
                  <th className="py-3.5 px-4">Service & Material</th>
                  <th className="py-3.5 px-4">Qty</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-12 text-center text-slate-400 text-sm">
                      No enquiries matching current filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enq) => {
                    const dateFormatted = enq.createdAt
                      ? new Date(enq.createdAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '-';

                    return (
                      <tr key={enq._id} className="hover:bg-red-50/20 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div>{enq.name}</div>
                          {enq.companyName && (
                            <div className="text-[10px] text-slate-400 font-medium">
                              {enq.companyName}
                            </div>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={`tel:${enq.phone}`}
                              className="hover:text-[#C2272D] font-bold text-slate-800"
                            >
                              {enq.phone}
                            </a>
                            <a
                              href={`https://wa.me/91${(enq.whatsapp || enq.phone).replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-600 hover:text-emerald-700"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-800">{enq.service}</span>
                          <span className="block text-[10px] text-slate-500 font-medium">
                            {enq.material}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {enq.quantity || '1'}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-medium">{dateFormatted}</td>
                        <td className="py-3.5 px-4">
                          <StatusBadge status={enq.status} />
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => openEnquiryModal(enq)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#C2272D] hover:text-white border border-slate-200 text-slate-700 font-bold transition-all shadow-2xs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* DETAIL MODAL / DRAWER FOR INQUIRY INSPECTION (FIGMA LIGHT CARD) */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-red-100 text-[#C2272D] text-[10px] font-mono font-bold">
                  #{selectedEnquiry._id?.substring(selectedEnquiry._id.length - 6)}
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  Enquiry Details: {selectedEnquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-black hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 flex-1 text-xs">
              {/* Customer Contact */}
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="text-xs font-bold text-[#C2272D] uppercase tracking-wider mb-3">
                  Customer Information
                </h4>
                <div className="grid grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Name:</span>
                    <strong className="text-slate-900 text-sm">{selectedEnquiry.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Company:</span>
                    <span className="font-semibold">
                      {selectedEnquiry.companyName || 'Individual Customer'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Phone:</span>
                    <a
                      href={`tel:${selectedEnquiry.phone}`}
                      className="text-[#C2272D] font-bold underline"
                    >
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Email:</span>
                    <a
                      href={`mailto:${selectedEnquiry.email}`}
                      className="text-sky-700 font-semibold underline"
                    >
                      {selectedEnquiry.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/91${(selectedEnquiry.whatsapp || selectedEnquiry.phone).replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-[11px] shadow-sm hover:opacity-90"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-[11px] shadow-2xs hover:bg-slate-100"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C2272D]" />
                    <span>Call Customer</span>
                  </a>
                </div>
              </div>

              {/* Requirement Specifications */}
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="text-xs font-bold text-[#C2272D] uppercase tracking-wider mb-3">
                  Job & Material Specifications
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Service:</span>
                    <strong className="text-slate-900">{selectedEnquiry.service}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Product:</span>
                    <strong className="text-slate-900">{selectedEnquiry.product || '-'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Material:</span>
                    <strong className="text-slate-900">{selectedEnquiry.material}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Quantity:</span>
                    <strong className="text-slate-900">{selectedEnquiry.quantity || '1'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Dimensions:</span>
                    <span className="font-bold text-slate-800">
                      {selectedEnquiry.width || '-'} W × {selectedEnquiry.height || '-'} H (
                      {selectedEnquiry.thickness || '-'})
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Required By:</span>
                    <span className="font-semibold text-slate-800">
                      {selectedEnquiry.requiredDate || 'Flexible'}
                    </span>
                  </div>
                </div>

                {selectedEnquiry.message && (
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <span className="text-slate-500 block mb-1 text-[11px] font-bold">
                      Customer Message:
                    </span>
                    <p className="p-3 rounded-lg bg-white border border-slate-200 text-slate-800 leading-relaxed font-sans">
                      {selectedEnquiry.message}
                    </p>
                  </div>
                )}
              </div>

              {/* Uploaded Files Section */}
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="text-xs font-bold text-[#C2272D] uppercase tracking-wider mb-3">
                  Attached Design Files ({selectedEnquiry.uploadedFiles?.length || 0})
                </h4>

                {!selectedEnquiry.uploadedFiles || selectedEnquiry.uploadedFiles.length === 0 ? (
                  <p className="text-slate-400 italic">No files attached to this quote request.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedEnquiry.uploadedFiles.map((f, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between gap-2 shadow-2xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-[#C2272D] shrink-0" />
                          <span
                            className="truncate text-xs font-semibold text-slate-800"
                            title={f.originalName || f.fileName || f.filename || 'Design File'}
                          >
                            {f.originalName || f.fileName || f.filename || 'Design File'}
                          </span>
                        </div>
                        <a
                          href={f.filePath || f.path || `/uploads/${f.fileName || f.filename}`}
                          download
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded bg-slate-100 hover:bg-[#C2272D] hover:text-white text-slate-600 transition-colors shrink-0"
                          title="Download Design File"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Workflow Status Controls */}
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="text-xs font-bold text-[#C2272D] uppercase tracking-wider mb-3">
                  Update Workflow Stage
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['New', 'Contacted', 'Quoted', 'In Production', 'Completed', 'Cancelled'].map(
                    (st) => (
                      <button
                        key={st}
                        disabled={updatingStatus}
                        onClick={() => handleUpdateStatus(selectedEnquiry._id, st)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedEnquiry.status === st
                            ? 'bg-[#C2272D] text-white shadow-sm'
                            : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {st}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Internal Studio Notes */}
              <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                <h4 className="text-xs font-bold text-[#C2272D] uppercase tracking-wider mb-2">
                  Internal Studio Notes
                </h4>
                <textarea
                  rows="3"
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                  placeholder="Record customer preferences, sample approvals, quoted pricing, laser machine settings..."
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs focus:border-[#C2272D] focus:ring-2 focus:ring-red-100 focus:outline-none"
                ></textarea>
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={handleSaveNotes}
                    disabled={savingNotes}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{savingNotes ? 'Saving...' : 'Save Notes'}</span>
                  </button>
                </div>
              </div>

              {/* Danger Zone: Delete Inquiry */}
              <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
                <span>Created on: {new Date(selectedEnquiry.createdAt).toLocaleString()}</span>
                <button
                  onClick={() => handleDelete(selectedEnquiry._id)}
                  className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold hover:underline"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
