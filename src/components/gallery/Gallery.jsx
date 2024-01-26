import Card from "../../components/card/Card"
import { Link } from 'react-router-dom';
import dataLogements from '../../data/logements.json';


export default function Gallery() {
  const idArray = dataLogements.map(item => item.id);
  console.log(idArray);
  return (
    <div className="cards_container">
      {dataLogements.map((dataLogements) => (
        <Link className='card' to={`/logement/${dataLogements.id}`}  key={dataLogements.id}>
          <Card  data={dataLogements} />
        </Link>
      ))}
    </div>
  )
}
