// React
import React from "react";
import ReactDOM from "react-dom";
//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//Reducer
import { reducers } from "./reducers";
// Material UI
import { MuiThemeProvider } from "@material-ui/core/styles";
// Components
import Appbar from "./Appbar";
import Content from "./Content";
// Custom Styling
import "./css/index.css";
import theme from "./theme";
// import Cart from "./container/Cart";
//------------------

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <Router>
          <Switch>
            <Route path="/cart"> */}
        <Appbar />
        {/* </Route> */}
        {/* <Route path="/"> */}
        {/* <Appbar /> */}
        <Content />
        {/* </Route> */}
        {/* </Switch>
        </Router> */}
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
