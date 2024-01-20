import React from "react";
import './style/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer" 
import Home from "./pages/acceuil/Home";



function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" exact element={<Home />} />
					{/* <Route path="/a-propos" element={<A-propos />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route element={<Error />} /> */}
				</Routes>
			</main>
			<Footer />
		</div>
    </BrowserRouter>
  );
}

export default App;
