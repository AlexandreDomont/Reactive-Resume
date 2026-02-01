import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

root.render(
  <StrictMode>
    <div className="w-full bg-red-700 text-white text-center py-1 text-xs font-semibold z-50">
      ⚠️ Environnement de développement — Attention Alexandre 2026 ⚠️
    </div>
    <RouterProvider router={router} />
  </StrictMode>
);
