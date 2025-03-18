"use client"
import { useState } from "react";
import {Dado} from "./com/dado"

export default function App() {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Dado valor={valorDado} />
      <button onClick={rolarDado}>
        Rolar Dado
      </button>
    </div>
  );
}