

// alert("Bienvenido a mi portfolio!")

const nombre = prompt("Cómo te llamas?")

alert("Hola " + nombre + "! Bienvenido a mi portfolio!")

// Array de frases
const frases = [
        "Hacerme una transferencia, tal vez no te sirva de mucho pero me hara mas feliz a mi.",
        "Tomarte un vasito de agua antes de dormir.",
        "Si estas de mal humor vete a dormir asi todos felices.",
        "Cuanto mas sal mejor.",
        "Vive y deja vivir, gracias."]
        "No pruebes oreos de coca,es el peor error que podrias cometer"
    // Función para generar una frase aleatoria
    function generarFrase() {
        // Genera un índice aleatorio dentro del rango de la longitud del array de frases
        const indice = Math.floor(Math.random() * frases.length);
        // Obtiene la frase correspondiente al índice generado
        const fraseAleatoria = frases[indice];
        // Muestra la frase en el footer
        document.getElementById("frase").innerText = fraseAleatoria;
    }
    // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
    document.getElementById("btn-generar").addEventListener("click", generarFrase);
    