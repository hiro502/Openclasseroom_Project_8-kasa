import React from "react";
import './style/App.scss';
import { HashRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer" 
import Acceuil from "./pages/acceuil/Acceuil"
import Logement from "./pages/logement/Logement"
import NotFound from "./pages/error/NotFound"
import APropos from "./pages/a_propos/APropos"


function App() {
  return (
    
    <HashRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" exact element={<Acceuil />} />
					<Route path="/a_propos" element={<APropos />} />
					<Route path="/logement/:id" element={<Logement />} />
					<Route path="*" element={<NotFound />} /> 
				</Routes>
			</main>
			<Footer />
    </HashRouter>
  );
}

export default App;
