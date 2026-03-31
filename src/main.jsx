import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Offline, Online } from "react-detect-offline";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Online> <App /> </Online>
    <Offline> <div>You are offline!</div> </Offline>
  </BrowserRouter>
);
