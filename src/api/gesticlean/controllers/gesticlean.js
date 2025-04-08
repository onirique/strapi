'use strict';
const crypto = require('crypto');
const axios = require('axios');

const API_URL = 'http://91.134.96.47';
const USER = '2GestiAPI5';
const PASSWORD = 'CB8xC4f9Gtbp79';

module.exports = {
  async zipCode(ctx) {
    const resource = '/zipCode/get';
    const method = 'GET';
    const date = new Date().toUTCString();

    const stringToSign = `${method}\n${resource}\nDate: ${date}\n`;

    const hmacRaw = crypto
      .createHmac('sha256', PASSWORD)
      .update(stringToSign)
      .digest();

    const hmacBase64 = Buffer.from(hmacRaw).toString('base64');

    const headers = {
      'Authorization': `hmac ${USER}:${hmacBase64}`,
      'Date': date
    };

    try {
      const response = await axios.get(`${API_URL}${resource}`, { headers });
      ctx.send(response.data);
    } catch (error) {
      console.error('Erreur API GestiClean:', error.message);
      ctx.throw(500, 'Erreur depuis GestiClean');
    }
  }
};
