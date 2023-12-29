class MoveAi extends HTMLElement{
    constructor(){

        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style()); 
    }
    build(){

        const card = document.createElement("div"); // card de filmes
        card.setAttribute("class", "cards");

  //--------------------- ínicio dos detlahes de top dos cards : estrela e titulo ---------------------
        const cardTop = document.createElement("div");
        cardTop.setAttribute("class", "cardtop");

        const titulo = document.createElement("h3");
        titulo.textContent = this.getAttribute("title");

        const star = document.createElement("img");
        star.src = "assets/img/estrela.png";

        const numStar = document.createElement("span");
        numStar.textContent = this.getAttribute("num-star");
  
        cardTop.appendChild(titulo);
        cardTop.appendChild(star);
        cardTop.appendChild(numStar);
  //--------------------- Fim dos detlahes de top dos cards : estrela e titulo ---------------------
    
  //--------------------- ínicio da imagem dos cards ---------------------
        const cardButtom = document.createElement("div");
        cardButtom.setAttribute("class", "cardbuttom"); 
        
        const img = document.createElement("img");
        img.src = this.getAttribute("img");

        cardButtom.appendChild(img);
  //--------------------- fim da imagemdos cards ---------------------
       
  //--------------------- Detalhes dos cards : duração, data e botão para ver trailer ---------------------
        const details = document.createElement("div");
        details.setAttribute("class", "details");
     
        const horaIcone = document.createElement("img");
        horaIcone.setAttribute("class", "horaIcone");
        horaIcone.src = "assets/img/relogio.png";

        const hora = document.createElement("span");
        hora.textContent = this.getAttribute("tempo");

        const calendarioIcone = document.createElement("img");
        calendarioIcone.setAttribute("class", "calendarioIcone");
        calendarioIcone.src = "assets/img/calendario.png";
        
        const calendario = document.createElement("span");
        calendario.textContent = this.getAttribute("data");


        details.appendChild(horaIcone);
        details.appendChild(hora);
        details.appendChild(calendarioIcone);
        details.appendChild(calendario);

  //--------------------- Fim Detalhes dos cards : duração, data e botão para ver trailer ---------------------
    
        card.appendChild(cardTop);
        card.appendChild(cardButtom);
        card.appendChild(details);

        return card;
    
    }
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .cards{
            margin: 0 auto;
            background-color:#1E1F28 ;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 1rem -5rem;
        }
          .cardtop{
            
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            
             }
             .cardtop > img{
               line-height: 140%;
               height: 20px;
               margin: auto 0 auto 10rem;
                
             }
             .cardtop > h3{
                 font-size: 15px;
                 line-height: 120%;
                 font-weight: medium;
                 margin: auto 1rem;
                 color: #FFFFFF;
                
             }
             .cardtop > span{
                color: #E5BD0A;
                 font-size: 16px;
                 line-height: 140%;
                 font-weight: semibold;  
                 margin: auto 0;
             }
             .cardbuttom{
             }
             .cardbuttom > img{
                 border-radius:10px;
                 margin: 0 1rem;
                 width: 325px;
             }
             
        .details{
            display: flex;
            flex-direction: row;
            color: #8B8D9B;   
            font-weight:200;
            justify-content: space-evenly;
        }
        .details > img{
            margin: auto 5px auto 0;
            height: 20px;
         
        }
        .details > .calendarioIcone{
            margin: auto 2px auto 8.5rem;
        
        }
        `;

        return style;
    }
}
customElements.define("move-ai", MoveAi);