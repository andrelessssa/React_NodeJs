import { livros } from './dadosUltimosLancamentos'

function UltimosLancamentos(){
    return(
        <section>
        <h2>Ultimos Lancamentos</h2>
        {livros.map (livor =>(
            <img src={livros.src}/>

        ))}
        </section>

    )
};

export default UltimosLancamentos;