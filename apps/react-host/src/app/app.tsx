import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './home/home';
import IFrame from './i-frame/i-frame';
import MultipleApps from './multiple-apps/multiple-apps';
import NxWelcome from './nx-welcome';
// import { detect } from 'detect-browser';
import ShadowWrapper from './wrapper/shadow-wrapper';
import Wrapper from './wrapper/wrapper';

export interface Browser {
  name: string;
  os: string;
  type: string;
  version: string;
}
declare global {
  interface Window {
    browser: Browser;
    platform: any;
  }
}

export function App() {
  const [username, setUsername] = React.useState('');
  document.addEventListener('user-selected', (event: any) => {
    setUsername(event.detail);
  });

  // window.browser = detect() as Browser;

  return (
    <React.Suspense fallback={null}>
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>React Host</h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/angular-remote">Angular remote</Link>
              {/* <ul>
                <li>
                  <a href="/angular-remote/material">Material</a>
                </li>
              </ul> */}
            </li>
            <li>
              <Link to="/react-remote">React remote</Link>
              <ul>
                <li>
                  <a href="/react-remote/mui">MUI</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/multiple">Multiple Apps</a>
            </li>
            {/* <li>
              <a href="/shadow-angular-remote">Shadow DOM Angular</a>
            </li> */}
            <li>
              <a href="/shadow-react-remote">Shadow DOM React</a>
            </li>
            <li>
              <a href="/iframe">iFrame</a>
            </li>
          </ul>
          {username && <p className="user">Hello {username}!</p>}
        </div>
        <div className="federated-remote">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/react-remote/*"
              element={
                <Wrapper
                  importName="react-remote"
                  elementName="react-remote-root"
                />
              }
            />
            {/* <Route
              path="/angular-remote/*"
              element={
                <Wrapper
                  importName="angular-remote"
                  elementName="angular-remote-root"
                />
              }
            /> */}
            <Route path="/multiple" element={<MultipleApps />} />
            <Route
              path="/shadow-react-remote/*"
              element={
                <ShadowWrapper
                  importName="react-remote"
                  elementName="react-remote-root"
                />
              }
            />
            {/* <Route
              path="/shadow-angular-remote/*"
              element={
                <ShadowWrapper
                  importName="angular-remote"
                  elementName="angular-remote-root"
                />
              }
            /> */}
            <Route path="/iframe" element={<IFrame />} />
          </Routes>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
