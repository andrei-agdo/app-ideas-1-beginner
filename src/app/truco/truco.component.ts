import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truco',
  templateUrl: './truco.component.html',
  styleUrls: ['./truco.component.scss']
})
export class TrucoComponent implements OnInit {

  baralho = [];
  nipes = [
    'Ouros',
    'Espadas',
    'Copas',
    'Paus'
  ]

  cartas = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];

  tentos = [0, 0]

  poderes = [];

  players = [{},
  {
    mao: [],
    id: 1,
    pontuacao: 0
  }, {
    mao: [],
    id: 2,
    pontuacao: 0
  }, {
    mao: [],
    id: 3,
    pontuacao: 0
  }, {
    mao: [],
    id: 4,
    pontuacao: 0
  }]

  mesa = [];
  manillha;

  jogadorAtual = 1;

  constructor() { }

  ngOnInit(): void {
    this.cartas.forEach((i) => {
      this.nipes.forEach(k => {
        this.baralho.push({
          numero: i,
          nipe: k
        });
      })
    });

    this.poderes = JSON.parse(JSON.stringify(this.baralho.reverse()));


    console.log(this.baralho);


    this.manillha = this.baralho[12];

    this.escolherPoderes();

    while (this.tentos[0] < 12 && this.tentos[1] < 12) {

      this.embaralhar();
      this.darCartas();
      this.jogarCarta(this.players[1], 0);
      this.jogarCarta(this.players[2], 0);
      this.jogarCarta(this.players[3], 0);
      this.jogarCarta(this.players[4], 0);

      this.jogarCarta(this.players[1], 0);
      this.jogarCarta(this.players[2], 0);
      this.jogarCarta(this.players[3], 0);
      this.jogarCarta(this.players[4], 0);

      this.jogarCarta(this.players[1], 0);
      this.jogarCarta(this.players[2], 0);
      this.jogarCarta(this.players[3], 0);
      this.jogarCarta(this.players[4], 0);
    }

    alert("A partida acabou : " + this.tentos[0] + " X " + this.tentos[1]);
  }

  darCartas() {

    this.players[1].mao.push(this.baralho[0]);
    this.players[1].mao.push(this.baralho[1]);
    this.players[1].mao.push(this.baralho[2]);

    this.players[2].mao.push(this.baralho[3]);
    this.players[2].mao.push(this.baralho[4]);
    this.players[2].mao.push(this.baralho[5]);

    this.players[3].mao.push(this.baralho[6]);
    this.players[3].mao.push(this.baralho[7]);
    this.players[3].mao.push(this.baralho[8]);

    this.players[4].mao.push(this.baralho[9]);
    this.players[4].mao.push(this.baralho[10]);
    this.players[4].mao.push(this.baralho[11]);
  }

  jogarCarta(player, index) {

    this.mesa.push({
      carta: player.mao[index],
      player: player.id
    })

    player.mao.splice(index, 1);

    this.jogadorAtual = this.jogadorAtual < 4 ? this.jogadorAtual + 1 : 1;

    if (this.mesa.length == 4) {
      //acabou a rodada

      let _indexCartaMaior = 50;

      this.mesa.forEach((cartaDaMesa) => {
        let _cartaAtual = this.poderes.findIndex((cartaMaisAlta) => cartaMaisAlta.numero == cartaDaMesa.carta.numero)
        _indexCartaMaior = _indexCartaMaior < _cartaAtual ? _indexCartaMaior : _cartaAtual;
      });

      let ganhador = this.mesa.find((cartaDaMesa) => this.poderes[_indexCartaMaior].numero == cartaDaMesa.carta.numero);
      this.players[ganhador.player].pontuacao++;

      if (this.players[1].pontuacao + this.players[3].pontuacao == 2)
        this.ganharARodada(0)

      else if (this.players[2].pontuacao + this.players[4].pontuacao == 2)
        this.ganharARodada(1)

      this.mesa = [];
    }

  }

  ganharARodada(ganhador) {
    this.tentos[ganhador]++;
    this.players.map(player => player.pontuacao = 0);

  }

  embaralhar() {
    var currentIndex = this.baralho.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.baralho[currentIndex];
      this.baralho[currentIndex] = this.baralho[randomIndex];
      this.baralho[randomIndex] = temporaryValue;
    }

    return this.baralho;

  }

  escolherPoderes() {

    var indexManilha = this.poderes.findIndex((poder) =>
      poder.numero == this.manillha.numero) + 4 > 39 ?
      this.poderes.findIndex((poder) => poder.numero == this.manillha.numero) + 4 - 40 :
      this.poderes.findIndex((poder) => poder.numero == this.manillha.numero) + 4;

    this.poderes.filter((numero) => numero.numero == this.poderes[indexManilha].numero).map(carta => carta.manilha = true);
  }
}
