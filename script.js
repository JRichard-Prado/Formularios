// window.onload = function() {
// 	let c1 = document.querySelector('div#c1');
//   let c2 = document.querySelector('div#c2');
//   let c3 = document.querySelector('div#c3');
  
//   let bnext1 = c1.querySelector('button#toc2');
//   let bnext2 = c2.querySelector('button#toc3');
//   let bsend = c3.querySelector('button#enviar');
  
//   bnext1.addEventListener('click', function(e) {
//   	e.disabled = true;
//     c1.classList.add('chidden');
//     c2.classList.remove('chidden');
//   });
  
//   bnext2.addEventListener('click', function(e) {
//   	e.disabled = true;
//     c2.classList.add('chidden');
//     c3.classList.remove('chidden');
//   });
  
//   bsend.addEventListener('click', function(e) {
// 		alert('Se envio el formulario correctamente');
//   });
// };


// window.onload = function() {
// let parte1 = document.getElementById('parte1');
// let parte2 = document.getElementById('parte2');
// let parte3 = document.getElementById('parte3');

// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let anteriores = document.getElementById('.anterior');
// let siguiente = document.getElementById('.siguiente');

// // btn1.addEventListener('click', function() {
// //     // alert('Se envio el formulario correctamente');
// //     parte1.classList.add('mostrar');
// //     // parte2.classList.remove('mostrar');
// //     // alert('Se envio el formulario correctamente');
// //     // console.log({parte1});
    
// // });

// }
// document.getElementById('parte1').style.display = 'none';
 
// function navegacion() {
//     let parte1 = document.getElementById('parte1');
// let parte2 = document.getElementById('parte2');
// let parte3 = document.getElementById('parte3');
// // let btn1 = parte1.querySelector('');
//     // parte1.className += 'ocultar';
//     console.log({btn1});
    
//     alert('Se envio el formulario correctamente');
    
// }

// const titulo = document.getElementById('parte1');

// // Seleccionar el botón con el ID "cambiarTexto"
// const boton = document.getElementById('btn1');

// // Agregar un evento al botón para cambiar el texto del título
// boton.addEventListener('click', () => {
//     titulo.innerHTML = 'Texto cambiado con getElementById';
//     alert('Se envio el formulario correctamente');
// });
// Seleccionar el elemento con el ID "titulo"
let titulo = document.getElementById('titulo');
let p1 = document.getElementById('parte1');
let p2 = document.getElementById('parte2');
let p3 = document.getElementById('parte3');

// Seleccionar el botón con el ID "cambiarTexto"
let previo = document.getElementById('anterior');
let boton1 = document.getElementById('btn1');
let boton2 = document.getElementById('btn2');
let boton3 = document.getElementById('btn3');
let siguiente = document.getElementById('siguiente');

// Agregar un evento al botón para cambiar el texto del título
boton1.addEventListener('click', () => {
    titulo.style.visibility = 'visible';
    p1.style.visibility = 'visible';
    p2.style.display = 'none';
    p3.style.display = 'none';
    
});