export default function Events({
    volumeTamborInput,
    vazaoPermeadoInput,
    output,
    volumeTambor,
    vazaoPermeado,
    produto,
    calculaRegulagemFluxo
}) {

    volumeTamborInput.addEventListener('change', (e) => {
        volumeTambor = e.target.value; // Capacidade do tambor de mistura, medida em litros (L)
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, volumeTambor, vazaoPermeado);
        
        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }
    })
    
    vazaoPermeadoInput.addEventListener('change', (e) => {
        vazaoPermeado = e.target.value; // Vazão medida em litros por minuto (L/min ou LPM)
    
        output.children[1].children[0].textContent = calculaRegulagemFluxo(produto, volumeTambor, vazaoPermeado);

        if (Number(output.children[1].children[0].textContent) <= 0 || Number(output.children[1].children[0].textContent) > 100) {
            
            output.children[1].innerHTML = "<p>Erro nos dados de entrada!</p>"

            output.style.setProperty("background-color", "red");
        } else {

            output.children[1].innerHTML = "<p>Regule o fluxo para <strong>" + output.children[1].children[0].textContent + "</strong>%</p>"

            output.style.setProperty("background-color", "hsl(var(--hue), 80%, 70%)");
        }
    })  
}