import './App.css';
import Logo from './componentes/logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const icones = [ perfil, sacola ]

function App() {
  return (
    <div  className='app'>
      <header className='header-app' >
        <Logo/>
        <ul>
          { textoOpcoes.map( (texto) => (
            <li><p>{texto}</p></li>
          ) ) }
        </ul>
        <ul>
         { icones.map( (icone) => (
           <li className='icone'><img src={icone}></img></li>
         ) ) } 

        </ul>
      </header>
    </div>
  );
}

export default App;
