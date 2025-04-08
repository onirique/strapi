// src/api/gesticlean/routes/gesticlean.js
module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/gesticlean/ping',
        handler: 'gesticlean.ping',
        config: {
          auth: false,
        },
      },
    ],
  };
  