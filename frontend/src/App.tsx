import Layout from "./components/ui/layout/layout/Layout";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import DashboardPage from "./routes/Dashboard";
import SettingsPage from "./routes/Settings";
import StockPage from "./routes/Stock";
import StockItemPage from "./routes/StockItem";
import InfoPage from "./routes/Info";
import FormPage from "./routes/Form";
import UseCallbackDemoPage from "./routes/UseCallbackDemo";
import UseMemoDemoPage from "./routes/UseMemoDemo";
import CreatePortalDemoPage from "./routes/createPortalDemo";
import FeedPage from "./routes/FeedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "stock", element: <StockPage /> },
      { path: "stock/view/:uuid", element: <StockItemPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "info", element: <InfoPage /> },
      { path: "form", element: <FormPage /> },
      { path: "use-callback", element: <UseCallbackDemoPage /> },
      { path: "use-memo", element: <UseMemoDemoPage /> },
      { path: "create-portal", element: <CreatePortalDemoPage /> },
      { path: "feed", element: <FeedPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
