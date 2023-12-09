import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages

//import radix theme
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

// router paths for site
import AIhelp from "./pages/issueform";
import LoginForm from "./pages/login";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Endpage from "./pages/endpage";
import HelpNeeded from "./pages/helpneeded";
import CreateAccount from "./pages/SignupForm";
import Helporask from "./pages/askorhelp";
import TechDash from "./pages/techDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Helporask />,
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
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/helpneeded",
    element: <HelpNeeded />,
  },
  {
    path: "/helporask",
    element: <Helporask />,
  },

  {
    path: "/techdash",
    element: <TechDash />,
  },

  // {
  //   path: "/dashboard/:userid",
  //   element: <UserDashSidebar />,
  //   children: [
  //     {
  //       path: "/:ticketid",
  //       element: <UserDashContent />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    <RouterProvider router={router} />
  </React.StrictMode>
);
