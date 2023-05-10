let btn = document.getElementById('btn')
let values = document.getElementById('values')
let getUri = document.getElementById('uri')
let reqholder = document.getElementById('reqholder')

btn.addEventListener('click', ()=>{
    fetch(getUri.value, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(JSON.parse(values.value))
    })
    .then(response => {
        if (response.ok) {
            return response.text()
        } else {
            reqholder.innerHTML = `<h3>Yanıt uygun değil.</h3>`;
        }
    })
    .then(data => {
        reqholder.innerHTML = `<h3>data: ${data}</h3>`;
    })
    .catch(error => {
        reqholder.innerHTML = `<h3>${error}</h3>`;
    });

})




