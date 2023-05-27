import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>

    <Weather />
    <br/>
    <a href="https://github.com/vetaveja/weather-react">Open-sourced ptoject</a> made by Lisa Zelena.
  </StrictMode>
);