import React from "react";
import Message from "./Message.jsx";

const Person = (props) => {
  console.log(props);

  //! destructuring
  const { name, img, tel } = props.kisi;

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{tel}</p>

      <Message isim={name} />
    </div>
  );
};

export default Person;
