
const getFetch = (baseURL,item) => fetch(baseURL)
    .then(value => value.json()).then(value => item([...value]))

export {getFetch}