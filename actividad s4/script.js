//cambio de imagen cuando da scroll 
window.addEventListener("scroll", () => {
    document.getElementById("paz").src = "prs.jpg";
});;
//llevar a un enlace cuando presione una tecla
let redirigir = false;
        document.addEventListener("keydown", function(event) {
            if (!redirigir) {
                redirigir = true;
                window.open("https://www.pizzahut.com.sv/categorias","_blank"); 
            }
        });
//cambia de imagen cuando el cursor esta encima de la imagen actual
document.getElementById("ty").addEventListener("mouseover",function() {
    this.src = "tsy.jpg"; 
    });
//audio
const boton = document.getElementById("btn");
const audio = document.getElementById("aud");

        boton.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
//Evento de doble clic sobre la imagen
document.getElementById("os").addEventListener("dblclick", function() {
    this.src = "or.jpg";
});
//evento que cambia el color de fondo cuando el cursor esta afuera de imagen
document.getElementById("evento6").addEventListener("mousemove", function(event) {
    let img = document.getElementById("rs");

    // Obtiene la posición del mouse respecto a la ventana
    let x = event.clientX / window.innerWidth * 50;
    let y = event.clientY / window.innerHeight * 50;

    // Mueve la imagen suavemente
    img.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});