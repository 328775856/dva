import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'
import Count from './routes/count'
import Test from './routes/Test'
import List from './routes/list'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage}/>
        </Switch>
        <Route path="/products" exact component={Products}/>
        <Route path="/count" exact component={Count}/>
        <Route path="/test" exact component={Test}/>
        <Route path="/list" exact component={List}/>
      </div>
    </Router>
  );
}

export default RouterConfig;
