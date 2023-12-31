class header extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style()); 
     
    }
    build(){

    const header = document.createElement("header");
    header.setAttribute("class", "cardheader");

    const containerLogo = document.createElement("div");
    containerLogo.setAttribute("class", "containerLogo");
       
    const logo = document.createElement("img")
    logo.setAttribute("class", "logo");
    logo.src = "assets/img/Logo.svg";

    const divBtn = document.createElement("div");
    divBtn.setAttribute("class", "divBtn");

    const btnRecommend = document.createElement("button");
    btnRecommend.textContent = "Nova recomendação";
    
    const btnRecommendIcone = document.createElement("img")
    btnRecommendIcone.setAttribute("class", "btnRecommendIcone");
    btnRecommendIcone.src = "assets/img/flash.png";
    
    containerLogo.appendChild(logo);
    divBtn.appendChild(btnRecommend);
    btnRecommend.appendChild(btnRecommendIcone);


    header.appendChild(containerLogo);
    header.appendChild(divBtn);

    return header;
    }

    style(){

        const style = document.createElement("style");
        style.textContent = `
        .cardheader{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
            width: 100%;            
            padding: 2.5rem 0;
            
        }
        .containerLogo{
          
            margin-right: 22rem;
        }
        .divBtn{
            margin-left: 22rem;
         }
         .divBtn > button{
            display: flex;
            padding: 8px 16px;
            align-items: center;
            gap: 8px;
            border-radius: 4px;
            background: var(--Gradientes-Gradiente-Normal, linear-gradient(91deg, #8323FF 0.99%, #FF2DAF 102.1%));
            color: #FFFFFF;
            font-weight: 600;
            border: none;
            cursor: pointer;
         }
         .divBtn > button:hover{
            border-radius: 4px;
            background: var(--Gradientes-Gradiente-Hover, linear-gradient(91deg, #9F55FF 0.99%, #FF46B9 102.1%));
         }
         .divBtn > button:load{
            border-radius: 4px;
            background-image: url(assets/img/circle-notch-bold-16px.svg);
         }
         @media (max-width: 700px) {
            .cardheader{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                
            }
            .containerLogo{
                margin:0;
            }
            .containerLogo > img{
                width: 50px;
               
            }
            .divBtn{
                margin:0;
             }
        }
         
        `;

        return style;
    }
    
}
customElements.define("header-component", header);
