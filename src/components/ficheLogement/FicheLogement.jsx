import React, { useState, useEffect, useCallback } from 'react';
import Collapse from '../collapse/Collapse';
import { FaStar } from "react-icons/fa6";
import data from '../../data/logements.json';

const FicheLogement = ({ targetId }) => {
  const [logementData, setLogementData] = useState(null);

  const fetchObjectById = useCallback(async (id) => {
    try {
      const filteredObject = data.find(obj => obj.id === id);
      return filteredObject || null;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchObjectById(targetId);
      setLogementData(result);
    };

    fetchData();
  }, [targetId, fetchObjectById]);

  console.log(logementData && logementData.title);
  const tags = logementData ? logementData.tags.map(txt => (
    <span key={txt} className='logement_tag'>{txt}</span>
  )) : null;

  return (
    <div className='logement_container'>
      <div className='logement_title'>
        <div className='logement_title_content'>
          <h2>{logementData && logementData.title}</h2>
          <p>{logementData && logementData.location}</p>
          <div>
            {tags}
          </div>
        </div>
        <div className='logement_host_container'>
          <div className='logement_host'>
            <p>{logementData && logementData.host.name}</p>
            <img src={logementData && logementData.host.picture} alt="photo de host" />
          </div>
          <div className='logement_rate'>
            {[1, 2, 3, 4, 5].map((index) => (
              <span key={index} className={`${index <= (logementData && logementData.rating) ? '' : 'star'}`}><FaStar /></span>
            ))}
          </div>
        </div>
      </div>
      <div className='logement_collapse'>
          <Collapse page='logement' title={"Description"} text={logementData && logementData.description} />
          <Collapse page='logement' title={"Équipements"} list={logementData && logementData.equipments}/>
      </div>
    </div>
  );
};

export default FicheLogement;
