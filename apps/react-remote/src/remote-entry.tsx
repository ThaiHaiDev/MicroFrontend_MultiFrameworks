import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

class ReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      this
    );
  }
}

customElements.define('react-remote-root', ReactElement);
