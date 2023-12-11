// usando un api con axios 
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/todos';
const vainita = async () => {
    const data = await axios(url);
    return data
}
const doPost = async () => {
    let cosa = null;
    try{
        const reqPost = await axios.post(url, {
            userId: 340,
            id: 43,
            title: 'La voluntad de un hombre por hacer un metodo post',
            completed: false  
        });
        console.log(reqPost.status);
        cosa = reqPost
    }catch(e){
        console.error(e)
    }
    // console.log(cosa)
}
// axios.get('https://api.escuelajs.co/api/v1/products').then(res => console.log(res))
// axios.post('https://api.escuelajs.co/api/v1/products', {
//     "title": "Chancleata",
//     "price": 10,
//     "description": "Una descripccion de montadero de caballos y otras cosas para el mejoramiento de chernobil",
//     "categoryId": 25,
//     "images": ["https://placeimg.com/640/480/any"]

// }).then(res => console.log(res));
// vainita();
doPost();