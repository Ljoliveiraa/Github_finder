import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/layout/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./scss/index.scss"
// pages
import { Home } from "./pages/home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
