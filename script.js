// Ejemplo de un script para validar el formulario
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para validar los datos del formulario y enviarlos
    alert('Formulario enviado');
});
