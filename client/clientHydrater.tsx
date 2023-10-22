import React from "react";
import { hydrateRoot } from "react-dom/client";
import { StatsHydrating, StatsProps } from "./components/Stats";

const props = (window as any).props as StatsProps;
hydrateRoot(document.getElementById("stats")!, <StatsHydrating {...props} />);
