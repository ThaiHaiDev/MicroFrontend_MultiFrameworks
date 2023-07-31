const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
    ...config,
    exposes: {
        './Module': 'apps/angular-module/src/app/remote-entry/remote-bootstrap.ts',
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
});
