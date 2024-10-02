

/**
 * Esta función me permite tomar una carta
 * @param {Array<Strings>} deck una carta del deck 
 * @returns {String} retorna un string, la carata del deck
 */

export const pedirCarta = (deck) => {
    

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}