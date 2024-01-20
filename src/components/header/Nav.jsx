import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav_header">
			<Link to="/" className="">
				Accueil
			</Link>
			<Link to="/a-propos" className="">
				A Propos
			</Link>
		</nav>
	);
} 

