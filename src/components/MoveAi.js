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
        numStar.appendChild(star);
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
        horaIcone.src = "assets/img/relogio.png";

        const hora = document.createElement("span");
        hora.setAttribute("class", "hora");
        hora.textContent = this.getAttribute("tempo");

        const calendarioIcone = document.createElement("img");
        calendarioIcone.src = "assets/img/calendario.png";
        
        const calendario = document.createElement("span");
        calendario.setAttribute("class", "calendario");
        calendario.textContent = this.getAttribute("data");

        hora.appendChild(horaIcone);
        details.appendChild(hora);
        calendario.appendChild(calendarioIcone);
        details.appendChild(calendario);
       


        const btn = document.createElement("div");
        btn.setAttribute("class", "btn");

        const btnPlayIcone = document.createElement("img");
        btnPlayIcone.setAttribute("class", "btnPlayIcone");
        btnPlayIcone.src = "assets/img/botao-play-ponta-de-seta.png";

        const botao = document.createElement("button");
        botao.setAttribute("class", "botao");
        botao.textContent = "Assistir trailer";
        
        const btnTrailer = document.createElement("a");
        btnTrailer.setAttribute("class", "btnTrailer");
        btnTrailer.href = this.getAttribute("link") ;
        btnTrailer.target = "_blank";
        
        
        btnTrailer.appendChild(botao);
        botao.appendChild(btnPlayIcone);
        btn.appendChild(btnTrailer);
       
       
  //--------------------- Fim Detalhes dos cards : duração, data e botão para ver trailer ---------------------
       
        card.appendChild(cardTop);
        card.appendChild(cardButtom);
        card.appendChild(details);
        card.appendChild(btn);

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
            margin: 0 -3rem 3rem  -3rem;
        }
          .cardtop{
                margin: 10px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            
             }
             .cardtop > span > img{
               line-height: 140%;
               width: 20px;
               
              
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
                 margin: auto 20px;
                 display: flex;
                 flex-direction: row-reverse;
                 white-space: nowrap;
                
             }
            
             .cardbuttom > img{
                 border-radius:8px;
                 margin: 0 1rem;
                 width: 325px;
             }
             
        .details{
            display: flex;
            flex-direction: row;
            color: #8B8D9B;   
            font-weight:200;
            justify-content: space-between;
            margin: 5px 20px;
         
        }
        .details > span > img{
            margin: auto 5px auto 0;
            width: 20px;     
        }
        
        .details > span{
            display: flex;
            flex-direction: row-reverse;
            
        }


        .btn{
            padding: 10px;
            margin: 0 auto;
            text-align: center;
      
        }
        .botao{
            background: var(--Cores-Cinza, #2B2B37);
            color: #1E1F28;
            padding: 10px 6rem;
            margin: 5px auto;
            display:inline-flex;
            flex-direction: row-reverse;
            border-radius: 4px;
            border: none;
            font-size: 16px;
            line-height: 120%;
            font-weight:550;
            color: #FFFFFF;
        }
        .botao:hover{
            border-radius: 4px;
            background: var(--Cores-Cinza-Mdio, #373745);
            cursor:pointer;
        }
        .botao > img{
            background-color: #193143;
            border-radius: 50px;
            padding:1px ;
            margin-right: 5px;
        }
        a{
            text-decoration: none;
        }
        `;

        return style;
    }
}
customElements.define("move-ai", MoveAi);