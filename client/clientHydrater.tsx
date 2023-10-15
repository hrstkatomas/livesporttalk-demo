import React from "react";
import { hydrateRoot } from "react-dom/client";
import { StatisticsHydrating, StatisticsProps } from "./components/Statistics";

const props = (window as any).props as StatisticsProps;
hydrateRoot(document.getElementById("statistics")!, <StatisticsHydrating {...props} />);
