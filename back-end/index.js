const http = require("http");
require('dotenv').config()
const {connectDB} = require('./config')
const express = require('express')
const app = express()
const cors = require('cors')
const {errorHandler} = require('./error/errorHandler')
app.use(cors()) // use send req from back to front end
app.use(express.json())
connectDB()
//import route
const authRoute = require('./routes/authRoute')
const reservationRoute = require('./routes/reservationRoute')
const movieRoute = require('./routes/movieRoute')
const cinemaRoute = require('./routes/cinemaRoute')
const showTimeRoute = require('./routes/showTimeRoute')
const ticketRoute = require('./routes/ticketRoute')
const foodRoute = require('./routes/foodRoute')
const seatRoute =  require('./routes/seatRoute')
const paymentRoute = require('./routes/paymentRoute')
const feedBackRoute = require('./routes/feedBackRoute')
const blogRoute = require('./routes/blogRoute')
const eventRoute = require('./routes/eventRoute')
const movieSoonRoute = require('./routes/movieSoonRoute')

//mount the route
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/reservations', reservationRoute)
app.use('/api/v1/movies', movieRoute)
app.use('/api/v1/cinemas', cinemaRoute)
app.use('/api/v1/showtimes', showTimeRoute)
app.use('/api/v1/tickets', ticketRoute)
app.use('/api/v1/foods', foodRoute)
app.use('/api/v1/seats', seatRoute)
app.use('/api/v1/payment', paymentRoute)
app.use('/api/v1/feedbacks', feedBackRoute)
app.use('/api/v1/blogs', blogRoute)
app.use('/api/v1/events', eventRoute)
app.use('/api/v1/moviesoons',movieSoonRoute)

const server = http.createServer(app);
const port = process.env.PORT || 5000;

//Route not exist
app.all('*', (req, res, next) => {
    const err = new Error('The route can not be found')
    err.statusCode = 404
    next(err)
})
app.use(errorHandler)

server.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})