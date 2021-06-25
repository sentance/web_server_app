const form = document.querySelector('form');
const searchData = document.getElementById('searcData');
const forecast = document.getElementById('forecast');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    forecast.textContent = 'Loading....';
    forecast.textContent = '';
    fetch(`/weather?address=${searchData.value}`).then((response)=>{
        response.json().then((data)=>{

            if(data.error){
                console.log(data.error)
            }
            
            forecast.innerHTML = `<p style="color: red"> Now in ${data.forecast.city} tempreture - ${data.forecast.temperature} </p>`

        })
    })
});