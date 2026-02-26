import Layout from "./components/ui/layout/layout/Layout";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import DashboardPage from "./routes/Dashboard";
import SettingsPage from "./routes/Settings";
import StockPage from "./routes/Stock";
import StockItemPage from "./routes/StockItem";
import InfoPage from "./routes/Info";
import FormPage from "./routes/Form";

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
      { path: "form", element: <FormPage /> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
