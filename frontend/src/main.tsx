import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserBalanceContextProvider from "./context/UserBalance.tsx";
import UserCryptoListContextProvider from "./context/UserCryptoList.tsx";
import store from "./store.ts";
import { Provider } from "react-redux";
import { UserStateProvider } from "./context/UserStateContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <UserStateProvider>
      <UserBalanceContextProvider>
        <UserCryptoListContextProvider>
          <App />
        </UserCryptoListContextProvider>
      </UserBalanceContextProvider>
    </UserStateProvider>
  </Provider>,
);
