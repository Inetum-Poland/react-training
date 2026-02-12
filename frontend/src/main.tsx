import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserBalanceContextProvider from "./context/UserBalance.tsx";
import UserCryptoListContextProvider from "./context/UserCryptoList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserBalanceContextProvider>
      <UserCryptoListContextProvider>
        <App />
      </UserCryptoListContextProvider>
    </UserBalanceContextProvider>
  </StrictMode>,
);
