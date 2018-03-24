import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import SignIn from './components/SignIn';

export const routes = <Layout>
  <Route exact path='(/|/signIn)' component={SignIn} />
</Layout>;
