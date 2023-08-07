export interface Registry {
  'angular-remote': () => Promise<unknown>;
  'react-remote': () => Promise<unknown>;
}

export const registry: Registry = {
  'angular-remote': () => import('angular-remote/Module'),
  'react-remote': () => import('react-remote/Module'),
};
