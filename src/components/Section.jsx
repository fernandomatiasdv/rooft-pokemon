import styled from 'styled-components';
import { useMediaQuery } from 'hooks/useMediaQuery';

const SectionStyled = styled.section.attrs(props => (props))`
    &:first-child{
        height: 80%;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: ${props => props.fdirection};
        justify-content: space-around; 
    }
`;

const Section = ({ children }) => {
    const pantallaGrande = useMediaQuery()
    const fdirection = pantallaGrande ? "row" : "column";
    return (
        <SectionStyled fdirection={fdirection}>
            {children}
        </SectionStyled>
    )
}

export default Section;