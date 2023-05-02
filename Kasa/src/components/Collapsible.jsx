import React, { useState } from 'react';
import '../assets/css/Collapsible.css';
import arrow from '../assets/arrow.svg'


function Collapsible({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <div
        className={`collapsible-header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img src={arrow} alt="\/" className="arrow" />
      </div>
      {isOpen && <div className="collapsible-content">{content}</div>}
    </div>
  );
}

export default Collapsible;
