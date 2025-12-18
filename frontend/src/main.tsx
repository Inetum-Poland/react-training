import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserBalanceContextProvider from "./context/UserBalanceContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserBalanceContextProvider>
      <App />
    </UserBalanceContextProvider>
  </StrictMode>
);
