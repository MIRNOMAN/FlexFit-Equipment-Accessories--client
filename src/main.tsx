import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.tsx";

import { store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

      <Toaster />
    </Provider>
  </StrictMode>
);
