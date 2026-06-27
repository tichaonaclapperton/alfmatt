import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";

import Layout from "./components/Layout";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/service", element: <ServicePage /> },
			{ path: "/contact", element: <Contact /> },
		],
	},
]);
