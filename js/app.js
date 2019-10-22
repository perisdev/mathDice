/** START - VARIABLES GLOBALEs */
let numDados3 = document.getElementById('numDados3');
let numDados6 = document.getElementById('numDados6');
let objetivoJug1 = document.getElementById('objetivo');
/** END - VARIABLES GLOBALEs */

// refrescamos partida
const refreshJug1 = () => {
  dados.eliminarDados();
  dados.crearDados(parseInt(numDados3.value), parseInt(numDados6.value));
  jugador.refreshIO();
  dados.lanzaDados(parseInt(numDados3.value), parseInt(numDados6.value));

  for (let _i = 0; _i < dados.valores.length; _i++) {
    dados.listaDados[_i].setAttribute('style', `background-image: url('${dados.dameImg(dados.valores[_i])}')`);
  }
  objetivoJug1.innerHTML = dados.objetivo;
}

// chequeamos operacion dados
const check1 = () => {
  if (jugador.bt.innerHTML == 'Refresh') {
    refreshJug1();
  } else {
    if (eval(entradaJug1.value) == dados.objetivo && dados.dadosExisten(entradaJug1.value)) {
      salidaJug1.value = ('Enhorabuena!!');
      btJug1.innerHTML = 'Refresh';
    } else {
      salidaJug1.value = ('error, intentalo de nuevo');
      entradaJug1.value = '';
      entradaJug1.focus();
    }
  }
}

// iniciamos turno
refreshJug1();

/** START LISTENERs */
document.getElementById('btJug1').addEventListener('click', check1);
document.getElementById('btApply').addEventListener('click', refreshJug1);
/** END LISTENERs */
