
/* function Slider(){
    const sliders = [...document.querySelectorAll('.slider__elemento')]; 
    const Anterior = document.querySelector('#anterior');
    const Siguiente = document.querySelector('#siguiente');
    let value;
    Anterior.addEventListener('click', ()=>changePosition(-1));
    Siguiente.addEventListener('click', ()=>changePosition(1));
    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__activo').dataset.id);
        value = currentElement;
        value += change;
        if(value === 0 || value === sliders.length + 1 ){
            value = value === 0 ? sliders.length :1;
        }
        sliders[currentElement-1].classList.toggle('slider__activo')
        sliders[value-1].classList.toggle('slider__activo')
    }
}Slider()

function interaccionFormulario(){
    const botonCliente =document.querySelector('.boton__cliente');
    const botonArtista = document.querySelector('.boton__artista');
    botonCliente.addEventListener('click', ()=>moverboton(1));
    botonArtista.addEventListener('click', ()=>moverboton(2));
    function moverboton(arg){
        if (arg === 1){
            if(botonCliente.classList.contains('mover__cliente')){
                botonCliente.classList.replace('mover__cliente','centrar__cliente')
                botonArtista.classList.replace('centrar__artista','mover__artista')
            }
            else{
                botonCliente.classList.add('centrar__cliente')
                botonArtista.classList.add('mover__artista')
            }
        }
        if(arg == 2){
          if(botonArtista.classList.contains('mover__artista')){
              botonArtista.classList.replace('mover__artista','centrar__artista')
              botonCliente.classList.add('mover__cliente')
          }
          else{
              botonArtista.classList.add('centrar__artista')
              botonCliente.classList.add('mover__cliente')
          }
        }
    }
}interaccionFormulario();
function mostrarFormulario(){
    const formulario = document.querySelector ('.formulario')
    const formularioArtista = document.querySelector('.formulario__artista')
    const formularioCliente = document.querySelector('.formulario__cliente')
    const botonCliente =document.querySelector('.boton__cliente');
    const botonArtista = document.querySelector('.boton__artista');
    botonCliente.addEventListener('click', ()=>mostrarFormulario(1));
    botonArtista.addEventListener('click', ()=>mostrarFormulario(2));
    function mostrarFormulario(arg){
        if(arg === 1){
            if(formulario.classList.contains('mostrar__formularioArtista0')){
                formulario.classList.replace('mostrar__formularioArtista0', 'mostrar__formularioCliente0')
                formularioArtista.classList.remove('mostrar__formulario')
                formularioCliente.classList.add('mostrar__formulario')  
            }
            else{
                formulario.classList.add('mostrar__formularioCliente0')
                formularioArtista.classList.remove('mostrar__formulario')
                formularioCliente.classList.add('mostrar__formulario')  
                
            }
        }
        if (arg == 2){
            if(formulario.classList.contains('mostrar__formularioCliente0')){
                formulario.classList.replace('mostrar__formularioCliente0', 'mostrar__formularioArtista0')
                formularioCliente.classList.remove('mostrar__formulario')
                formularioArtista.classList.add('mostrar__formulario')  
            }
            else{
                formulario.classList.add('mostrar__formularioArtista0')
                formularioCliente.classList.remove('mostrar__formulario')
                formularioArtista.classList.add('mostrar__formulario')  
            }
        }
        
    }

}mostrarFormulario();
function mensajeEnviado(){
    const formulario = document.querySelector ('.formulario')
    const botonCliente =document.querySelector('.boton__cliente');
    const botonArtista = document.querySelector('.boton__artista');
    const botonEnviadoCliente = document.querySelector('#enviar__cliente');
    const botonEnviadoArtista = document.querySelector('#enviar__artista');
    const formularioArtista = document.querySelector('.formulario__artista')
    const formularioCliente = document.querySelector('.formulario__cliente')
    const mensajeEnviado = document.querySelector('.formulario__enviado')
    const botonAceptar =document.querySelector('#boton__aceptar')
    const mostrarEnviado= (event) =>{
        event.preventDefault();
        console.log('pruebaevent')
        botonArtista.classList.add('ocultar');
        botonCliente.classList.add('ocultar');
        formularioArtista.classList.add('ocultar');
        formularioCliente.classList.add('ocultar');
        formulario.classList.add('ocultar');
        mensajeEnviado.classList.add('mostrar');
    }
    const revertir = (event) =>{
        event.preventDefault();
        console.log('pruebaevent')
        botonArtista.classList.remove('ocultar','mover__artista', 'centrar__artista');
        botonCliente.classList.remove('ocultar', 'mover__cliente', 'centrar__cliente');
        formularioArtista.classList.remove('ocultar');
        formularioCliente.classList.remove('ocultar');
        formulario.classList.remove('ocultar','mostrar__formularioCliente0','mostrar__formularioArtista0');
        mensajeEnviado.classList.remove('mostrar');
        

    }
    botonAceptar.addEventListener('click', revertir)
    botonEnviadoCliente.addEventListener('click', mostrarEnviado);
    botonEnviadoArtista.addEventListener('click', mostrarEnviado);
}mensajeEnviado(); */
function menuDesplegable(){
    const botonRayitas = document.querySelector('#boton__rayitas');
    const Menudesplegable = document.querySelector('.navegacion__movil--desplegable')
    function mostrarMenu(){
        Menudesplegable.classList.toggle('mostrar');
    }
    botonRayitas.addEventListener('click', mostrarMenu)
}
menuDesplegable();
