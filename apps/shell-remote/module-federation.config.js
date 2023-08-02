module.exports = {
  name: 'shell-remote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
