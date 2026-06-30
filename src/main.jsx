import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/global.css";

ReactDom.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<RouterProvider router={router} />
	</HelmetProvider>
);
