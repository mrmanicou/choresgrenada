import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shim } from 'promise.prototype.finally';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import App from './components/App';

shim();
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root'),
    );
  });
}
