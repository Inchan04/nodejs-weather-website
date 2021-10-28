const request = require('request')

//const forecast = (latitude, longitude, callback) => {
    const forecast = ( latitude, longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=c5eca65c319485eac22dd8eb3dd62476&query=' + latitude + ',' + longitude + '&units=m'
  //  const url = 'http://api.weatherstack.com/current?access_key=a45250785a1c43f37dc4bd10eb3874d4&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast