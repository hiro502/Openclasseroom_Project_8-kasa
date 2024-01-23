import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "../../components/card/Card"
import { Link } from 'react-router-dom';



export default function Gallery() {
  const [dataLogements, setDataLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try{
        const response = await axios.get('/logements.json');
        setDataLogements(response.data);
        console.log('Data logements:', response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }

    };

    fetchData();
  }, []);


  return (
    <div className="cards_container">
      {dataLogements.map((dataLogements, id) => (
        <Link className='card' to={`/logement/${dataLogements.id}`}>
          <Card key={dataLogements.id} data={dataLogements} />
        </Link>
      ))}
    </div>
  )
}
