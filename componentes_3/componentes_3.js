let section3 = document.createElement('section');
section3.className = "section-c3"

let h1 = document.createElement('h1');
h1.className = "titulo-c3"
h1.innerText = "Contacto"
section3.appendChild(h1)

let formulario = document.createElement('input');
formulario.className = "formulario"
section3.appendChild(formulario);

let boton = document.createElement('button');
boton.className = "btn";
boton.innerText = "enviar"
section3.appendChild(boton)

export {section3};