import Carrousel from "../../components/carrousel/Carrousel";
import FicheLogement from "../../components/ficheLogement/FicheLogement";
import { useLocation } from "react-router-dom";




export default function Logement() {
  
  const location = useLocation();
  const currentURL = location.pathname;
  const match = currentURL.match(/\/([^/]+)\/?$/);
  const targetId = match ? match[1] : null;
  console.log(targetId);


  return (
    <div>
      <Carrousel targetId={targetId}/>
      <FicheLogement targetId={targetId}/>
    </div>
  )
}
