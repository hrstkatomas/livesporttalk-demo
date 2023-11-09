import React from "react";
import { createRoot } from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import { Stats } from "./components/Stats";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(<Stats />);
