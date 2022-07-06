export default function Elements() {

    // Inputs do usuário
    const volumeTamborInput = document.querySelector('#volume-tambor');

    const vazaoPermeadoInput = document.querySelector('#vazao-permeado');
    
    // Elemento HTML para receber o output
    const output = document.querySelector('.output')

    return {
        volumeTamborInput,
        vazaoPermeadoInput,
        output
    }
}

