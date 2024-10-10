let section = document.createElement('div');
section.className = "section-c1"

let h1 = document.createElement('h1');
h1.className = "titulo-c1"
h1.innerText = "componente_1"
section.appendChild(h1);

let contenedor = document.createElement('div');
contenedor.className = "contenedor-c1"
section.appendChild(contenedor)

let logo = document.createElement('div');
logo.className = "logo-c1";
contenedor.appendChild(logo);

let descripcion = document.createElement('p')
descripcion.className = "descripcion-c1"
descripcion.innerText = "descripcion del componente";
contenedor.appendChild(descripcion);

export {section}