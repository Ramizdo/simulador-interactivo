let peso;
let altura;
let edad;
let nombre;
let opcion;
let tbm;
let nivelActividad;
let seguir = true;
let mensaje;

saludar();

function saludar() {
    nombre = prompt("Cual es tu nombre?");

    if (nombre) {
        mensaje = "Hola " + nombre;

        recibirDato();
        recibirNivelDeActividad();
        calcularTasaMetabolicaBasal(peso, altura, edad);
        escogerDeficitSuperavit();
    } else {
        mensaje = "Debes ingresar un nombre valido";
    }

    alert(mensaje);
}

function recibirDato() {
    altura = parseInt(prompt('Altura? (40-250)'));
    validarDato(altura, 'altura');

    peso = parseInt(prompt('Peso? (40-250)'));
    validarDato(peso, 'peso');

    edad = parseInt(prompt('Edad? (18-90)'));
    validarDato(edad, 'edad');
}

function validarDato(dato, tipoDato) {

    switch (tipoDato) {
        case 'altura':
            if (dato > 39 && dato < 251) {
                mensaje = "Altura valida";
                break;
            } else {
                mensaje = "No es una altura valida";
            }
            break;
        case 'peso':
            if (dato > 39 && dato < 251) {
                mensaje = "Peso valido";
                break;
            } else {
                mensaje = "No es un rango de peso valido";
            }
            break;
        case 'edad':
            if (dato > 17 && dato < 91) {
                mensaje = "Edad valida";
                break;
            } else {
                mensaje = "No tienes una edad valida para ser atendido";
            }
            break;
        default:
            mensaje = "Dato incorrecto";
    }

    alert(mensaje);
}

function escogerDeficitSuperavit() {
    while (seguir) {
        opcion = parseInt(prompt("Que proceso quieres hacer? \n\nOpcion 1: Deficit calorico \n\nOpcion 2: Superavit Calorico \n\nResponde con el numero segun corresponda"));
        if (opcion == 1) {
            mensaje = "Para un DEFICIT correcto vamos a restar a tu TBM => " + tbm + " la cantidad de 300 KCAL \n\n Tu requerimiento diario sera: " + (tbm - 300) + " KCAL";
            break;
        } else if (opcion == 2) {
            mensaje = "Para un SUPERAVIT correcto vamos a sumar a tu TBM => " + tbm + " la cantidad de 500 KCAL \n\n Tu requerimiento diario sera: " + (tbm + 500) + " KCAL";
            break;
        } else {
            mensaje = "Escoge una opcion valida";
        }

        alert(mensaje);
    }
}

function recibirNivelDeActividad() {
    while (seguir) {
        nivelActividad = prompt("Nivel de entrenamiento? \n\nOpcion 1: (0 dias) \nOpcion 2: (1 - 3 dias) \nOpcion 3: (3 - 5 dias) \nOpcion 4: (6 - 7 dias) \nOpcion 5: (+ 7 dias) \n\nResponde con el numero segun corresponda");
        if (nivelActividad > 0 && nivelActividad < 6) {
            break;
        } else {
            mensaje = "Escoge una de las opciones mostradas";
        }

        alert(mensaje);
    }
}

function calcularTasaMetabolicaBasal(param1, param2, param3) {
    tbm = ((10 * param1) + (6.25 * param2) - (5 * param3) + 5);
    alert(nombre + " tu tasa metabolica basal es de: " + tbm);
}