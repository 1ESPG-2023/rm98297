// let nr1 = [1,2,3,4,5]

// let nr2 = [6,7,8,9,10]

// //espalhar o arrray com Spread[...] Transformou em um único array
// nr3 = [...nr1,...nr2]

// console.log(nr1)
// console.log(nr2)
// console.log(nr3)

// nr3.map((item_array,key)=>{

//     console.log(`${key+1} - itens do array - ${item_array} `)

//     // item_array.array.forEach((digitos) => {
//     //         console.log(digitos)
        
//     //     })
// })

// //convertendo HtmlColecction em arae forma indireta
// const liElementHTML = document.getElementsByTagName("li");
// const liElementArray = [...liElementHTML];

// liElementArray.map((item,key)=>{

//         if (item.textContent == "item-39"){

//             console.log(`${key+ 1} - ${item.textcontent = "LOCALIZADO"}`)
//         }
// })



// function soma(parametro) {

//     nr1 = 10

//     nr2 = 20


//     return (parseInt(nr1) + parseInt(nr2) + parseInt(parametro))

//     // console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`)
//     // console.log(`Este é o parametro que foi passado para a função : ${parametro}`)

// }


//  Arrow Function

// const mudaCOR = ()=> {

//     setTimeout(soma(1,2,3),5000);

// }

// mudaCOR()


function mudaCOR() {

     let r = "";
     let g = "";
     let b = "";

   //random = Gera números aleatórios entre 0 e 1
     //ceil, floor e round que arredondam o número para cima, para baixo ou aleatoriamente.

    //determinando  vavariáel r um valor entre 0 e 255

     r = Math.round(Math.random()* 255);
     g = Math.round(Math.random()* 255);
     b = Math.round(Math.random()* 255);

    const cabecalho =  document.querySelector(".cabecalho");


    cabecalho.setAttribute("style",`background-color:rgb(${r},${g},${b})`)

     tmp = setTimeout(mudaCOR,1000);
 }   

//  mudaCOR();


//função altera banner

function alteraBanner(){
    

    let nr = Math.ceil(Math.random() * 3);
    const img1 = document.querySelector(".l-e > img");
    const img2 = document.querySelector(".l-d > img");


    let caminho = `img/banner-lateral-${nr}.png`;

    img1.src = caminho;

    nr = Math.ceil(Math.random() * 3);
    caminho = `img/banner-lateral-${nr}.png`;
    img2.src = caminho;

    setTimeout(alteraBanner,1000)



    

    

}

//  alteraBanner();

const botao = document.querySelector(".central button");

botao.addEventListener("click" ,()=> {

    const img_l = document.querySelector(".central img");
   

    if( botao.textContent == "LIGAR"){

        img_l.src = "./img/pic_bulbon.gif"

        botao.textContent = "DESLIGAR"

    }

    else{
        img_l.src = "./img/pic_bulboff.gif"
        botao.textContent = "LIGAR"


    }

})


// function ligarlampada() {

//     const img_l = document.querySelector(".central img");
   

//     if( botao.textContent == "LIGAR"){

//         img_l.src = "./img/pic_bulbon.gif"

//         botao.textContent = "DESLIGAR"

//     }

//     else{
//         img_l.src = "./img/pic_bulboff.gif"
//         botao.textContent = "LIGAR"


//     }

// }

//ligarlampada()



const inputUser = document.querySelector("input[name ='nmUser']");
const labelUser = document.querySelector("label[for]")

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color: #ff0000");
    labelUser.setAttribute("style", "color: #ff0000")
   



});

inputUser.addEventListener("keyup", ()=>{

    inputUser.setAttribute("style", "outine-color:#ff0000" )
    


    if(inputUser.value.length< 8){
        inputUser.setAttribute("style", "outline-color: #ff0000");
        labelUser.setAttribute("style", "color: #ff0000")


    }else{

        inputUser.setAttribute("style", "outline-color: #008000");
        labelUser.setAttribute("style", "color: #000000")



    }



})

