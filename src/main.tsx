import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./components/eco/page";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Não achei o elemento #root");

createRoot(root).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
