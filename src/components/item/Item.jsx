import React, { useState } from "react";
import "./item.css";

const Item = ({card}) => {
  const { name, img, options } = card;
  const [showLogo, setShowLogo] = useState(true);
  const handleClick = () => {
    setShowLogo(!showLogo);
  };
  return (
    <div onClick={handleClick} className="card">
      {showLogo ? (
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            console.log(element);
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
