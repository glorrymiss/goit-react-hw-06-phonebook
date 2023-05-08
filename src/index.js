import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
