 const d = document

 const contenedorTarjetas = d.getElementById('contenedor')
 const btnDerecha = d.getElementById('derecha')
 const btnIzquierda = d.getElementById('izquierda')

 d.addEventListener('click',(e)=>{
    if(e.target===btnDerecha) contenedorTarjetas.scrollLeft += 400
    if(e.target===btnIzquierda) contenedorTarjetas.scrollLeft -= 400
 })   