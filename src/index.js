import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./scss/index.scss";
import "./i18n";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-167643587-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
