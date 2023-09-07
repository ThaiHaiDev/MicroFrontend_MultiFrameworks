export interface Registry {
  'angular-remote': () => Promise<unknown>;
  'react-remote': () => Promise<unknown>;
}

export const registry: Registry = {
  'angular-remote': () => import('../../../../angular-remote/src/app/remote-entry/entry.module'),
  'react-remote': () => import('../../../../react-remote/src/remote-entry'),
};
