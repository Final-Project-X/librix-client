import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainRoutes from './components/MainRoutes';

export default function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}
