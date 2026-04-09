import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserBalanceContextProvider from "./context/UserBalance.tsx";
import UserCryptoListContextProvider from "./context/UserCryptoList.tsx";
import store from "./store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <UserBalanceContextProvider>
      <UserCryptoListContextProvider>
        <App />
      </UserCryptoListContextProvider>
    </UserBalanceContextProvider>
  </Provider>,
);
