import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Kita tidak menggunakan ini lagi
// import { legacy_createStore as createStore } from "redux";
// import { initialValue, rootReducer } from "./reducers/rootReducer";

import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CounterReducerContainer from "./containers/CounterReducerContainer";
import CounterReduxContainer from "./containers/CounterReduxContainer";

// kita tidak menggunakan ini lagi
// const store = createStore(rootReducer, initialValue);

// Kita import store dari app/store yang digunakan
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="use-reducer" element={<CounterReducerContainer />} />
            <Route path="react-redux" element={<CounterReduxContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
