//cambio de imagen con mouseover y mouseout
document.getElementById("paz").addEventListener("mouseover",function() {
    this.src = "prs.jpg"; 
    });
document.getElementById("paz").addEventListener("mouseout", function() {
    this.src = "peri.jpg"; });
//llevar a un enlace cuando presione una tecla
let redirigir = false;
        document.addEventListener("keydown", function(event) {
            if (!redirigir) {
                redirigir = true;
                window.open("https://www.pizzahut.com.sv/categorias","_blank"); // Cambia esto por el enlace deseado
            }
        });
//reproducir audio al momento de iniciar la pagina
window.addEventListener("load", function() {
            let audio = document.getElementById("audio");
            audio.play();
        });