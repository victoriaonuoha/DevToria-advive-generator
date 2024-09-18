console.log('heyyy babay')








// for the main deal
document.getElementById("adBtn").addEventListener('click', () => {
   const apiUrl = "https://api.adviceslip.com/advice";
    fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error ("Network was disfunctional")

        }
        return response.json();
    })
    .then(data => {
        document.getElementById('advice').innerText = data.slip.advice;
        document.getElementById('iid').innerText= data.slip.id;

    } )
    .catch(error => {
        console.error("Error fetching data:",error);
        document.getElementById('advice').innerText = 'Network unstable... Error fetching data';
    } )

});