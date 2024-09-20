console.log('heyyy babay')

// Show loader
function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
  document.getElementById('content').classList.add('hidden');
}

// Hide loader
function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
  document.getElementById('content').classList.remove('hidden');
}







// for the main deal
document.getElementById("adBtn").addEventListener('click', () => {
   const apiUrl = "https://api.adviceslip.com/advice";
   showLoader();
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
        hideLoader();

    } )
    .catch(error => {
        console.error("Error fetching data:",error);
        document.getElementById('advice').innerText = 'Network unstable... Error fetching data';
        hideLoader();
    } )

});