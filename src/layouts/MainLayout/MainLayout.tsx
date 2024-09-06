import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { MainLayoutContainer } from "./main-styles";

export function MainLayout() {
	return (
		<MainLayoutContainer>
			<Header />

			{/* Conteúdo principal do layout */}
			<Outlet />
		</MainLayoutContainer>
	);
}
