import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export const routes = (
  <Layout>
    <Switch>
      <Route exact path="(/|/signin)" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Layout>
);
