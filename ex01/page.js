"use client"
import React, { useState, useEffect } from 'react';
import Rodada from './com/Rodada';
import Placar from './com/Placa';

function Jogo() {
  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);
  const [vencedor, setVencedor] = useState(null);
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [rodadaCompleta, setRodadaCompleta] = useState(false);

  const handleRodadaCompleta = (pontosJogador1, pontosJogador2) => {
    setPlacarJogador1(placarJogador1 + pontosJogador1);
    setPlacarJogador2(placarJogador2 + pontosJogador2);

    if (rodadaAtual === 5) {
      if (placarJogador1 > placarJogador2) {
        setVencedor('Jogador 1');
      } else if (placarJogador2 > placarJogador1) {
        setVencedor('Jogador 2');
      } else {
        setVencedor('Empate');
      }
      setRodadaCompleta(true);
    } else {
      setRodadaAtual(rodadaAtual + 1);
    }
  };

  const jogarNovamente = () => {
    setPlacarJogador1(0);
    setPlacarJogador2(0);
    setVencedor(null);
    setRodadaAtual(1);
    setRodadaCompleta(false);
  };

  return (
    <div>
      <h1>Jogo de Dados</h1>
      <Rodada
        jogador1="Jogador 1"
        jogador2="Jogador 2"
        onRodadaCompleta={handleRodadaCompleta}
        rodadaAtual={rodadaAtual}
        rodadaCompleta={rodadaCompleta}
      />
      <Placar placarJogador1={placarJogador1} placarJogador2={placarJogador2} />
      {vencedor && (
        <div style={{ textAlign: 'right', marginTop: '50px' }}>
          <h2 style={{ fontSize: '2em' }}>Vencedor: {vencedor}</h2>
          <button onClick={jogarNovamente}>Jogar Novamente</button>
        </div>
      )}
      {rodadaCompleta && !vencedor && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Fim de Jogo!</h2>
          <button onClick={jogarNovamente}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}

export default Jogo;