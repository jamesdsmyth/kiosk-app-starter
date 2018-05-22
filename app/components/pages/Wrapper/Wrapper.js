import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import App from '../../../containers/App';
import Header from '../../../components/organisms/Header/Header';
import LandingPage from '../../../components/pages/Landing/LandingPage';
import CategoryPage from '../../../components/pages/Category/CategoryPage';

/*
  The component renders the global wrapper of the kiosk app.
 */
export default () => (
  <App>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/category" component={CategoryPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </App>
);
