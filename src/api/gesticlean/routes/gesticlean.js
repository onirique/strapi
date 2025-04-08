module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/gesticlean/zipcodes',
        handler: 'gesticlean.zipCode',
        config: {
          auth: false,
        },
      },
    ],
  };
  