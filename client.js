function sendData(){
    const data = 'hello server!';

    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: data
    })
    .then(response => response.text())
    .then(data =>{
        console.log('server response: ', data);
    })
    .catch(error =>{
        console.error('Error:', error);
    })
}