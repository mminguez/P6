import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import Collapsible from '../components/Collapsible';
import '../assets/css/Fiche.css';
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'



function Fiche() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [element, setElement] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchElement = async () => {
      const response = await fetch('/logements.json');
      const data = await response.json();
      const foundElement = data.find((el) => el.id === id);

      if (!foundElement) {
        navigate('/404');
      } else {
        setElement(foundElement);
      }
    };

    fetchElement();
  }, [id, navigate]);

  if (!element) {
    return <div>Loading...</div>;
  }

  
  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + element.pictures.length) % element.pictures.length);
  };

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % element.pictures.length);
  };

  return (
    <div className="fiche">
      <div className="image-carousel">
        <img className="main-image" src={element.pictures[imageIndex]} alt={element.title} />
        {element.pictures.length > 1 && (
          <>
            <button className="arrow arrow_carousel left" onClick={handlePrevImage}>
              <img src={arrow_left} alt="\/" className="arrow_left" />
            </button>
            <div className="index-display">
              {imageIndex + 1}/{element.pictures.length}
            </div>
            <button className="arrow arrow_carousel right" onClick={handleNextImage}>
              <img src={arrow_right} alt="\/" className="arrow_right" />
            </button>
          </>
        )}
      </div>
      <div className="info-fiche">
        <div className="info">
          <div className="info-loc">
            <h1>{element.title}</h1>
            <p className="location">{element.location}</p>
            <div className="tags">
              {element.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="info-right">
            <div className="info-host">
              <p className="host-name">{element.host.name}</p>
              <img className="host-picture" src={element.host.picture} alt={element.host.name} />
            </div>
            <div className="rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`star ${index < element.rating ? 'filled' : ''}`}>&#9733;</span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapsibles">
          <Collapsible title="Description" content={element.description} />
          <Collapsible title="Equipements" content={<ul>{element.equipments.map((equipment, i) => <li key={i}>{equipment}</li>)}</ul>} />
        </div>
      </div>
    </div>
  );
}

export default Fiche;