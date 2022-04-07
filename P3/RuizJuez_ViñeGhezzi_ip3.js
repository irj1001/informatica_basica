/**
 * funcion que comprueba que los numeros son una terna pitagorica
 */
function si_pitagoras() {
  if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) && b > a) {
    pit = true;
  }
  return pit;
}
