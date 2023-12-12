import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages
// up
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
import Auth from "./util/auth";
import UserDash from "./pages/userDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: Auth.loggedIn() ? <Helporask /> : <LoginForm />,
    errorElement: Auth.loggedIn() ? <ErrorPage /> : <LoginForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/AIhelp",
    element: Auth.loggedIn() ? <AIhelp /> : <LoginForm />,
  },
  {
    path: "/endpage",
    element: Auth.loggedIn() ? <Endpage /> : <LoginForm />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/helpneeded",
    element: Auth.loggedIn() ? <HelpNeeded /> : <LoginForm />,
  },
  {
    path: "/helporask",
    element: Auth.loggedIn() ? <Helporask /> : <LoginForm />,
  },

  {
    path: "/techdash",
    element: Auth.loggedIn() ? <TechDash /> : <LoginForm />,
  },
  {
    path: "/userdash",
    element: Auth.loggedIn() ? <UserDash /> : <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    <RouterProvider router={router} />
  </React.StrictMode>
);
