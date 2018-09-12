import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage}/>
        </Switch>
        <Route path="/products" exact component={Products}/>
      </div>
    </Router>
  );
}

export default RouterConfig;