import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Salon from '../components/Salon';
import { AppRouteProps } from '../interfaces';

import './App.scss';

function dummyLayout(props: any) {
  return props.children;
}

// HERE you can customized for differnet routes like private route and public one
const AppRoute: FC<AppRouteProps> = (props: any) => {
  const { children, component, layout, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        const Layout = layout ? layout : dummyLayout;
        return (<Layout>{component ? React.createElement(component) : children}</Layout>)
      }}
    />
  );
};

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/salon" component={Salon} layout={MainLayout} />
        <Redirect exact path="/*" to={'/salon'} />
      </Switch>
    </Router>
  );
}

export default App;
