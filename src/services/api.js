/**
 * Radhe Laser Studio - Unified API Client Service
 * Centralizes all network interactions, error parsing, and token management.
 */

import { config } from '../config';

const BASE_URL = config.apiBaseUrl;

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Standard HTTP request wrapper with timeout and error extraction
 */
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = { ...options.headers };

  // If body is NOT FormData, default to application/json
  if (options.body && !(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    let data = null;
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await res.json();
    } else {
      const text = await res.text();
      data = { message: text };
    }

    if (!res.ok) {
      const errorMsg = data?.message || `Request failed with status ${res.status}`;
      throw new ApiError(errorMsg, res.status, data);
    }

    return data;
  } catch (err) {
    if (err instanceof ApiError) {
      throw err;
    }
    // Network failure, offline, or CORS failure
    throw new ApiError(
      err.message || 'Network connection failed. Please check your internet or try again.',
      0,
      null
    );
  }
}

export const api = {
  /**
   * Health Check
   */
  async getHealth() {
    return request('/health');
  },

  /**
   * Submit Customer Quotation / Inquiry (FormData with optional files)
   */
  async submitEnquiry(formDataOrPayload) {
    const isFormData = formDataOrPayload instanceof FormData;
    return request('/enquiries', {
      method: 'POST',
      body: isFormData ? formDataOrPayload : JSON.stringify(formDataOrPayload),
    });
  },

  /**
   * Admin Login
   */
  async adminLogin(username, password) {
    return request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  },

  /**
   * Admin Verify Token
   */
  async verifyAdmin(token) {
    return request('/admin/verify', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  /**
   * Admin Get Stats
   */
  async getAdminStats(token) {
    return request('/admin/stats', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  /**
   * Admin Get Enquiries with optional filtering
   */
  async getEnquiries(token, params = {}) {
    const query = new URLSearchParams();
    if (params.status && params.status !== 'All') query.append('status', params.status);
    if (params.search) query.append('search', params.search);

    const queryStr = query.toString() ? `?${query.toString()}` : '';
    return request(`/enquiries${queryStr}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  /**
   * Admin Update Enquiry Status / Notes
   */
  async updateEnquiry(token, id, updates) {
    return request(`/enquiries/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(updates),
    });
  },

  /**
   * Admin Delete Enquiry
   */
  async deleteEnquiry(token, id) {
    return request(`/enquiries/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  /**
   * Public Portfolio Items
   */
  async getPortfolio(category) {
    const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    return request(`/portfolio${query}`);
  },
};

export { ApiError };
export default api;
