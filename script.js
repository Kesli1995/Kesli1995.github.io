// Agregar efectos a los botones

const buttons = document.querySelectorAll('.cta-button');



buttons.forEach(button => {

    button.addEventListener('mouseover', () => {

        button.style.transform = 'scale(1.1)';

    });



    button.addEventListener('mouseout', () => {

        button.style.transform = 'scale(1)';

    });

});
