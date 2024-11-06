// JavaScript para seguimiento de envíos
function trackShipment() {
    const trackingNumber = document.getElementById("tracking-number").value;
    const trackingResult = document.getElementById("tracking-result");

    if (trackingNumber) {
        // Aquí puedes conectar con una API de rastreo o usar datos simulados
        trackingResult.textContent = "Rastreando el envío con número: " + trackingNumber;
    } else {
        trackingResult.textContent = "Por favor, ingresa un número de seguimiento válido.";
    }
}

// JavaScript para formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario para pruebas

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("¡Gracias, " + name + "! Nos pondremos en contacto contigo pronto.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
