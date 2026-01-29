import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserBalanceContextProvider from "./context/UserBalanceContext.tsx";
import UserCryptoListContextProvider from "./context/UserCryptoContext.tsx";
import CryptoListContextProvider from "./context/CryptoListContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserBalanceContextProvider>
        <UserCryptoListContextProvider>
          <CryptoListContextProvider>
            <App />
          </CryptoListContextProvider>
        </UserCryptoListContextProvider>
      </UserBalanceContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
