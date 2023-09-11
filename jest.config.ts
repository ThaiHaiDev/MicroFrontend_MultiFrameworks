import { getJestProjects } from '@nx/jest';

export default {
  projects: [...getJestProjects(), '<rootDir>/path/to/jest.config.ts'],
};

// module.exports = {
//   // Other Jest configurations...
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };