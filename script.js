
const botonEstilo = document.getElementById('botonEstilo');

botonEstilo.addEventListener('click', function() {
    const parrafo = document.getElementById('parrafo');
    parrafo.style.color = 'purple';
    parrafo.style.fontSize = '30px';
    
});


function LeerFormulario(event) {
    const formulario = document.getElementById('form1');
    const datos = new FormData(formulario);
    const nombre = datos.get('fname');
    const correo = datos.get('lname');
    console.log('Nombre:', nombre);
    console.log('Apellido:', correo);   
}
LeerFormulario();

const botonEnlaces = document.getElementById('botonEnlaces');

botonEnlaces.addEventListener('click', function() {
    const enlaces = document.querySelectorAll('a');
    console.log('Número de enlaces:', enlaces.length);
    console.log('Enlaces:', document.querySelectorAll('a')[0]);
    console.log('Enlaces:', document.querySelectorAll('a')[2]);
    
});

