import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found! Make sure index.html has a div with id='root'.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
