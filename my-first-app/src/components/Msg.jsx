import React from "react";

//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.
import "./msg.css";

// ? Dahili bir resim eklemek icin import yapmak gereklidir. // ? ancak public klasöründeki resimler importsuz bir şekilde //? erisilebilir.
import apple from "../assets/apple.jpg";

const Msg = () => {
  const stil = {
    color: "blue",
    fontSize: "30px",
  };

  return (
    <div>
      <h2 style={{ color: "red", fontSize: "50px" }}>
        This is the Message space
      </h2>
      <p style={stil}>React</p>
      <img
        className="image"
        src="https://cdn.pixabay.com/photo/2025/04/13/21/14/woman-9532283_960_720.jpg"
        alt=""
      />

      <img className="image" src={apple} alt="" />
      {/* public klasorunde bulunan bir resime dogrudan ana dizinmis gibi yol ile erisilebilir. import gerek yoktur  */}
      <img className="image" src="./apple2.jpg" alt="" />
    </div>
  );
};

export default Msg;
