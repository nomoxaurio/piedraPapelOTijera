//juegos = prompt('al mejor de cuantos?')
let numeroDeJuego = 0;

let eleccionDeUsuario = "";
function usuarioElige(valor){
    document.getElementById("print").innerHTML = "Has Elegido: " + valor;
    eleccionDeUsuario = valor;
}

let eleccioDeCompu = "";
function compuElige(){
        min = Math.ceil(1);
        max = Math.floor(3);
        let compu = (Math.floor(Math.random() * (3 - 1 + 1) + 1));
        let mensaje =   (compu == 1) ? eleccioDeCompu = "PIEDRA":
                        (compu == 2) ? eleccioDeCompu = "PAPEL":
                        (compu == 3) ? eleccioDeCompu = "TIJERA": "error";
}

let empate = (0);
let ganaUsuario = (0);
let ganaCompu = (0);
function quienGana (compu,usuario){
    if(compu == usuario){
        empate = (empate + 1);
        numeroDeJuego = numeroDeJuego + 1;
    }else if (compu == "PIEDRA" && usuario == "TIJERA" || compu == "PAPEL" && usuario == "PIEDRA" || compu == "TIJERA" && usuario == "PAPEL"){
        ganaCompu = (ganaCompu + 1);
        numeroDeJuego = numeroDeJuego + 1;
    } else {
        ganaUsuario = (ganaUsuario + 1);
        numeroDeJuego = numeroDeJuego + 1;
    }
}

function play (){
    if (numeroDeJuego < 5){
        eleccionDeUsuario;
        compuElige();
        quienGana(eleccioDeCompu,eleccionDeUsuario);
        document.getElementById("1").innerHTML = "El usuario jugo: " + eleccionDeUsuario;
        document.getElementById("2").innerHTML = "La compu jugo: " + eleccioDeCompu;
        document.getElementById("empate").innerHTML = "Empataron: "+ empate +" partidos";
        document.getElementById("usuario").innerHTML = "El usuario gano: " + ganaUsuario + " partidos";
        document.getElementById("compu").innerHTML = "La Compu gano: " + ganaCompu + " partidos";
        document.getElementById("juego").innerHTML = "Partidos jugados: " + numeroDeJuego + " de 5 juegos";
    } else {
        if(ganaCompu < ganaUsuario) {
            window.open("/gusuario.html");
            window.close()
        } else if(ganaCompu > ganaUsuario){
            window.open("/gcompu.html");
            window.close()
        } else{
            window.open("/empate.html");
            window.close()
        }
    }
    
}

