import Carrousel from "../../components/carrousel/Carrousel";
import { useLocation } from "react-router-dom";




export default function FicheLogement() {
  
  const location = useLocation();
  const currentURL = location.pathname;
  const match = currentURL.match(/\/([^/]+)\/?$/);
  const targetId = match ? match[1] : null;
  console.log(targetId);


  return (
    <div>
      <Carrousel targetId={targetId}/>

      dqsd
    </div>
  )
}
