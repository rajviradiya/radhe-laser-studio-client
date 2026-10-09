/**
 * Radhe Laser Studio - Client Configuration
 * Exposes strictly public, client-safe environment variables and studio constants.
 * NEVER import server secrets or private credentials here.
 */

const env = import.meta.env || {};

export const config = Object.freeze({
  appName: env.VITE_APP_NAME || 'Radhe Laser Studio',
  apiBaseUrl: (env.VITE_API_BASE_URL || '/api').replace(/\/+$/, ''),
  appUrl: env.VITE_APP_URL || 'https://radhelaserstudio.com',

  // Public Studio Contact Details
  contact: Object.freeze({
    phone: env.VITE_STUDIO_PHONE || '7984190368',
    whatsapp: env.VITE_STUDIO_WHATSAPP || '7984190368',
    email: env.VITE_STUDIO_EMAIL || 'radhelaserstudio@gmail.com',
    address:
      'Shop No. 1140, Radhe Laser Studio, Ognaj - Gota Rd, opposite side of Shell Petrol Pump, Gota, Ahmedabad, Gujarat, India.',
    mapsUrl: 'https://share.google/JpWNuxXYPa3LG8EFx',
    businessHours: [
      { days: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
      { days: 'Sunday', hours: 'By Appointment / Call for Feasibility' },
    ],
  }),

  // Feature Flags
  features: Object.freeze({
    enableDirectWhatsAppFallback: true,
    maxUploadFiles: 5,
    maxUploadSizeBytes: 25 * 1024 * 1024, // 25 MB
  }),
});

export default config;
