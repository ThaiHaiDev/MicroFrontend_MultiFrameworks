import * as React from 'react';
import { Root } from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

const ShellRemote = React.lazy(() => import('app-vue/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shell-remote">ShellRemote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        {/* <Route path="/shell-remote" element={<ShellRemote />} /> */}
      </Routes>
    </React.Suspense>
  );
}


class ContactRootAppElement extends HTMLElement {
  root!: Root;
  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />)
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('app-react-contact', ContactRootAppElement);

export default App;
