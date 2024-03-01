document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    const nombreError = document.querySelector('#nombre');
    const emailError = document.querySelector('#email');
    const mensajeError = document.querySelector('#mensaje');

    
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, rellene todos los campos del formulario.');
      if (nombre === ''){        
        nombreError.classList.add("error");
      } else {
        nombreError.classList.remove("error");
      } 
      if (email === ''){        
        emailError.classList.add("error");
      } else {
        emailError.classList.remove("error");
      }
      if (mensaje === ''){        
        mensajeError.classList.add("error");
      } else {
        mensajeError.classList.remove("error");
      }
    } else {
      alert('Los datos se han enviado correctamente.');
      nombreError.classList.remove("error");
      emailError.classList.remove("error");
      mensajeError.classList.remove("error");
    }
    

  });


  // Toggle

const toggle = document.getElementById('toggle')
const toggleIcon = document.getElementById('toggleIcon')
const menu = document.getElementById('menu')
let showMenu = false;

toggle.addEventListener('click', toggleMenu)

function toggleMenu(){
    if (!showMenu){
        toggleIcon.src='./logos/icon-close.svg';
        showMenu = true;
    } else {
        toggleIcon.src='./logos/icon-hamburger.svg';
        showMenu = false;
    }
}


