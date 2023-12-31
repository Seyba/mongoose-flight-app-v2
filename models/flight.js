const mongoose = require('mongoose')
const {Schema, model} = mongoose

// const minusOneYear = date => {
//     date.setFullYear(date.getFullYear() - 1)
//     return date
// }
// const newDate = new Date()
// const formattedDate = minusOneYear(newDate).toISOString().slice(0, 16)

const destinationSchema = new Schema({
    airport: {type: String, enum:['AUS', 'DAL','LAX','SAN','SEA']},
    arrival: {type: Date}
})
const flightSchema = new Schema({
    airline: {type: String, enum:['American', 'Southwest', 'United']},
    flightNo: {type: Number, required: true, min: 10, max: 9999},
    departs: {type: Date, default: Date.now },
    airport: {type: String, enum:['AUS', 'DAL','LAX','SAN','SEA'], default: 'SA'},
    destinations: [destinationSchema]
})

const Flight = model('Flight', flightSchema)
module.exports = Flight