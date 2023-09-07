module.exports = {
  displayName: 'libs-vue-button',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../../coverage/libs/libs-vue/button',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'libs/libs-vue/button/tsconfig.spec.json',
      babelConfig: 'libs/libs-vue/button/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'libs/libs-vue/button/tsconfig.spec.json',
      babelConfig: 'libs/libs-vue/button/babel.config.js',
    },
  },
};
