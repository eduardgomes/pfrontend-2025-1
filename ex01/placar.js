import React from 'react';

function Placar({ placarJogador1, placarJogador2 }) {
  return (
    <div>
      <h2>Placar</h2>
      <p>{placarJogador1} x {placarJogador2}</p>
    </div>
  );
}

export default Placar;