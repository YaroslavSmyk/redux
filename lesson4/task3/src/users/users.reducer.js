import { NEXT_PAGE, PREV_PAGE } from './users.actions.js';
import { users } from '../users.js';

const usersReducer = (state = users, action) => {
  switch (action.type) {
    case NEXT_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case PREV_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    default:
      return state;
  }
};
export default usersReducer;
