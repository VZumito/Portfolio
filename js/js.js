document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
  
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, rellene todos los campos del formulario.');
    } else {
      
      alert('Los datos se han enviado correctamente.');
      
    }
  });