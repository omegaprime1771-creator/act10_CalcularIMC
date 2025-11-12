class Calculadora {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    obtenerCategoria() {
        const imc = this.calcularIMC();
        if (imc < 18.5) return "Bajo peso";
        else if (imc < 24.9) return "Normal";
        else if (imc < 29.9) return "Sobrepeso";
        else return "Obesidad";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("forma");
    const resumen = document.getElementById("resumen");
    forma.addEventListener("submit", (event) => {
        event.preventDefault();
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        if (peso > 0 && altura > 0) {
            const persona = new Calculadora(peso, altura);
            const imc = persona.calcularIMC().toFixed(2);
            const categoria = persona.obtenerCategoria();
            let mensaje = `Tu IMC es <strong>${imc}</strong>. Categoría: <strong>${categoria}</strong>.`;
            let imagen = "";
            if (categoria === "Bajo peso") {
                imagen = "https://cdn-icons-png.flaticon.com/512/706/706195.png";
                mensaje += " Deberías cuidar tu alimentación y ganar un poco de peso.";
            } 
            else if (categoria === "Normal") {
                imagen = "https://cdn-icons-png.flaticon.com/512/706/706164.png";
                mensaje += " ¡Excelente! Mantén tu estilo de vida saludable.";
            } 
            else if (categoria === "Sobrepeso") {
                imagen = "https://cdn-icons-png.flaticon.com/512/706/706176.png";
                mensaje += " Cuida tu dieta y haz algo de ejercicio regularmente.";
            } 
            else if (categoria === "Obesidad") {
                imagen = "https://cdn-icons-png.flaticon.com/512/706/706190.png";
                mensaje += " Te recomendamos visitar a un especialista para cuidar tu salud.";
            }
            resumen.innerHTML = `
                <p>${mensaje}</p>
                <img src="${imagen}" alt="${categoria}" width="120" style="margin-top:10px;">
            `;
        } else {
            resumen.innerHTML = " vuelve a poner los valores ahora de forma";
        }
    });
});
