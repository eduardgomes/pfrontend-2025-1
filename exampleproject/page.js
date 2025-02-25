import { useState } from "react";

function Texto1() {
    return <p>Um outro parágrafo em texto.</p>
}

export default function Home() {
    const [hide, setHide] = useState(false);
    const aula = 2;
    return (
        <div>
    <h1>Olá, turma!!!</h1>
    <p>Essa é nossa {aula}ª de React</p>
    <hr>
    <button> { hide ? "Show" : ""}</button>
    </hr>
    {!hide && (
        <>
    <Texto1 />
    </>
    )}
        </div>
    );
}