let btn = document.getElementById('btn')
let getUri = document.getElementById('uri')
let values = document.getElementById('values')
const {POST, GET} = require('./methods')
let choose = document.getElementById('methods')

btn.addEventListener('click', ()=>{
    console.log("choose", choose.value)
    switch(choose.value) {
        case "POST":
            POST(getUri.value, values.value)
            break;
        case "GET":
            GET(getUri.value)
            break;
        case "DELETE":
            console.log('DELETE METHOD')
            break;
        case "PUT":
            console.log('PUT METHOD')
            break;
        default:
          console.log(choose.value)
      }

})




