import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./Layout.jsx";
import { ThemeProvider } from "./theme/themeProvider.jsx";

const App = () => {
    return (
        <div>
            <Layout />
        </div>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>,
);
