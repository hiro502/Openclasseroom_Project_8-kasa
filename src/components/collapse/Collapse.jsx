import { useState } from "react"
import img from "../../assets/arrow_up.svg"

export default function Collapse({page, text}) {
    const [open, setOpen] = useState(false)
    const handleCollapseClick = () => setOpen((prev) => !prev)
    console.log(open);


  return (
    <div className={`${page}_collapse_container`}>
        <div className="collapse_header collapse_default">
            <h3>{text}Fiabilité</h3>
            <img src={img} alt=""  onClick={handleCollapseClick}/>
        </div>
        <div className="collapse_content">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>

    </div>
  )
}
