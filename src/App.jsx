import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./components/Layout.jsx";

const App = () => {
  return (
    <div className="root-container">
      <Layout />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
