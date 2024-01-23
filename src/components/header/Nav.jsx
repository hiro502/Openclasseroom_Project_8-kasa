import {Link, useLocation } from "react-router-dom";

export default function Nav() {

	const location = useLocation();
	const getClassBasedOnURL = (link) => {
		if(location.pathname === "/" && link === "Acceuil"){
			return "active_link";
		}else if(location.pathname === "/a_propos" && link === "Propos"){
			return "active_link";

		}else {
			return"";
		}
	}

	return (
		<nav className="nav_header">
			<Link to="/" className={getClassBasedOnURL("Acceuil")}>
				Accueil
			</Link>
			<Link to="/a_propos" className={getClassBasedOnURL("Propos")}>
				A Propos
			</Link>
		</nav>
	);
} 

