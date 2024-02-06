function mostrarMensaje(tipo, mensaje){
    const alerta = document.createElement('p')
    alerta.textContent = mensaje;
    alerta.classList.add(tipo);
    formulario.appendChild(alerta)
    setTimeout(()=>{
        alerta.remove();
    },2000)
}

const {nombre, email, mensaje} = datos;
if (nombre === "" || email === "" || mensaje === ""){
    mostrarMensaje("Error", "Todos los campos son obligatorios")
    return;
} else {
    mostrarMensaje("Correcto", "Formulario enviado correctamente")
}

const formulario = document.querySelector