import { Component, OnInit, EventEmitter, Output,OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit,OnDestroy {

  public frases : Frase[] = FRASES
  public instrucao:string = "Traduza a frase"
  public resposta: string = ""

  public rodada:number = 0
  public rodadaFrase: Frase
  public progresso:number = 0

  public tentativas: number = 3
  
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnInit() {
  }
    atResp(resposta: Event): void{
      this.resposta = (<HTMLInputElement>resposta.target).value
  }

  ngOnDestroy(){
    
  }

  verificarResposta(): void{
    //trocar pergunta da rodada
  
    if(this.rodadaFrase.frasePtBr == this.resposta)
    {
    
      //troca pergunta da rodada 
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      

      //verificar se this.rodada é identico a 4 
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
      }
      //atualiza objeto rodadafrase
      this.atualizaRodada()
      
      
    }else{
      
      //decrementar a variavel tentativas 
      this.tentativas--

      if(this.tentativas === -1)
      {
        this.encerrarJogo.emit('derrota')
      }
    }

  
  }

  atualizaRodada():void{
    //atualiza objeto rodadafrase
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }
}
