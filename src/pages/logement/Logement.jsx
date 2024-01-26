import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Carrousel from '../../components/carrousel/Carrousel';
import FicheLogement from '../../components/ficheLogement/FicheLogement';
import dataLogements from '../../data/logements.json';

export default function Logement() {
  const location = useLocation();
  const currentURL = location.pathname;
  const match = currentURL.match(/\/([^/]+)\/?$/);
  const targetId = match ? match[1] : null;
  const idArray = dataLogements.map(item =>item.id.toString());

  
  if (targetId && !idArray.includes(targetId)) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      {targetId && (
        <>
          <Carrousel targetId={targetId} />
          <FicheLogement targetId={targetId} />
        </>
      )}
    </div>
  );
}

