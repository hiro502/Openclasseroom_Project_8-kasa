import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import flecheDroite from '../../assets/arrow_right.svg'
import flecheGauche from '../../assets/arrow_left.svg'

const Carrousel = ({ targetId }) => {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.pictures.length) % data.pictures.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.pictures.length);
  };

  if (!data || data.pictures.length === 0) {
    return <div>Loading...</div>;
  }

  const pictures = data.pictures;

  return (
    <div className='carrousel_container'>
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      {data.pictures.length > 1 && (
        <div className='carrousel_fleche'>
          <img src={flecheGauche} alt='fleche gauche' onClick={handlePrev} />
          <img src={flecheDroite} alt='fleche droite' onClick={handleNext} />
        </div>
      )}
      {data.pictures.length > 1 && (
        <div className='carrousel_counter'>{`${currentIndex + 1} / ${pictures.length}`}</div>
      )}
    </div>
  );
};

export default Carrousel;


// className={currentIndex === 0 ? 'active' : ''} 