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

//convertendo HtmlColecction em arae forma indireta
const liElementHTML = document.getElementsByTagName("li");
const liElementArray = [...liElementHTML];

liElementArray.map((item,key)=>{

        if (item.textContent == "item-39"){

            console.log(`${key+ 1} - ${item.textcontent = "LOCALIZADO"}`)
        }
})

