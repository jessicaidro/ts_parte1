import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    // outra opção private negociaoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

 //   outra opção  lista(): ReadonlyArray<Negociacao>  {}
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
