import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Upload,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  FileText,
  X,
  ArrowRight,
} from 'lucide-react';
import { api, ApiError } from '../services/api';
import { config } from '../config';

export const QuoteForm = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    companyName: '',
    service: 'CO₂ Laser Cutting',
    product: '',
    material: 'Acrylic',
    quantity: '1',
    width: '',
    height: '',
    thickness: '',
    requiredDate: '',
    message: '',
    honeypot: '', // Anti-spam hidden honeypot
  });

  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Pre-fill from URL queries if arriving from a specific service/product link
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    const productParam = params.get('product');
    const quantityParam = params.get('quantity');

    setFormData((prev) => ({
      ...prev,
      service: serviceParam || prev.service,
      product: productParam || prev.product,
      quantity: quantityParam || prev.quantity,
    }));
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const allowed = ['.jpg', '.jpeg', '.png', '.pdf', '.svg', '.dxf', '.ai', '.cdr', '.zip'];

    const validFiles = selectedFiles.filter((file) => {
      const ext = '.' + file.name.split('.').pop().toLowerCase();
      return allowed.includes(ext);
    });

    if (validFiles.length < selectedFiles.length) {
      alert(
        'Some files were ignored because only JPG, PNG, PDF, SVG, DXF, AI, CDR and ZIP files are accepted.'
      );
    }

    setFiles((prev) => [...prev, ...validFiles].slice(0, 5));
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validations
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your contact phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    const dataPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      dataPayload.append(key, formData[key]);
    });

    files.forEach((file) => {
      dataPayload.append('files', file);
    });

    try {
      const result = await api.submitEnquiry(dataPayload);
      if (result.success) {
        setSubmittedData({
          enquiryId: result.enquiryId || 'RLS-' + Date.now(),
          whatsappUrl:
            result.whatsappUrl ||
            `https://wa.me/91${config.contact.whatsapp}?text=Hello%20Radhe%20Laser%20Studio!%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service)}%20(${encodeURIComponent(formData.name)}).`,
        });
      } else {
        setErrorMsg(result.message || 'Error submitting quote request.');
      }
    } catch (err) {
      if (err instanceof ApiError && err.status === 400) {
        setErrorMsg(err.message || 'Please verify the details you entered.');
        return;
      }

      console.warn('Network issue encountered, activating direct WhatsApp fallback:', err.message);
      const fallbackWhatsappUrl = `https://wa.me/91${config.contact.whatsapp}?text=Hello%20Radhe%20Laser%20Studio!%20I%20want%20to%20request%20a%20quote%0AName:%20${encodeURIComponent(formData.name)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AService:%20${encodeURIComponent(formData.service)}%0AMaterial:%20${encodeURIComponent(formData.material)}%0AQty:%20${encodeURIComponent(formData.quantity)}%0ASize:%20${encodeURIComponent(formData.width)}x${encodeURIComponent(formData.height)}%0AMessage:%20${encodeURIComponent(formData.message)}`;

      setSubmittedData({
        enquiryId: 'RLS-DIRECT-' + Math.floor(Math.random() * 10000),
        whatsappUrl: fallbackWhatsappUrl,
      });
    } finally {
      setSubmitting(false);
    }
  };

  // SUCCESS SCREEN
  if (submittedData) {
    return (
      <div className="rounded-2xl bg-white border border-slate-200 border-t-4 border-t-[#C2272D] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          Quote Request Received
        </h3>

        {/* Confirmation Message */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-medium">
          Thank you! Your enquiry has been received. We will review your requirement and contact you
          shortly.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 inline-block text-xs text-slate-600 mb-8">
          <span>Enquiry Reference: </span>
          <span className="font-mono font-bold text-[#C2272D]">{submittedData.enquiryId}</span>
        </div>

        {/* Direct WhatsApp Follow-up */}
        <div className="space-y-4">
          <a
            href={submittedData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-base shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-6 h-6 fill-black text-emerald-600" />
            <span>Connect on WhatsApp for Instant Confirmation</span>
          </a>

          <p className="text-xs text-slate-500">
            You can also call us directly at{' '}
            <a href="tel:7984190368" className="text-[#C2272D] font-bold underline">
              7984190368
            </a>{' '}
            during studio hours.
          </p>

          <button
            onClick={() => {
              setSubmittedData(null);
              setFiles([]);
            }}
            className="text-xs font-semibold text-slate-600 hover:text-black pt-4 block mx-auto underline"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-slate-200 border-t-4 border-t-[#C2272D] p-6 sm:p-10 shadow-xl"
    >
      {/* Invisible Honeypot Anti-Spam Field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-[#C2272D] text-xs sm:text-sm flex items-center gap-2.5">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* SECTION 1: CUSTOMER INFORMATION */}
      <div className="mb-8">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#C2272D]"></span>
          <span>1. Customer Information</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name <span className="text-[#C2272D]">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Phone Number <span className="text-[#C2272D]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 7984190368"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              WhatsApp Number <span className="text-slate-400 font-normal">(if different)</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="e.g. 7984190368"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address <span className="text-[#C2272D]">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Company / Studio / Organization Name{' '}
              <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Studio Vista Architecture"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: REQUIREMENT SPECIFICATIONS */}
      <div className="mb-8">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#C2272D]"></span>
          <span>2. Job Requirement & Specifications</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            >
              <option value="CO₂ Laser Cutting">CO₂ Laser Cutting</option>
              <option value="Laser Engraving">Laser Engraving</option>
              <option value="Acrylic Work">Acrylic Work</option>
              <option value="MDF & Wood Products">MDF & Wood Products</option>
              <option value="Signage & Branding">Signage & Branding</option>
              <option value="Event Décor & Neon">Event Décor & Neon</option>
              <option value="Custom Gifts">Custom Gifts</option>
              <option value="Bulk Production">Bulk Production</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Product Type</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="e.g. 3D Acrylic Letters / Name Plate"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Preferred Material
            </label>
            <select
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            >
              <option value="Acrylic (Cast PMMA)">Acrylic (Cast PMMA)</option>
              <option value="Mirror Acrylic (Gold/Rose Gold/Silver)">
                Mirror Acrylic (Gold/Rose Gold/Silver)
              </option>
              <option value="MDF (Medium Density Fibreboard)">
                MDF (Medium Density Fibreboard)
              </option>
              <option value="Wood & Veneer">Wood & Veneer</option>
              <option value="Birch Plywood">Birch Plywood</option>
              <option value="Other / Confirm Feasibility">Other / Confirm Feasibility</option>
            </select>
          </div>
        </div>

        {/* Dimensions & Quantity */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 1, 10, 500 pcs"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Width (mm / inches)
            </label>
            <input
              type="text"
              name="width"
              value={formData.width}
              onChange={handleChange}
              placeholder="e.g. 24 inches"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Height (mm / inches)
            </label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="e.g. 12 inches"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Thickness</label>
            <input
              type="text"
              name="thickness"
              value={formData.thickness}
              onChange={handleChange}
              placeholder="e.g. 3mm, 5mm, 8mm"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Date & Detailed Message */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="sm:col-span-1">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Required Completion Date
            </label>
            <input
              type="date"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Project Description / Specific Details
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your design, finish requirements, mounting needs, or specific instructions..."
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:bg-white focus:outline-none transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      {/* SECTION 3: DESIGN FILE UPLOAD */}
      <div className="mb-8">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-2 pb-2 border-b border-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#C2272D]"></span>
          <span>3. Design Upload</span>
        </h3>
        <p className="text-xs text-slate-500 mb-3">
          Accepted file types: <strong>JPG, PNG, PDF, SVG, DXF, AI, CDR, ZIP</strong> (Max 25MB per
          file, up to 5 files).
        </p>

        <div className="relative border-2 border-dashed border-slate-300 hover:border-[#C2272D] rounded-xl p-6 text-center bg-slate-50 transition-colors">
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf,.svg,.dxf,.ai,.cdr,.zip"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center pointer-events-none">
            <Upload className="w-8 h-8 text-[#C2272D] mb-2" />
            <p className="text-sm font-bold text-slate-800">
              Drag & drop design files here, or{' '}
              <span className="text-[#C2272D] underline">browse files</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Have vectors or CAD drawings? Send your .DXF, .CDR, or .AI files for accurate cutting.
            </p>
          </div>
        </div>

        {/* Selected files preview */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            <span className="text-xs font-bold text-slate-700">
              Attached Files ({files.length}):
            </span>
            {files.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
              >
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-4 h-4 text-[#C2272D] shrink-0" />
                  <span className="truncate">{file.name}</span>
                  <span className="text-slate-400">({(file.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="p-1 hover:text-[#C2272D] text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SUBMISSION BUTTON */}
      <div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 px-8 rounded-xl font-extrabold text-base text-white bg-[#C2272D] hover:bg-[#A81C21] shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Processing Your Requirement...</span>
            </>
          ) : (
            <>
              <span>Request My Quote</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-500 mt-4">
          Safe & Direct: Your requirement is securely forwarded to our fabrication team in Gota,
          Ahmedabad. No spam.
        </p>
      </div>
    </form>
  );
};
