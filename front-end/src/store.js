import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { 
    movieDetailReducer, 
    moviesReducer,
   
} 
from './redux/reducer/movieReducer'
import { getAllReducer, userChangeReducer, userEditReducer, userInfoReducer, userReducer } from './redux/reducer/authReducer'
import {
    cinemaReducer,
    cinemaDetailReducer
} from './redux/reducer/cinemaReducer'
import {
    showTimeReducer,
    showtimeDetailReducer
} from './redux/reducer/showTimeReducer'
import {
    ticketReducer
} from './redux/reducer/ticketReducer'
import { foodReducer } from './redux/reducer/foodReducer'
import { editReservationReducer, getAllReservationReducer, newReservationReducer } from './redux/reducer/reservationReducer'
import { seatsReducer } from './redux/reducer/seatReducer'
import { feedBackReducer } from './redux/reducer/feedBackReducer'
import { blogDetailReducer, blogReducer } from './redux/reducer/blogReducer'
import { eventDetailReducer, eventReducer } from './redux/reducer/eventReducer'
import { getAllMovieSoonReducer, getOneMovieSoonReducer } from './redux/reducer/movieSoonReducer'


const reducer = combineReducers({
    movies: moviesReducer,
    movie: movieDetailReducer,
    user: userReducer,
    users: getAllReducer,
    userInfo: userInfoReducer,
    editUser: userEditReducer,
    newUser: userChangeReducer,
    cinemas: cinemaReducer,
    showtimes: showTimeReducer,
    tickets: ticketReducer,
    seats: seatsReducer,
    foods: foodReducer,
    cinema: cinemaDetailReducer,
    showtime: showtimeDetailReducer,
    newReservation: newReservationReducer,
    reservations: getAllReservationReducer,
    reservation: editReservationReducer,
    feedBack: feedBackReducer,
    blogs: blogReducer,
    blog: blogDetailReducer,
    events: eventReducer,
    event: eventDetailReducer,
    movieSoons: getAllMovieSoonReducer,
    movieSoon: getOneMovieSoonReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store