import styled from 'styled-components';
import color from '../../styles/colores';

const BadgeNombrePokemonStyled = styled.div`
    background-color: ${color.primarios.azul};
    width: 200px;
    height: 30px;
    border-radius: 5px;
    position: absolute;
    top: 20px;
    left: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    color:  ${color.secundarios.blanco};
`

const BadgeNombrePokemon = ({ children }) =>
    <BadgeNombrePokemonStyled>{children}</BadgeNombrePokemonStyled>

export default BadgeNombrePokemon