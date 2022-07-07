export default function Elements() {

    // Inputs do usuário
    const quantidadeProdutoInput = document.querySelector('#quantidade-produto');


    const volumeTamborInput = document.querySelector('#volume-tambor');

    const vazaoPermeadoInput = document.querySelector('#vazao-permeado');
    
    const vazaoBombaInput = document.querySelector('#vazao-bomba');

    const cloroAlvoSliderInput = document.querySelector('#cloro-alvo-slider');

    const cloroAlvoInput = document.querySelector('#cloro-alvo');

    // Elemento HTML para receber o output
    const output = document.querySelector('.output')

    quantidadeProdutoInput.disabled = true;
    vazaoBombaInput.disabled = true;
    cloroAlvoSliderInput.disabled = true;
    cloroAlvoInput.disabled = true;

    return {
        quantidadeProdutoInput,
        volumeTamborInput,
        vazaoPermeadoInput,
        vazaoBombaInput,
        cloroAlvoSliderInput,
        cloroAlvoInput,
        output
    }
}

