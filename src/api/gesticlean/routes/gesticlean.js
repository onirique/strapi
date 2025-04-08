module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/gesticlean',
        handler: 'gesticlean.find',
        config: {
          auth: false,
        }
      }
    ]
  };
  