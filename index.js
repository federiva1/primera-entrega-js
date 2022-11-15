const parsearEntero = (valor) => {
    return parseInt(prompt(valor))
}


let opcionAuto = () => {
    const submenu = prompt('1- seguro todo riesgo 2- seguro contra terceros')
    if (submenu === '1') {
        let SA = parseInt(prompt('ingresa el precio de tu auto'))
        return prompt('tu cuota vale ' + (SA / 12));
    }
    if (submenu === '2') {
        let SA = parseInt(prompt('ingresa el precio de tu auto'))
        return prompt('tu cuota vale ' + (SA / 18));
    }

}

let opcionMoto = () => {
    const submenu = prompt('1- Seguro contra robo 2- Seguro Responsabilidad Civil')
    if (submenu === '1') {
        let SA = parseInt(prompt('ingresa el precio de tu moto'))
        return prompt('tu cuota vale ' + (SA / 12));
    }
    if (submenu === '2') {
        let SA = parseInt(prompt('ingresa el precio de tu moto'))
        return prompt('tu cuota vale ' + (SA / 18));
    }

}


const selector = (opcion) => {
    switch (opcion) {
        case 1:
            opcionAuto();
            break;
        case 2:
            opcionMoto();
            break;
        default:
            alert('ingreso incorrecto');
            while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 0) {
                opcion = parsearEntero('opcion no valida ingrese otra')
            }

    }
}




//Inicio y presentación de opciónes

const Bienvenida = "Bienvenidos al cotizador, que desean asegurar hoy?";

alert(Bienvenida);

const OPCIONES = '1- Auto 2- Moto 0- Salir';

let seleccion = parsearEntero(OPCIONES);

const condiciones = () => (seleccion === 1 || seleccion === 2 || seleccion === 0);


while (!condiciones()) {
    seleccion = parsearEntero(OPCIONES);
    condiciones();
    console.log(seleccion);
}

while (seleccion !== 0) {
    selector(seleccion);
    seleccion = parsearEntero(OPCIONES);
} 
