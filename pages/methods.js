let reqholder = document.getElementById('reqholder')


function POST(uri, values){
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(JSON.parse(values))
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
        })
}

function GET(uri){
    fetch(uri, { method: 'GET' })
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
        })
}

module.exports = {
    POST, GET
}