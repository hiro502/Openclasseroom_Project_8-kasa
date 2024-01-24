import React, { useState, useEffect, useCallback } from 'react';
import flecheDroite from '../../assets/arrow_right.svg';
import flecheGauche from '../../assets/arrow_left.svg';
import data from '../../data/logements.json';

const Carrousel = ({ targetId }) => {
  const [currentData, setCurrentData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      setCurrentData(result);
    };

    fetchData();
  }, [targetId, fetchObjectById]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentData?.pictures.length) % currentData?.pictures.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentData?.pictures.length);
  };

  if (!currentData || currentData.pictures.length === 0) {
    return <div>Loading...</div>;
  }

  const pictures = currentData.pictures;

  return (
    <div className='carrousel_container'>
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      {currentData.pictures.length > 1 && (
        <div className='carrousel_fleche'>
          <img src={flecheGauche} alt='fleche gauche' onClick={handlePrev} />
          <img src={flecheDroite} alt='fleche droite' onClick={handleNext} />
        </div>
      )}
      {currentData.pictures.length > 1 && (
        <div className='carrousel_counter'>{`${currentIndex + 1} / ${pictures.length}`}</div>
      )}
    </div>
  );
};

export default Carrousel;


