import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { 
    movieDetailReducer, 
    movieEditReducer, 
    moviesReducer,
   
} 
from './redux/reducer/movieReducer'
import { getAllReducer, userChangeReducer, userEditReducer, userInfoReducer, userReducer } from './redux/reducer/authReducer'
import {
    cinemaReducer,
    cinemaDetailReducer,
    cinemaEditReducer
} from './redux/reducer/cinemaReducer'
import {
    showTimeReducer,
    showtimeDetailReducer,
    showTimeEditReducer
} from './redux/reducer/showTimeReducer'
import {
    ticketReducer,
    ticketDetailReducer
} from './redux/reducer/ticketReducer'
import { foodReducer,foodDetailReducer, foodEditReducer } from './redux/reducer/foodReducer'
import { editReservationReducer, getAllReservationReducer, reservationReducer } from './redux/reducer/reservationReducer'
import { seatsReducer } from './redux/reducer/seatReducer'
import { feedBackReducer } from './redux/reducer/feedBackReducer'
import { blogDetailReducer, blogReducer } from './redux/reducer/blogReducer'
import { eventDetailReducer, eventReducer } from './redux/reducer/eventReducer'
import { getAllMovieSoonReducer, getOneMovieSoonReducer, movieSoonEditReducer } from './redux/reducer/movieSoonReducer'
import { changeLanguageReducer } from './redux/reducer/languageReducer'


const reducer = combineReducers({
    movies: moviesReducer,
    movie: movieDetailReducer,
    editMovie: movieEditReducer,
    user: userReducer,
    users: getAllReducer,
    userInfo: userInfoReducer,
    editUser: userEditReducer,
    newUser: userChangeReducer,
    cinemas: cinemaReducer,
    editCinema: cinemaEditReducer,
    showtimes: showTimeReducer,
    tickets: ticketReducer,
    ticket: ticketDetailReducer,
    seats: seatsReducer,
    foods: foodReducer,
    food: foodDetailReducer,
    editFood: foodEditReducer,
    cinema: cinemaDetailReducer,
    showtime: showtimeDetailReducer,
    editShowtime: showTimeEditReducer,
    reservation: reservationReducer,
    reservations: getAllReservationReducer,
    editReservation: editReservationReducer,
    feedBack: feedBackReducer,
    blogs: blogReducer,
    blog: blogDetailReducer,
    events: eventReducer,
    event: eventDetailReducer,
    movieSoons: getAllMovieSoonReducer,
    movieSoon: getOneMovieSoonReducer,
    editMovieSoon: movieSoonEditReducer,
    language: changeLanguageReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store