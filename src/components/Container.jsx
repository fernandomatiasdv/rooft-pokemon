import { Figura, Main, Section } from 'components';

const Paginador = () => {
    return (<p>Paginador</p>)
}
const CajaAparecioPokemon = () => {
    return (<p>CajaAparecioPokemon</p>)
}

const Container = () => {

    return (
        <Main>
            <Section>
                <Figura />
                <Paginador />
            </Section>
            <Section>
                <CajaAparecioPokemon />
            </Section>
        </Main>
    )
}

export default Container;