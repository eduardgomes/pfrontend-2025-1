import React, { useState, useEffect } from 'react';
import Dado from './Dado';

function Rodada({ jogador1, jogador2, onRodadaCompleta, rodadaAtual, rodadaCompleta }) {
  const [valorDado1, setValorDado1] = useState(null);
  const [valorDado2, setValorDado2] = useState(null);
  const [jogadorAtivo, setJogadorAtivo] = useState(1);
  const [vencedorRodada, setVencedorRodada] = useState(null);
  const [rodadasJogador1, setRodadasJogador1] = useState([]);
  const [rodadasJogador2, setRodadasJogador2] = useState([]);
  const [exibirDados, setExibirDados] = useState(false);

  const rolarDado = () => {
    if (jogadorAtivo === 1) {
      setValorDado1(Math.floor(Math.random() * 6) + 1);
      setJogadorAtivo(2);
    } else {
      setValorDado2(Math.floor(Math.random() * 6) + 1);
      setJogadorAtivo(1);
      setExibirDados(true);
    }
  };

  useEffect(() => {
    if (exibirDados) {
      const timeoutId = setTimeout(() => {
        setRodadasJogador1([...rodadasJogador1, valorDado1]);
        setRodadasJogador2([...rodadasJogador2, valorDado2]);

        if (valorDado1 > valorDado2) {
          setVencedorRodada(jogador1);
          onRodadaCompleta(1, 0);
        } else if (valorDado2 > valorDado1) {
          setVencedorRodada(jogador2);
          onRodadaCompleta(0, 1);
        } else {
          setVencedorRodada('Empate');
          onRodadaCompleta(0, 0);
        }

        setValorDado1(null);
        setValorDado2(null);
        setExibirDados(false);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [exibirDados, valorDado1, valorDado2, jogador1, jogador2, onRodadaCompleta, rodadasJogador1, rodadasJogador2]);

  const botaoDesabilitado = (jogador) => {
    if (jogador === 1) {
      return jogadorAtivo !== 1 || valorDado1 !== null || rodadaCompleta || exibirDados;
    } else {
      return jogadorAtivo !== 2 || valorDado2 !== null || rodadaCompleta || exibirDados;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h3>{jogador1}</h3>
          {valorDado1 !== null ? <Dado valor={valorDado1} /> : <button style={{ backgroundColor: 'black', color: 'white' }} onClick={rolarDado} disabled={botaoDesabilitado(1)}>Rolar Dado</button>}
        </div>
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h3>{jogador2}</h3>
          {valorDado2 !== null ? <Dado valor={valorDado2} /> : <button style={{ backgroundColor: 'black', color: 'white' }} onClick={rolarDado} disabled={botaoDesabilitado(2)}>Rolar Dado</button>}
        </div>
      </div>
      {vencedorRodada && exibirDados && (
        <p style={{ fontSize: '1.5em', textAlign: 'center' }}>
          Vencedor da rodada {rodadaAtual}: {vencedorRodada}
        </p>
      )}
    </div>
  );
}

export default Rodada;