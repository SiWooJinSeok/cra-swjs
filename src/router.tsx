import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Sample from "./components/Sample";
import Jotai from "./components/Jotai";
import AxiosPage from "./components/Axios/AxiosPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Sample />,
      },
      {
        path: "/jotai",
        element: <Jotai />,
      },
      {
        path: "/axios",
        element: <AxiosPage />,
      },
    ],
  },
]);

export default router;
