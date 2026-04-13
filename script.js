// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener el botón y el párrafo donde mostraremos el mensaje
    const boton = document.getElementById('btnSaludar');
    const mensajeDiv = document.getElementById('mensaje');
    
    // Agregar evento al botón
    boton.addEventListener('click', function() {
        // Crear un mensaje personalizado con los datos del docente
        const horaActual = new Date().getHours();
        let saludo = '';
        
        if (horaActual < 12) {
            saludo = 'Buenos días';
        } else if (horaActual < 19) {
            saludo = 'Buenas tardes';
        } else {
            saludo = 'Buenas noches';
        }
        
        mensajeDiv.innerHTML = `✨ ${saludo}, docente Felix Jonathan. Este es mi Portafolio JS desarrollado en Campus Texcoco. ¡Gracias por su guía! ✨`;
        
        // Efecto adicional: cambiar temporalmente el color del botón
        boton.style.backgroundColor = '#ff9800';
        setTimeout(() => {
            boton.style.backgroundColor = '#2a5298';
        }, 500);
    });
    
    // Pequeño efecto dinámico al cargar: mostrar un mensaje de bienvenida temporal
    console.log('Portafolio JS cargado correctamente - Joshua Naim Rico Reyes');
    
    // Opcional: agregar efecto de cambio de ícono (solo para demostrar JS)
    const icono = document.querySelector('.icono');
    if (icono) {
        icono.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(10deg) scale(1.1)';
            this.style.transition = '0.3s';
        });
        icono.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
});