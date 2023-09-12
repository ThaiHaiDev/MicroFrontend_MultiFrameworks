export interface Registry {
  'angular-remote': () => Promise<unknown>;
  'react-remote': () => Promise<unknown>;
  'react-remote-module-1': () => Promise<unknown>;
  'react-remote-module-2': () => Promise<unknown>;
}

export const registry: Registry = {
  'angular-remote': () => import('../../../../angular-remote/src/app/remote-entry/entry.module'),
  'react-remote': () => import('../../../../react-remote/src/remote-entry'),
  'react-remote-module-1': () => import('../../../../react-remote-module-1/src/remote-entry'),
  'react-remote-module-2': () => import('../../../../react-remote-module-2/src/remote-entry'),
};
