import React, { useState, useEffect, useCallback } from 'react';
import Collapse from '../collapse/Collapse';
import axios from 'axios';
import { FaStar } from "react-icons/fa6";




const FicheLogement = ({ targetId }) => {
    
    const [data, setData] = useState(null);
    const fetchObjectById = useCallback(async (id) => {
    try {
      const response = await axios.get('/logements.json');
      const jsonData = response.data;
      const filteredObject = jsonData.find(obj => obj.id === id);
      return filteredObject || null;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchObjectById(targetId);
      setData(result);
    };

    fetchData();
  }, [targetId, fetchObjectById]);

  console.log(data && data.title);
  const tags = data ? data.tags.map(txt => (
    <span key={txt} className='logement_tag'>{txt}</span>
  )) : null;
  
  return (
    <div className='logement_container'>
      <div className='logement_title'>
        <div className='logement_title_content'>
          <h2>{data && data.title}</h2>
          <p>{data && data.location}</p>
          <div>
            {tags}
          </div>
        </div>
        <div>
          <div className='logement_host'>
            <p>{data && data.host.name}</p>
            <img src={data && data.host.picture} alt="" />
          </div>
          <div className='logement_rate'>
            {[1, 2, 3, 4, 5].map((index) => (
            <span key={index} className={`${index <= (data && data.rating) ? '' : 'star'}`}><FaStar /></span>
            ))}
          </div>
        </div>
      </div>
      <div className='logement_collapse'>
        <div>
          <Collapse  page='logement' title={"Description"} text={data && data.description} />
        </div>
        <div>
          <Collapse  page='logement' title={"Équipements"} list={data && data.equipments}/>
        </div>
      </div>
    </div>
  )
}

export default FicheLogement