import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Redirect } from 'react-router';
import CSSPlayground from './pages/CSS/CSSPlayground';
import CSSPlayground2 from './pages/CSS/CSSPlayground2';
import BoxModel from './pages/CSS/BoxModel';
import FlexBox from './pages/CSS/FlexBox';
import Counter from './components/Counter';
import { hot } from 'react-hot-loader/root';
import ReactTransitionGroupForm from './pages/TransitionGroupForm';
import ExchangeRatesApollo from './pages/ExchangeRatesApollo';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/css' component={CSSPlayground}/>
          <Route exact path='/css2' component={CSSPlayground2}/>
          <Route exact path='/css3' component={BoxModel}/>
          <Route exact path='/flex' component={FlexBox}/>
          <Route exact path='/counter' component={Counter}/>
          <Route exact path='/reacttransitiongroup' component={ReactTransitionGroupForm}/>
          <Route exact path='/apollo' component={ExchangeRatesApollo}/>
          <Route component={NotFound}/>

        </Switch>
      </div>
    );
  }
}

export default hot(App)
