import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';
import Wrapper from './wrapper/wrapper';

const ReactRemoteModule2 = React.lazy(
  () => import('react-remote-module-2/Module')
);
const ReactRemoteModule1 = React.lazy(
  () => import('react-remote-module-1/Module')
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-remote-module-2">ReactRemoteModule2</Link>
        </li>
        <li>
          <Link to="/react-remote-module-1">ReactRemoteModule1</Link>
        </li>
        <li>
          <Link to="/react-remote">React Remote</Link>
        </li>
        <li>
          <Link to="/angular-remote">Angular Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-host" />} />
        <Route path="/react-remote-module-2" element={<ReactRemoteModule2 />} />
        <Route path="/react-remote-module-1" element={<ReactRemoteModule1 />} />
        <Route
          path="/react-remote/*"
          element={
            <Wrapper
              importName="react-remote"
              elementName="react-remote-root"
            />
          }
        />
        <Route
          path="/angular-remote/*"
          element={
            <Wrapper
              importName="angular-remote"
              elementName="angular-remote-root"
            />
          }
        />
        {/* <Route path="/react-remote" element={<ReactRemote />} /> */}
      </Routes>
    </React.Suspense>
  );
}

export default App;
