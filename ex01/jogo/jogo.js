import React from 'react';

function Dado({ valor }) {
  const imagens = {
    1: "1.jpeg",
    2: "2.jpeg",
    3: "3.jpeg",
    4: "4.jpeg",
    5: "5.jpeg",
    6: "6.jpeg",
};

return (
  <img src={imagens[valor - 1]} alt={`Dado ${valor}`} style={{ width: '100px', height: '100px' }} />
);
}

export default Dado;