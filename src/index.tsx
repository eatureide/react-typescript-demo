import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './constants/Hello'
import { Provider } from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './demo'
import { createStore } from 'redux'
import { enthusiasm } from './reducers'

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={ store }>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
