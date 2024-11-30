import { baseUrl } from "./constants";

export const getResumen = (discurss) => {
    let  res = { error: "Ha habido un error en la conexión"};
    fetchOperation('POST', { text: discurss }).then(response => {
        res = response;
    }).catch(error => {
        console.error(error)
        res = { error: "Ha habido un error en la conexión"}
    })
    return res;
}

async function fetchOperation(method = '', data = {}) {
    const response = await fetch(baseUrl, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

