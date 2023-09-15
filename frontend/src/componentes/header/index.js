
import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';

const HeaderContainer= styled.header`

    display: flex;
    background-color: #FFF;
    justify-content: center;

`
function Header(){
    return(
        <HeaderContainer  >
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
        </HeaderContainer>

    )
};
export default Header;