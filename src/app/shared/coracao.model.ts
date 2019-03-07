export class Coracao{
    constructor(
        public cheio:boolean,
        public urlCoracaovazio:string = '/assets/coracao_vazio.png',
        public urlCoracaocheio:string = '/assets/coracao_cheio.png'
    ) { }
        
    public exibeCoracao():string{

        if(this.cheio)              
        {
            return this.urlCoracaocheio
        }else{
            return this.urlCoracaovazio
        }

    }
}