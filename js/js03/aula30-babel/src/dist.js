"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  soma = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return soma / numbers.length;
};
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var soma = numbers.reduce(function (accum, _ref) {
    var number = _ref.number,
      peso = _ref.peso;
    return accum + number * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var somaPesos = numbers.reduce(function (accum, entrada) {
    var _entrada$peso;
    return accum + ((_entrada$peso = entrada.peso) !== null && _entrada$peso !== void 0 ? _entrada$peso : 1);
  }, 0);
  return soma / somaPesos;
};
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var numerosOrdenados = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var meio = Math.floor(numerosOrdenados.length / 2);
  if (numerosOrdenados.lenght % 2 !== 0) {
    return numerosOrdenados[meio];
  }
  var primeiroDoMeio = numerosOrdenados[meio - 1];
  var segundoDoMeio = numerosOrdenados[meio];
  return mediaSimples(primeiroDoMeio, segundoDoMeio);
};
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantidade = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidade.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidade[0][0];
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(mediaSimples(2, 6, 3, 7, 4)));
console.log("M\xE9dia Ponderada: ".concat(mediaPonderada({
  number: 9,
  peso: 3
}, {
  number: 7
}, {
  number: 10
})));
console.log("Mediana: ".concat(mediana(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(mediana(15, 14, 8, 7, 3)));
console.log("Moda: ".concat(moda(1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 4)));
