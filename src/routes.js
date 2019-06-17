import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import Home from './views/home';
import Transactions from './views/transactions';
import Transfer from './views/transfer';

export default () => (
  <div className="swap-app">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/transfer" exact component={Transfer} />
      </Switch>
    </BrowserRouter>
  </div>
);
