// fetch('https://pokeapi.co/api/v2/pokemon/charmeleon')
//     .then(response => response.json())
//     .then(
//         data=> {
//         const info=data.abilities
//         const tarjeta=document.createElement('div')
//         for (let index = 0; index < info.length; index++) {
//             const ataque = info[index].ability;
//             const nomAtaque= ataque.name;
//             const atac=document.createElement('h4')
//             atac.innerText= nomAtaque
//             tarjeta.className="tarjeta"
//             tarjeta.append(atac)  

//         }
        
//         // tarjeta.append(data)
//         console.log(tarjeta)
//         const body=document.getElementById('body')
//         body.appendChild(tarjeta)
//         }
//     )
//     .catch(error=>console.log(error))


//----------------------------------------------------------------------------------------------------------

// function lista () {
//     fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025')
//     .then(response => response.json())
//     .then(
//         data=> {
//         const info=data.results
        
        const body=document.getElementById('body')
//         for (let index = 0; index < info.length; index++) {
//             const nombre = info[index].name;
//             // const nomAtaque= ataque.name;
//             let page_data="https://pokeapi.co/api/v2/pokemon/"
//             const tarjeta=document.createElement('div')
//             const atac=document.createElement('h4')
//             atac.innerText= nombre
//             tarjeta.className="tarjeta"
//             tarjeta.id=index+1
//             fetch(page_data+[tarjeta.id])
//                 .then(response=>response.json())
//                 .then(
//                     data=>{
//                         let pokeinfo=data;
//                         let types=pokeinfo.types
//                         for (let index = 0; index < types.length; index++) {
//                             let tipo=types[index].type
//                             let typename=tipo.name
//                             const type=document.createElement('h5')
//                             type.innerText=typename
//                             tarjeta.appendChild(type)
//                         // console.log(pokeinfo)
//                         }
//                     }
//                     )
//             tarjeta.append(atac)  
//             body.appendChild(tarjeta)
//             // console.log(tarjeta)
//         }
        
//         // tarjeta.append(data)
        
        
        
//         }
//     )
//     .catch(error=>console.log(error))
//     }
//     lista()

//-------------------------------------------------------------------------------------------------------
let a=0;



const btn=document.createElement('button');
btn.type="button"
body.appendChild(btn);

btn.addEventListener('click', function(){

    for (let index = 1; index < 1026; index++) {
        const img=document.createElement('img');
        let poke=`${a}${a}${index}.png`;
        if((index>9)&&(index<100)){
            poke=`${a}${index}.png`
        }else if(index>99){
            poke=`${index}.png`;
        }

        img.src=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${poke}`;
        
        body.appendChild(img);
    }

})