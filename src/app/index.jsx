import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('app'));





//import React from 'react';
//import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
//import App from './components/app.jsx';
//
//ReactDOM.render(
//    <App />,
//    document.getElementById('app')
//);

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//     <Route path="/auth" component={auth} />
//         <IndexRoute path="home" component={Dashboard} />
//     </Route>
//   </Router>
// ), document.body)
