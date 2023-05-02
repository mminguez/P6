import React, { useState, useEffect } from 'react';
import '../assets/css/Hero.css';
import banner from '../assets/images/IMG.webp'
import { Link } from 'react-router-dom';


function Home() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchElements = async () => {
      const response = await fetch('/logements.json');
      const data = await response.json();
      setElements(data);
    };

    fetchElements();
  }, []);

  return (
    <>
      <div className="hero-container">
        <img
          src={banner}
          alt="Hero banner"
          className="hero-banner"
        />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="grid-container">
        {elements.map((element, index) => (
          <Link key={index} to={`/fiche/${element.id}`}>
            <div key={index} className="grid-item">
              <img src={element.pictures[0]} alt={element.title} />
              <div className="title">{element.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
