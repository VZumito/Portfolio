const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const formulario = document.querySelector(".formulario");

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);

function leerTexto(){
    console.log(e);
    datos[e.target.id]=e.target.value;
}

function mostrarError(tipo, mensaje){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add(tipo);
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    },2000)
}

function mostrarMensaje(){
    console,log(mensaje);
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const {nombre, email, mensaje} = datos;
    if(nombre === "" || email === "" || mensajes ===""){
            mostrarError("error", "Todos los campos son obligatorios");
        return;
    }

})