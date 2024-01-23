import React from "react";
import './style/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer" 
import Home from "./pages/acceuil/Home"
import Logement from "./pages/logement/Logement"
import NotFound from "./pages/error/NotFound"
import A_propos from "./pages/a_propos/A_propos"


function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/a_propos" element={<A_propos />} />
					<Route path="/logement/:id" element={<Logement />} />
					<Route path="*" element={<NotFound />} /> 
				</Routes>
			</main>
			<Footer />
		</div>
    </BrowserRouter>
  );
}

export default App;
