import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "./routes.tsx";
import { GlobalStyle } from "./styles/global-styles.ts";
import { defaultTheme } from "./styles/themes/default-theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<RouterProvider router={routes} />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>,
);
