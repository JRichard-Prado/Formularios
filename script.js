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
previo.addEventListener('click', () => {
    if (boton3.classList.contains('disabled') && !boton2.classList.contains('disabled')) {
        // Navegar de boton3 a boton2
        p1.style.display = 'none';
        p2.style.display = 'block';
        p3.style.display = 'none';

        boton3.classList.remove('disabled');
        boton2.classList.add('disabled');
        boton1.classList.remove('disabled');
        siguiente.classList.remove('disabled');
    }
     else if (boton2.classList.contains('disabled')) {
        // Navegar de boton2 a boton1
        p1.style.display = 'block';
        p2.style.display = 'none';
        p3.style.display = 'none';

        boton2.classList.remove('disabled');
        boton1.classList.add('disabled');
        boton3.classList.remove('disabled');
        siguiente.classList.remove('disabled');
        previo.classList.add('disabled');
    }
});

boton1.addEventListener('click', () => {
    p1.style.display = 'block';
    p2.style.display = 'none';
    p3.style.display = 'none';

    previo.classList.add('disabled');
    boton1.classList.add('disabled');
    boton2.classList.remove('disabled');
    boton3.classList.remove('disabled');
    siguiente.classList.remove('disabled');

});
boton2.addEventListener('click', () => {
    p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';
    previo.classList.remove('disabled');
    boton1.classList.remove('disabled');
    boton2.classList.add('disabled');   
    boton3.classList.remove('disabled');
    siguiente.classList.remove('disabled');

});
boton3.addEventListener('click', () => {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';

    previo.classList.remove('disabled');
    boton1.classList.remove('disabled');
    boton2.classList.remove('disabled');   
    boton3.classList.add('disabled');
    siguiente.classList.add('disabled');
   
});

siguiente.addEventListener('click', () => {
    if (boton1.classList.contains('disabled') && !boton2.classList.contains('disabled')) {
        // Navegar de boton1 a boton2
        p1.style.display = 'none';
        p2.style.display = 'block';
        p3.style.display = 'none';

        previo.classList.remove('disabled');
        boton1.classList.remove('disabled');
        boton2.classList.add('disabled');
        boton3.classList.remove('disabled');
        siguiente.classList.remove('disabled');
    }
     else if (boton2.classList.contains('disabled')) {
        // Navegar de boton2 a boton3
        p1.style.display = 'none';
        p2.style.display = 'none';
        p3.style.display = 'block';

        previo.classList.remove('disabled');
        boton1.classList.remove('disabled');
        boton2.classList.remove('disabled');
        boton3.classList.add('disabled');
        siguiente.classList.add('disabled');
    }
});