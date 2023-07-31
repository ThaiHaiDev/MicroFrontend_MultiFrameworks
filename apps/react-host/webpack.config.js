const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation({
    ...config,
    remotes: [
      ['react-remote', 'http://localhost:4201/'],
      ['angular-module', 'http://localhost:4203/remoteEntry.mjs']
    ],
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  })
);
