import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import Routes dan Route di sini
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom pages
import CounterReducerContainer from "./containers/CounterReducerContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="use-reducer" element={<CounterReducerContainer />} />
          <Route
            path="react-redux"
            element={
              <>
                <h1>React Redux</h1>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
