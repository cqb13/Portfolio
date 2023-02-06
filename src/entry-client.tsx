import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";

import "./style/index.css";
import "./style/components/techIcons.css";
import "./style/components/navigation.css";
import "./style/components/projectCard.css";
import "./style/components/pageTransition.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
