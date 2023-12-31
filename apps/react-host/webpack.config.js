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
      ['angular-remote', 'http://localhost:4201/remoteEntry.mjs'],
      ['react-remote', 'http://localhost:4203/'],
      ['react-remote-module-1', 'http://localhost:4204/'],
      ['react-remote-module-2', 'http://localhost:4205/'],
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }
  }),
);