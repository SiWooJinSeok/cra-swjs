import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "jotai";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Element with id 'root' not found.");
} else {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}
