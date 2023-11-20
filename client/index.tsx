import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Stats } from "./components/Stats";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("root element not found");

hydrateRoot(rootElement, <Stats {...(window as any).props} />);
