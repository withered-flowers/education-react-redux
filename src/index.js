import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Apabila pada saat menggunakan useReducer kita membuat dan menggunakan
// reducernya dari sisi Component yang ingin digunakan, maka pada redux,
// kita benar benar membuatnya secara "global" di index.js (root Component)

// Kenapa legacy? nanti kita akan telusuri yah !
import { legacy_createStore as createStore } from "redux";
// Jangan lupa import reducernya juga
import { initialValue, rootReducer } from "./reducers/rootReducer";

// Jangan lupa juga untuk import Provider dari react-redux
import { Provider } from "react-redux";

import CounterReducerContainer from "./containers/CounterReducerContainer";
// Jangan lupa untuk import CounterReduxContainer
import CounterReduxContainer from "./containers/CounterReduxContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

// di sini kita akan membuat "store"-nya (global state manager-nya)
const store = createStore(rootReducer, initialValue, undefined);

root.render(
  <React.StrictMode>
    {/* Di sini kita menggunakan provider */}
    {/* Provider menerima sebuah attributes bernama "store", 
        yang valuenya adalah store yang kita buat sebelumnya  */}
    {/* Mirip dengan Context API pada React */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="use-reducer" element={<CounterReducerContainer />} />
            {/* Jangan lupa ganti elementnya menjadi CounterReduxContainer */}
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
