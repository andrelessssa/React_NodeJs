import './App.css';
import Logo from './componentes/logo';

function App() {
  return (
    <div  className='app'>
      <header className='header-app' >
        <Logo/>
        <ul>
          <li><p>Categoria</p></li>
          <li><p>Minha Estante</p></li>
          <li><p>Favorifos</p></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
