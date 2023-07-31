import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Index from './app/page';

class ReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
      this
    );
  }
}

customElements.define('next-remote-root', ReactElement);
