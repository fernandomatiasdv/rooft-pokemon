/* 
    Según la página https://www.onlinepalette.com/pokemon/ 
    los colores pertenecientes al branding de la marca Pokémon se
    dividen entre el logo (colores primarios) y 
    uno de sus instrumentos (pokéball, colores secundarios).
*/
const colores = {
    azul: '#0A285F',
    celeste: '#0075BE',
    mostaza: '#D5A100',
    amarillo: '#FFCC00',
    rojo: '#FB1B1B',
    negro: '#000000',
    gris: '#DFDFDF',
    blanco: '#FFFFFF'
}

const {azul, celeste, mostaza, amarillo, rojo, negro, gris, blanco } = colores;

export const primarios = {
    azul,
    celeste,
    mostaza,
    amarillo
}

export const secundarios = {
    rojo, 
    negro, 
    gris, 
    blanco
}

const color = {
    primarios,
    secundarios
}

export default color;