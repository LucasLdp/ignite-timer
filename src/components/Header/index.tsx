import { Scroll, Timer } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./header-styles";
import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<HeaderContainer>
			<img src={logo} alt="Logo da aplicação" />
			<nav>
				<NavLink to={"/"}>
					<Timer size={24}/>
				</NavLink>
				<NavLink to={"/history"}>
					<Scroll size={24}/>
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
