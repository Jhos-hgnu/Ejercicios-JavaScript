/**
 * Para hacer que una función reciba una cantidad x de argumentos
 * por ejemplo con la función de max()
 * se pueden utilizar tres puntos antes del último parámetro
 * de la función.
 */

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2));
