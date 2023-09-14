import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import Wrapper from './wrapper/wrapper';

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className={styles.sidebar}>
        <img src='https://uploads-ssl.webflow.com/6385d4dcfa4888244f8d4d04/6425300ee35304df303828ec_logo23-full-b.svg' alt='logo' className={styles.logo} />
        <ul className={styles.link}>
          <li className={styles.cardSide}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.cardSide}>
            <Link to="/react-remote">React Remote</Link>
          </li>
          <li className={styles.cardSide}>
            <Link to="/react-remote-module-1">React Remote Module 1</Link>
          </li>
          <li className={styles.cardSide}>
            <Link to="/react-remote-module-2">React Remote Module 2</Link>
          </li>
          <li className={styles.cardSide}>
            <Link to="/angular-remote">Angular Remote</Link>
          </li>
        </ul>
      </div>
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
          path="/react-remote-module-1/*"
          element={
            <Wrapper
              importName="react-remote-module-1"
              elementName="react-remote-module-1-root"
            />
          }
        />
         <Route
          path="/react-remote-module-2/*"
          element={
            <Wrapper
              importName="react-remote-module-2"
              elementName="react-remote-module-2-root"
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
