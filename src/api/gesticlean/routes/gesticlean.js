'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/gesticlean/test',
      handler: 'gesticlean.checkConnection',
      config: {
        auth: false,
      },
    },
  ],
};
