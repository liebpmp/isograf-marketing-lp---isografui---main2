import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IsografUiMain } from "./screens/IsografUiMain";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <IsografUiMain />
  </StrictMode>,
);
