function Texto1() {
    return <p>Um outro parágrafo em texto.</p>
}

export default function Home() {
    const aula = 2;
    return (
        <div>
    <h1>Olá, turma!!!</h1>
    <p>Essa é nossa {aula}ª de React</p>
    <Texto1 />
        </div>
    );
}