let btn = document.getElementById('btn')
let values = document.getElementById('values')
let getUri = document.getElementById('uri')

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
        return response.text();
        } else {
        throw new Error('Yanıt uygun değil.');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Hata: ', error);
    });


})




