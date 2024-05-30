export default class Kartya {
/* megjeleniti a képet,
 és ha a képre kattintunk
 akkor megfordul, 
 vissza is tud fordulni 
 el tud rejtőzni, 
 */
    #kep="";
    #allapot=true; //true - látható a kép, false - a háttér látható
    #szuloElem;
    #kepElem
    constructor(kep, szuloElem){
        this.#kep=kep;
        this.#szuloElem=szuloElem;
        this.#allapot=false;
        this.#megjelenit()
        this.#kepElem=this.#szuloElem.children("div:lat-child").children("img")
        console.log(this.#kepElem)
        this.#kepElem.on("click",() => {
            this.setAllapot(true)
            this.#trigger("kapcsol")
        })
    }

    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail: this.#kep})
        window.dispatchEvent(e)
    }
    #megjelenit(){
        let txt=`
            <div class="card col-sm-3">
                <img src="kepek/hatter.jpg" alt="memóriajáték kiskép">
            </div>
        `
        this.#szuloElem.append(txt)
    }
    set allapot(ertek){
        if (ertek==true || ertek==false) {
        this.#allapot=ertek
        this.#felfordit()
        }
        
    }

    #felfordit(){
        /* #allapottól függően vagy a háttérképet
        vagy a képet tölti be a kép src-jébe. */
        /* akkor hívódik meg ez a metodus, ha rákattintunk a képre */
        if(this.#allapot){
            this.#kepElem.attr("src",this.#kep)
        }else{
            this.#kepElem.attr("src","kepek/hatter.jpg")
        }
    }
}