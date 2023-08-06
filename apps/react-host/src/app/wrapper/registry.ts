export interface Registry {
  // 'angular-module': () => Promise<unknown>;
  'react-remote': () => Promise<unknown>;
}

export const registry: Registry = {
  // 'angular-module': () => import('angular-module/Module'),
  'react-remote': () => import('react-remote/Module'),
};
