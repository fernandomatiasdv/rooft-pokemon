import styled from 'styled-components';
import color from '../../styles/colores';

const MarcoFotoPrincipalStyled = styled.div`
    background-color: ${color.primarios.celeste};
    width: 370px;
    height: 370px;
    position: relative;
    opacity: 0.9;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
    border: 5px solid ${color.primarios.celeste};
    &:hover{
        opacity: 1;
        cursor: pointer;
        transition-duration: 0.3s;
        transition-timing-function: ease-in;
    }
    &:active{
        transition-duration: 0.1s;
        border: 5px solid  ${color.secundarios.rojo}
    }
`

const MarcoFotoPrincipal = ({ children }) =>
    <MarcoFotoPrincipalStyled>{children}</MarcoFotoPrincipalStyled>

export default MarcoFotoPrincipal;