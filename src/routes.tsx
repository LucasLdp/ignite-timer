import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/history",
				element: <History />,
			},
		],
	},
]);
