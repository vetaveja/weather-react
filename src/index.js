import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">

    <Weather defaultCity="Lisbon"/>
    <br/>
  
    <footer className="text-center"><a href="https://github.com/vetaveja/weather-react">Open-sourced ptoject</a> made by Lisa Zelena.</footer>
    </div>
  </StrictMode>
);