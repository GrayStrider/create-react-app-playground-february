import React from 'react';
import ReactDOM from 'react-dom';
import './utils/index.scss';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';
import configureStore, { history } from './utils/configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const store = configureStore();
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  clientState: {
    defaults: {
      testData: 'test'
    },
    typeDefs: `
  type Query {
    testData: String
  }
`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
