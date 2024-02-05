let btn = document.getElementById('btn')
let getUri = document.getElementById('uri')
let values = document.getElementById('values')
let choose = document.getElementById('methods')

const {POST, GET, PUT, DELETE} = require('./methods')

btn.addEventListener('click', ()=>{
    switch(choose.value) {
        case "POST":
            POST(getUri.value, values.value)
            break;
        case "GET":
            GET(getUri.value)
            break;
        case "DELETE":
            DELETE(getUri.value, values.value)
            break;
        case "PUT":
            PUT(getUri.value, values.value)
            break;
        default:
          console.log(choose.value)
      }
})




