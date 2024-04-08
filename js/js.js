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
        menu.classList.add('menu');
        menu.classList.remove('menuInvisible');
    } else {
        toggleIcon.src='./logos/icon-hamburger.svg';
        showMenu = false;
        menu.classList.add('menuInvisible');
        menu.classList.remove('menu');
    }
}



 // JSON


const proyectosCont = document.querySelector("proyectosCont");


const requestURL = "./json.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
    const proyectos = request.response;
    showProjects(proyectos);
    };



function showProjects(jsonObj) {
    const projects = jsonObj["proyectos"];
  
    for (var i = 0; i < projects.length; i++) {
      const proyecto = document.createElement("div");
      const myH3 = document.createElement("h3");
      const myImg = document.createElement("img");
      const mydiv = document.createElement("div");
      const myLink = document.createElement("a");
      const myGit = document.createElement("a");
  
      myH3.textContent = proyecto[i].name;
      myImg.textContent = proyecto[i].img;
      myLink.textContent = proyecto[i].url;
      myGit.textContent = proyecto[i].gitHub;

      proyecto.classList.add("proyecto");
      mydiv.classList.add("links");
    
      proyecto.appendChild(myH3);
      proyecto.appendChild(myImg);
      proyecto.appendChild(mydiv);
      mydiv.appendChild(myLink);
      mydiv.appendChild(myGit);
  
      proyectosCont.appendChild(proyecto);
    }
}