/** JUGADORES */
let jugador = {
  entrada: document.getElementById('entradaJug1'),
  salida: document.getElementById('salidaJug1'),
  bt: document.getElementById('btJug1'),
  refreshIO() {
    this.salida.value = '';
    this.entrada.value = '';
    this.entrada.focus();
    this.bt.innerHTML = 'Test';
  }
}

/** DADOS */
let dados = {
  contenedor: document.getElementById('dados'),
  listaDados: document.getElementsByClassName('dado'),
  valores: [],
  objetivo: 0,

  listaImgs: {
    '1': './img/uno.png',
    '2': './img/dos.png',
    '3': './img/tres.png',
    '4': './img/cuatro.png',
    '5': './img/cinco.png',
    '6': './img/seis.png',
  },
  dameImg(valor) {
    return this.listaImgs[`${valor}`];
  },

  lanzaDados(numDados3, numDados6) {
    this.valores = [];
    for (let i = 0; i < numDados3 + numDados6; i++) {
      if (i < numDados3)
        this.valores[i] = Math.floor(Math.random() * (3 - 1) + 1);
      else
        this.valores[i] = Math.floor(Math.random() * (6 - 1) + 1);
    }
    this.objetivo = Math.floor(Math.random() * (12 - 1) + 1);
  },

  dadosExisten(operacion) {
    let regExp = /[1-6]/;
    let numeros = operacion.split('').filter(item => regExp.test(item));

    for (let i = 0; i < numeros.length; i++) {

      let idx = this.valores.indexOf(parseInt(numeros[i]));
      if (idx == -1)
        return false
      else
        this.valores.splice(idx, 1);
    }
    return true;
  },

  eliminarDados() {
    let len = this.listaDados.length - 1;
    for (let _i = 0; _i < len; _i++) dados.listaDados[0].remove();
  },

  crearDados(numD3, numD6) {
    for (let _i = 0; _i < numD3 + numD6; _i++) {
      let newDado = document.createElement('div');
      newDado.className = 'dado';
      this.contenedor.appendChild(newDado);
    }
    this.listaDados;
  }
}