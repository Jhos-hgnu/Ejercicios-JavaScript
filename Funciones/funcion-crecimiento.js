function rellenarConCeros(numero, ancho) {
  let cadena = String(numero);
  console.log(cadena);
  while (cadena.length < ancho) {
    cadena = "0" + cadena;
  }

  return cadena;
}

function imprimirInventarioGranja(vacas, pollos, cerdos) {
  console.log(`${rellenarConCeros(vacas, 3)} Vacas`);
  console.log(`${rellenarConCeros(pollos, 3)} Pollos`);
  console.log(`${rellenarConCeros(cerdos, 3)} Cerdos`);
}

imprimirInventarioGranja(7, 16, 3);
