document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<=12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src =`build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //Añadir la función mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);
    
    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src =`build/img/grande/${id}.webp`;

    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar la imagen

    overlay.onclick = () => overlay.remove();

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = () => {
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');



}