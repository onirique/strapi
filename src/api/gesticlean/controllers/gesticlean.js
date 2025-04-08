'use strict';
const axios = require('axios');

module.exports = {
  async find(ctx) {
    try {
      const response = await axios.get('http://91.134.96.47/endpoint', {
        auth: {
          username: '2GestiAPI5',
          password: 'CB8xC4f9Gtbp79',
        }
      });

      ctx.send(response.data);
    } catch (err) {
      console.error('Erreur appel GestiClean:', err.message);
      ctx.throw(500, 'Erreur appel API GestiClean');
    }
  }
};
