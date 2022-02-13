import React from "react";
import ReactDom from "react-dom";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import './index.scss';

const Application = (<BrowserRouter>
  <App />
</BrowserRouter>);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Application, rootElement);
} else {
  render(Application, rootElement);
}