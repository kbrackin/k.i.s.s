import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages
import AIhelp from "./pages/issueform";
import LoginForm from "./pages/login";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Endpage from "./pages/endpage";
import RadLogin from "./pages/radlogin";
import HelpNeeded from "./pages/helpneeded";
import CreateAccount from "./pages/createAccount";
import UserDashboard from "./pages/userDashboard";
import UserDashContent from "./components/userdash-content";
import UserDashSidebar from "./components/userdash-sidebar";


//import radix theme
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

// router paths for site

const router = createBrowserRouter([
  {
    path: "/",
    element: <RadLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/AIhelp",
    element: <AIhelp />,
  },
  {
    path: "/endpage",
    element: <Endpage />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/helpneeded",
    element: <HelpNeeded />,
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/:userid",
    element: <UserDashSidebar />,
    children: [
        {
            path: "/:userid/:ticketid",
            element: <UserDashContent />
        }]
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    <RouterProvider router={router} />
  </React.StrictMode>
);