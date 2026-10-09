import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';
import { api, ApiError } from '../services/api';
import { config } from '../config';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  // Configurable Business Hours
  const businessHours = [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: 'By Appointment / Call for Feasibility' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    try {
      const result = await api.submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: 'General Inquiry / Contact',
        message: formData.message,
      });

      if (result.success) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send inquiry.');
      }
    } catch (err) {
      if (err instanceof ApiError && err.status === 400) {
        setStatus({ submitting: false, success: false, error: err.message });
        return;
      }
      // Direct WhatsApp fallback if offline
      const waUrl = `https://wa.me/91${config.contact.whatsapp}?text=Hello%20Radhe%20Laser%20Studio!%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20Phone:%20${encodeURIComponent(formData.phone)}.%20Message:%20${encodeURIComponent(formData.message)}`;
      window.open(waUrl, '_blank');
      setStatus({ submitting: false, success: true, error: '' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Contact Information & Hours */}
      <div className="lg:col-span-5 space-y-6">
        {/* Studio Info Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              RADHE LASER STUDIO
            </h3>
            <p className="text-xs text-[#C2272D] font-bold uppercase tracking-wider mt-0.5">
              Precision • Creativity • Customization
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C2272D] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 block font-bold">Studio Address</span>
              <p className="text-sm text-slate-800 leading-relaxed font-medium mt-1">
                Shop No. 1140, Radhe Laser Studio, Ognaj - Gota Rd, opposite side of Shell Petrol
                Pump, Gota, Ahmedabad, Gujarat, India.
              </p>
              <a
                href="https://share.google/JpWNuxXYPa3LG8EFx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2272D] hover:underline mt-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View on Google Maps / Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C2272D] shrink-0 mt-0.5">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-500 block font-bold">Call / WhatsApp</span>
              <a
                href="tel:7984190368"
                className="text-base font-extrabold text-slate-900 hover:text-[#C2272D] transition-colors mt-0.5 block"
              >
                7984190368
              </a>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="tel:7984190368"
              className="py-3 px-4 rounded-xl bg-white hover:bg-emerald-50/40 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-2 transition-all border-2 border-emerald-500 hover:border-emerald-600 shadow-2xs"
            >
              <Phone className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/917984190368?text=Hello%20Radhe%20Laser%20Studio!%20I%20would%20like%20to%20visit%20your%20studio%20in%20Gota."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-white hover:bg-emerald-50/40 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-2 transition-all border-2 border-emerald-500 hover:border-emerald-600 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Configurable Business Hours */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C2272D] uppercase tracking-wider mb-3">
              <Clock className="w-4 h-4" />
              <span>Business Operating Hours</span>
            </div>
            <div className="space-y-2 text-xs">
              {businessHours.map((bh, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-1 border-b border-slate-100 text-slate-700"
                >
                  <span className="font-medium text-slate-500">{bh.day}:</span>
                  <span className="font-bold text-slate-900">{bh.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Channels */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-semibold">Follow Our Studio:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/radhelaserstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Radhe-laseer-Studio/61594708690191/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Contact Form & Map */}
      <div className="lg:col-span-7 space-y-6">
        {/* Contact Form */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Send a Direct Message</h3>
          <p className="text-xs text-slate-500 mb-6">
            Leave your contact information and requirements, and we will get back to you promptly.
          </p>

          {status.success ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">Message Dispatched</h4>
              <p className="text-xs text-slate-600">
                Thank you! Your message has reached Radhe Laser Studio. We will contact you soon.
              </p>
              <button
                onClick={() => setStatus({ submitting: false, success: false, error: '' })}
                className="text-xs text-[#C2272D] font-bold underline pt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priyank Shah"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 7984190368"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  How can we help? *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about what you need fabricated or cut..."
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#C2272D] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3 px-6 rounded-xl bg-[#C2272D] hover:bg-[#A81C21] text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Map Section */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C2272D]" />
              Radhe Laser Studio • Ognaj - Gota Road (Opp. Shell Petrol Pump)
            </span>
            <a
              href="https://share.google/JpWNuxXYPa3LG8EFx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C2272D] hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Interactive Google Maps Embed */}
          <div className="h-64 sm:h-72 w-full bg-slate-100">
            <iframe
              title="Radhe Laser Studio Google Map Location"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sRadhe+Laser+Studio,+SHOP+NO+-+1140,+Ognaj+-+Gota+Rd,+opposite+side+of+Shell+Petrol+Pump,+Gota,+Ahmedabad,+Gujarat!6i15"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
