const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
    ...config,
    remotes: [
        ['angular-remote', 'http://localhost:4203/'],
        // ['react-remote', 'http://localhost:4202/remoteEntry.mjs']
    ]
});
