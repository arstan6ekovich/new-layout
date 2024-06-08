import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/layout/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";
import LayoutAdmin from "../pagesAdmin/components/Layout/layoutAdmin";
import DashboardPage from "../pagesAdmin/pages/DashboardPage";
import SettingsPage from "../pagesAdmin/pages/SettingsPage";
import Sigin from "../pagesSide/components/sigin/Sigin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/dashboar",
        element: <DashboardPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/sigin",
    element: <Sigin/>
  }
]);
