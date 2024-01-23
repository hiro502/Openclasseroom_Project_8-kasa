import { useState, useRef, useEffect } from "react"
import img from "../../assets/arrow_up.svg"



export default function Collapse({page, title, text}) {
    const [open, setOpen] = useState(false);
    const handleCollapseClick = () => {
        setOpen(!open);
        };

        

  return (
    <div className={`${page}_collapse_container`}>
        <div className="collapse_header">
            <h3>{title}</h3>
            <img src={img} 
            alt="image du toggle"  
            onClick={handleCollapseClick}
            className={`rotating-image ${open ? 'rotate-180' : ''}`}
            />
        </div>
         <div  className="collapse_content"
        style={{maxHeight: open ? "200px" : "0px" }}>
           <p>{text}</p>
        </div>

    </div>
  )
}

