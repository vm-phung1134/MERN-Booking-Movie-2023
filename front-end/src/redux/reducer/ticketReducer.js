import {
  ALL_TICKET_REQUEST,
  ALL_TICKET_SUCCESS,
  ALL_TICKET_FAIL,
  ONE_TICKET_FAIL,
  ONE_TICKET_REQUEST,
  ONE_TICKET_SUCCESS,
  INCREMENT, DECREMENT, CREATE_TICKET_REQUEST, CREATE_TICKET_SUCCESS, CREATE_TICKET_FAIL
} from "../constants/ticketConstants";

//REDUCER GET ALL TICKETS
export const ticketReducer = (
  state = {
    tickets: [],
  },
  action
) => {
  switch (action.type) {
    case ALL_TICKET_REQUEST:
      return {
        loading: true,
        tickets: [],
      };
    case ALL_TICKET_SUCCESS:
      return {
        loading: false,
        tickets: action.payload.tickets === undefined ? [] : action.payload.tickets,
      };
    case ALL_TICKET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case INCREMENT:
      let increaseSL = state.tickets.map((value) => {
        
        if (value._id === action.payload) {
          return { ...value, quantity: value.quantity <20 ? 
            (
              value.quantity + 1
            ): 
            value.quantity };
        }
        return value;
      });
      return { ...state, tickets: increaseSL};
    case DECREMENT:
      let decreaseSL = state.tickets.map((value) => {
        if (value._id === action.payload) {
          return { ...value, quantity: value.quantity > 0 ? value.quantity - 1 : value.quantity };
        }
        return value;
      });
      return { ...state, tickets: decreaseSL };
    default:
      return state;
  }
};

// export const getOneTicketReducer = (
//   state = {
//     ticket: {},
//   },
//   action
// ) => {
//   switch (action.type) {
//     case ONE_TICKET_REQUEST:
//       return {
//         loading: true,
//         tickets: {},
//       };
//     case ONE_TICKET_SUCCESS:
//       return {
//         loading: false,
//         tickets: action.payload,
//       };
//     case ONE_TICKET_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const ticketDetailReducer = (
  state = {
    ticket: {},
  },
  action
) => {
  switch (action.type) {
    case ONE_TICKET_REQUEST:
      return {
        loading: true,
        ticket: {},
      };
    case ONE_TICKET_SUCCESS:
      return {
        loading: false,
        ticket: action.payload,
      };
    case ONE_TICKET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CREATE_TICKET_REQUEST:
      return {
        ...state,
        loading: true,
        isCreated: false,
      };
    case CREATE_TICKET_SUCCESS:
      return {
        loading: false,
        ticket: action.payload,
        isCreated: true,
      };
    case CREATE_TICKET_FAIL:
      return {
        ...state,
        loading: false,
        isCreated: false,
      };
    default:
      return state;
  }
};