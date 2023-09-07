import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


import NxWelcome from './nx-welcome';
import Wrapper from './wrapper/wrapper';


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
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
