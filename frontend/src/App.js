
import Header from './componentes/header/index';
import styled from 'styled-components'

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 );

  li{
  list-style: none;
  padding: 10px;
}
`

function App() {
  return (
    <AppContainer>
      <Header/>
      
    </AppContainer>
  );
}

export default App;
