import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

const rootElement = document.getElementById("root");

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}
