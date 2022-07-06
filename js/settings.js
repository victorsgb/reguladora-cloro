export default function Settings() {

    // Características do produto hipoclorito de cálcio
    const produto = {
        densidade: 0.74, // Medida em gramas por mililitro (g/mL a 25°C)
        pureza: 0.6, // Percentual de cloro ativo no produto
        quantidade: 50 // Medida em mL
    };

    // Características da bomba dosadora
    const bomba = {
        vazaoMaxima: 0.1 // Medida em litros por minuto (L/min ou LPM)
    }

    return {
        produto,
        bomba
    }

}