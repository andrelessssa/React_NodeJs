
import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    
`
const LogoImagem = styled.img`
    margin-left: 20px;
`


function Logo(){
    return(
    <LogoContainer>
        <LogoImagem src={logo} alt='logo da alura'></LogoImagem>
        <p><strong>Alura</strong>Books</p>
    </LogoContainer>

)};


export default Logo;