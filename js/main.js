let mensaje = prompt("bienvenido, por favor ingrese su nombre!")

    alert("Bienvenido a emporio fiestas " + mensaje)

let promoFiesta = parseInt(prompt("ingrese sus promos a comprar"));

//se solicita al cliente que ingrese un numero

if (isNaN(promoFiesta)) {

    alert("por favor ingrese un numero")

}

//en caso de que ingrese el numero 0 no deja seguir la operacion

else if (promoFiesta < 0) {

    alert("por favor, ingrese un numero > 0")

}

else {

    let totalDeCompra = 0;
    let listaDeProductosSeleccionados = "";

//se le solicita al cliente cuantos productos quiere comprar

    for (let i = 0; i < promoFiesta; i++) {

        let producto = parseInt(prompt("ingrese el numero de promo"));


        if (producto == 1) {

            listaDeProductosSeleccionados += "promo cumple 1 - $5500" + "<br>";
            totalDeCompra += 5500;

        }
        else if (producto == 2) {

            listaDeProductosSeleccionados += "promo cumple 2 - $6800" + "<br>";
            totalDeCompra += 6800;
        }
        else if (producto == 3) {

            listaDeProductosSeleccionados += "promo cumple 3 - $6800" + "<br>";
            totalDeCompra += 6800;
        }
        else if (producto == 4) {

            listaDeProductosSeleccionados += "promo cumple 4 - $6700" + "<br>";
            totalDeCompra += 6700;
        }

// en caso de que ingrese un producto que no esta en la lista me muestra un mensaje

        else {

            alert("producto no encontrado")
        }


    }

// me muestra en el index los datos seleccionados

    document.write("lista de articulos seleccionados :<br> " + listaDeProductosSeleccionados + "<br>");
    document.write("el total de la compra es : $ " + totalDeCompra);

}