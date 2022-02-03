import { BadgeNombrePokemon, MarcoFotoPrincipal } from 'components';
import Image from 'next/image';

export default function Figura() {
    return (
        <MarcoFotoPrincipal >
            <BadgeNombrePokemon>
                Bolbasaur
            </BadgeNombrePokemon>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                alt="Bolbasaur"
                width="350"
                height="350"
            // layout="fill" the image to expands to fill its parent element.
            // Agregar cuando tenga hecho el contenedor de imágenes
            />
        </MarcoFotoPrincipal>
    )
}
