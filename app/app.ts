import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(),10,1005);
console.log(negociacao.volume);