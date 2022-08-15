import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

import { Provider as ProviderJotai } from "jotai";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProviderJotai>
      <App />
    </ProviderJotai>
  </React.StrictMode>
);
