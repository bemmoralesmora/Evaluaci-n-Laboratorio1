let section2 = document.createElement('section');
section2.className = "section-c2"

let h1 = document.createElement('h1');
h1.className = "titulo-c2";
h1.innerText = "Caracteristicas"
section2.appendChild(h1);

let lista = document.createElement('td');
lista.className = "lista-c2"
section2.appendChild(lista)

let lista1 = document.createElement('tr');
lista1.innerText = "- item1"
lista.appendChild(lista1);

let lista2 = document.createElement('tr');
lista2.innerText = "- item2"
lista.appendChild(lista2);

let lista3 = document.createElement('tr');
lista3.innerText = "- item3"
lista.appendChild(lista3);

export {section2}