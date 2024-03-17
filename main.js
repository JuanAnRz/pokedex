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

fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025')
    .then(response => response.json())
    .then(
        data=> {
        const info=data.results
        
        const body=document.getElementById('body')
        for (let index = 0; index < info.length; index++) {
            const nombre = info[index].name;
            // const nomAtaque= ataque.name;
            let page_data="https://pokeapi.co/api/v2/pokemon/"
            const tarjeta=document.createElement('div')
            const atac=document.createElement('h4')
            atac.innerText= nombre
            tarjeta.className="tarjeta"
            tarjeta.id=index+1
            fetch(page_data+[tarjeta.id])
                .then(response=>response.json())
                .then(
                    data=>{
                        let pokeinfo=data;
                        let types=pokeinfo.types
                        for (let index = 0; index < types.length; index++) {
                            
                            let tipo=types[index].type
                            let typename=tipo.name
                            console.log(typename)
                            const type=document.createElement('h5')
                            type.innerText=typename
                            tarjeta.appendChild(type)
                        // console.log(pokeinfo)
                        }
                    }
                    )
                .catch(error=>console.log(error))
            tarjeta.append(atac)  
            body.appendChild(tarjeta)
            // console.log(tarjeta)
        }
        
        // tarjeta.append(data)
        
        
        
        }
    )
    .catch(error=>console.log(error))