import './estilo.css';


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return(
        <ul>
          { textoOpcoes.map( (texto) => (
            <li><p>{texto}</p></li>
          ) ) }
        </ul>
      

    )
};

export default OpcoesHeader;