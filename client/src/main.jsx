import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import pages
import AIhelp from "./pages/issueform";
import LoginForm from "./pages/login";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Endpage from "./pages/endpage";

// router paths for site

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
