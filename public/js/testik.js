fetch('https://weblion.net/services/people.json').then((response)=>{
    return  response.json()
}).then(data=>console.log(data))
// array.forEach(element => {
    
// });