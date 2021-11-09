import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './pages/home/planets/Planets';
import Wish from './pages/home/wish/Wish';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './Store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path="/wishlist"><Wish /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
