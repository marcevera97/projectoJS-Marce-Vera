
let promoFiesta = parseInt(prompt("ingrese sus promos a comprar"));

if (isNaN(promoFiesta)) {

    alert("por favor ingrese un numero")

}

else if (promoFiesta < 0) {

    alert("por favor, ingrese un numero mayou a 1")

}

else {

    let totalDeCompra = 0;
    let listaDeProductosSeleccionados = "";


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

        else {

            alert("producto no encontrado")
        }


    }

    document.write("lista de articulos seleccionados :<br> " + listaDeProductosSeleccionados + "<br>");
    document.write("el total de la compra es : $ " + totalDeCompra);

}