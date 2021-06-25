const request = require('request');

const weather = (latitude, longitude, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=45509eb03bbcb04eacb20f845f351da9&query=${latitude},${longitude}`
     request({url: url, json: true},( error, response) =>{
        if(error) {
            callback('Couldnt connet to the server', undefined)
        }else if(response.body === 0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                city: response.body.location.name,
                temperature: response.body.current.temperature
            })
        }
   })
}



module.exports = weather;