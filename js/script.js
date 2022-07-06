import Elements from "./elements.js"
import Settings from "./settings.js";
import Events from "./events.js"

const {
    volumeTamborInput,
    vazaoPermeadoInput,
    output
} = Elements();

let volumeTambor = volumeTamborInput.value;
let vazaoPermeado = vazaoPermeadoInput.value;

const {
    produto,
    bomba
} = Settings();

// Função que calcula a regulagem de fluxo
function calculaRegulagemFluxo(produto, volumeTambor, vazaoPermeado) {
   
    const massaCloroAtivo = produto.quantidade * produto.densidade * produto.pureza; // Medida em gramas de cloro ativo

    const concentracaoCloroAtivo = 1000 * massaCloroAtivo / volumeTambor; // Medida em mg/L

    const concentracaoCloroAtivoPortaria = 1 // Portaria estabelece medida entre 0,2 e 2 mg/L; usando 1 mg/L como alvo

    const vazaoDosadora = vazaoPermeado * (concentracaoCloroAtivoPortaria / concentracaoCloroAtivo);

    const regulagemFluxo = 100 * vazaoDosadora / bomba.vazaoMaxima;

    return regulagemFluxo.toPrecision(3);
}

// Importemos os eventos definidos para detectar mudança dos inputs
Events({
    volumeTamborInput,
    vazaoPermeadoInput,
    output,
    volumeTambor,
    vazaoPermeado,
    produto,
    calculaRegulagemFluxo
});

// Calculemos a regulagem assim que a página abre, com os valores padrão
output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, volumeTambor, vazaoPermeado);

// Coloque o segundo input em foco, imediatamente
vazaoPermeadoInput.focus();
