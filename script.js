document.getElementById('showFormBtn').addEventListener('click', function() {
    const orderForm = document.getElementById('orderForm');
    orderForm.style.display = 'block';
    
    // Desplaza la página para que el usuario vea el formulario
    orderForm.scrollIntoView({ behavior: 'smooth' });
});

// Este código solo evita el recargado de la página. 
// La lógica de envío se manejará con el atributo "action" del formulario.
document.getElementById('orderForm').addEventListener('submit', function(event) {
    //event.preventDefault(); // Comenta o borra esta línea cuando uses el backend real
});
