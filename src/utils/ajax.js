import { baseUrl } from "./constants";

export const getResumen = async(discurss) => {
    const response = await fetch(baseUrl, {
        method: "GET",
        mode: 'cors',
        
         headers: {
             'Content-Type': 'application/json'
         },
        // body: JSON.stringify({text: discurss})
    });
    return response.json();
}

// export const getResumen = (discurss) => {
//     fetch(baseUrl, {method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         }, 
//         mode: 'cors', body: JSON.stringify({text: discurss})}).then(response => {
//         console.log("entro")
//         return response;
//     }).catch(error => {
//         return { error: "Ha habido un error en la conexión"}
//     })
// }
