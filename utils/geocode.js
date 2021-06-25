const request = require('request');

const geocode = (adress, callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1Ijoic2VudGFuY2UiLCJhIjoiY2twZjVpZ282MDA0ZTJvbWxmZXdvYXc1eiJ9.u6m44v23cMtAvoKaqLhvEA&limit=1`
     request({url: url, json: true},( error, response) =>{
        if(error) {
            callback('Couldnt connet to the server', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
   })
}



module.exports = geocode;