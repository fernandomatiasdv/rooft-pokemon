import styled from 'styled-components';
import color from "../../styles/colores";

const MainStyled = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${color.primarios.mostaza};
    padding: 80px;
`;

const Main = ({ children }) => <MainStyled>{children}</MainStyled>

export default Main