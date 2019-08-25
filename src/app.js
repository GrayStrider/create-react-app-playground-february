import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { hot } from 'react-hot-loader/root';
import Todo from './containers/App';
import TodoWithFrameworkComponents from './containers/TodoWithFrameworkComponents';
import Kanban from './pages/Kanban/App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import SemanticPlayground from './pages/SemanticPlayground';

library.add(faBell, faBars);


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Todo}/>
          <Route exact path='/TodoWithFrameworkComponents'
                 component={TodoWithFrameworkComponents}/>
          <Route exact path='/kanban'
                 component={Kanban}/>
          <Route exact path='/semantic'
                 component={SemanticPlayground}/>

          <Redirect from='*' to='/'/>
        </Switch>
      </div>
    );
  }
}

export default hot(App);
