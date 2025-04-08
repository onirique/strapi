'use strict';
const crypto = require('crypto');
const axios = require('axios');

const API_URL = 'http://91.134.96.47';
const USER = '2GestiAPI5';
const PASSWORD = 'CB8xC4f9Gtbp79';

module.exports = {
  async checkConnection(ctx) {
    const resource = '/zipCode/get';
    const method = 'GET';
    const date = new Date().toUTCString();

    const stringToSign = `${method}\n${resource}\nDate: ${date}\n`;

    const signature = crypto
      .createHmac('sha256', PASSWORD)
      .update(stringToSign)
      .digest('base64');

    const headers = {
      'Authorization': `hmac ${USER}:${signature}`,
      'Date': date,
    };

    try {
      const response = await axios.get(`${API_URL}${resource}`, { headers });
      ctx.send({
        status: response.status,
        headers: response.headers,
        data: response.data
      });
    } catch (error) {
      console.error('Erreur test de connexion :', error.message);

      ctx.send({
        status: error?.response?.status || 500,
        message: error.message,
        data: error?.response?.data || null
      });
    }
  }
};
