import Kartya from "./Kartya.js";

export default class Jatek{
    #KEPLISTA=[]
    constructor(KEPLISTA){

        this.#KEPLISTA=KEPLISTA;
        this.jatekOsszeallit()

        $(window).on("kapcsol",(event)=>{
            console.log(event.detail)
            this.#kivalasztottak.push(event.detail)
        })
        //new Kartya(KEP[0],$(".jatekter"))
    }

    #ellenoriz(){
        if (this.#kivalasztottak.length===2) {
            if (this.#kivalasztottak[0]===this.#kivalasztottak)
        }
    }
    jatekOsszeallit(){
        this.#KEPLISTA.forEach((elem) => {
            new Kartya(elem,$(".jatekter"))
        })
    }
}