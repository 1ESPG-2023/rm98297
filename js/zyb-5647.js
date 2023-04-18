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



function soma(parametro) {

    nr1 = 10

    nr2 = 20


    return (parseInt(nr1) + parseInt(nr2) + parseInt(parametro))

    // console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`)
    // console.log(`Este é o parametro que foi passado para a função : ${parametro}`)

}


// Arrow Function

const mudaCOR = ()=> {

    setTimeout(soma(1,2,3),5000);

}

mudaCOR()



