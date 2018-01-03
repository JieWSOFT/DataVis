import React from 'react';
import { routerRedux, Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types'
import IndexPage from './routes/IndexPage';
import Example from './components/Example'
import dynamic from 'dva/dynamic'


const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/dataTemplete',
      models: () => [import('./models/data/dataTemplete')],
      component: () => import('./routes/data/dataTemplete'),
    }, {
      path: '/dataIntegrationScheme',
      models: () => [import('./models/data/dataIntegrationScheme')],
      component: () => import('./routes/data/dataIntegrationScheme'),
    }
  ]
  return (
    <ConnectedRouter history={history}>
      <IndexPage>
        <Switch>
          <Route path="/" exact component={Example} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </IndexPage>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}
export default RouterConfig;
