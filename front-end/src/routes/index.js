import Login from "../pages/public/login";
import HomePage from "../pages/public/homepage";
import HomeMovie from "../pages/public/movie/homeMovie";
import DetailMovieNow from "../pages/public/movie/detailMovie/movieNow";
import Booking from "../pages/public/booking";
import Account from "../pages/public/account";
import CheckoutSuccess from "../pages/public/booking/checkoutSuccess";
import UserTickets from "../pages/public/account/userTickets";
import SearchPage from "../pages/public/search";
import Cinema from "../pages/public/cinema";
import support from "../pages/public/support";
import BlogAndEvent from "../pages/public/blog&event";
import BlogDetail from "../pages/public/blog&event/blogDetail";
import EventDetail from "../pages/public/blog&event/eventDetail";
import DetailMovieSoon from "../pages/public/movie/detailMovie/movieSoon";

// admin pages
import Dashboard from "../pages/admin/homepage";
import ManageMovie from "../pages/admin/movie";
import MovieNowAdd from "../pages/admin/movie/movieNowAdd";
import MovieSoonAdd from "../pages/admin/movie/movieSoonAdd";
import MovieNowUpdate from "../pages/admin/movie/movieNowUpdate";
import MovieSoonUpdate from "../pages/admin/movie/movieSoonUpdate";
import ShowTime from "../pages/admin/showtime/index"
import ShowTimeAdd from "../pages/admin/showtime/showtimeAdd"
import ShowTimeEdit from "../pages/admin/showtime/showtimeEdit"

const publicRoutes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/movie",
    component: HomeMovie,
  },
  {
    path: "/movie-now/:id",
    component: DetailMovieNow,
  },
  {
    path: "/movie-soon/:id",
    component: DetailMovieSoon,
  },
  {
    path: "/booking",
    component: Booking,
  },
  {
    path: "/account",
    component: Account,
  },
  {
    path: "/checkout-success",
    component: CheckoutSuccess,
  },
  {
    path: "/user-tickets",
    component: UserTickets,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/cinema",
    component: Cinema,
  },
  {
    path: "/support",
    component: support,
  },
  {
    path: "/blog&event",
    component: BlogAndEvent,
  },
  {
    path: "/blog-detail/:id",
    component: BlogDetail,
  },
  {
    path: "/event-detail/:id",
    component: EventDetail,
  },
  {
    path: "/",
    component: Login,
  },
];

const privateRoutes = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/movie",
    component: ManageMovie
  },
  {
    path: "/admin/movie/add-movie-now",
    component: MovieNowAdd
  },
  {
    path: "/admin/movie/add-movie-soon",
    component: MovieSoonAdd
  },
  {
    path: "/admin/movie/update-movie-now/:id",
    component: MovieNowUpdate
  },
  {
    path: "/admin/movie/update-movie-soon/:id",
    component: MovieSoonUpdate
  },
  {
    path: "/admin/showtime",
    component: ShowTime
  },
  {
    path: "/admin/showtime/add-showtime",
    component: ShowTimeAdd
  },
  {
    path: "/admin/showtime/edit-showtime/:id",
    component: ShowTimeEdit
  },

];

export { publicRoutes, privateRoutes };
