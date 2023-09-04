const express = require('express')
require('dotenv').config()
const databaseConnection = require('./config/database')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override');
const Flight = require('./models/flight')

//* App config
const app = express()
const port = 3000


//* Setting the views
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

//* Middlewares
app.use((req, res, next) => {
    next();
})
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride('_method'))

//* Routes
app.get('/', (req, res) => {
    res.render('Home')
})

//* list all the flights
app.get('/flights', async(req, res) => {
    
    try {
        const flights = await Flight.find({}).sort({departs: 'asc'})
        res.render('Index',{
            flights
        })
    } catch (error) {
        res.status(404).send(error, 'No Flights Found!')
    }
})
app.get('/flights/list', async(req, res) => {
    
    try {
        const flights = await Flight.find({})
        res.render('FlightsList',{
            flights
        })
    } catch (error) {
        res.status(404).send(error, 'No Flights Found!')
    }
})

//* create new flight
app.get('/flights/create', (req, res) => {
    res.render('New')
})
//* Create a flight
app.post('/flights', async (req, res) => {
    try {        
        const newFlight = await Flight.create(req.body)
        res.redirect('/flights')
    } catch (error) {
        console.log(error, 'Flight not created!')
    }
})

app.put('/flights/list/:id', async(req, res) => {
    const { id } = req.params
    try {
       const flight = await Flight.findById(id) 
       flight.destinations.push(req.body)
       const updatedFlight = await Flight.findByIdAndUpdate(id, flight, {new: true})
       res.redirect('/flights/list')
    } catch (error) {
        console.log(error, 'Adding destination failed!')
    }
})

app.get('/flights/:id', async(req, res) => {
    const { id }  = req.params
    try {
        const flight = await Flight.findById(id)
        res.render('Show', {flight})
    } catch (error) {
        res.status(404).send(error, 'Flight not found!!')
    }
})

app.get('/flights/list/:id', async(req, res) => {
    const { id }  = req.params
    try {
        const flight = await Flight.findById(id)
        res.render('Details', {flight})
    } catch (error) {
        res.status(404).send(error, 'Flight not found!!')
    }
})

//* connection to the database 
databaseConnection()

//* Connection check
app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})