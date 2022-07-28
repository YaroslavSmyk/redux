import { NEXT_PAGE, PREV_PAGE } from './users.actions.js';
import { users } from '../users.js';

export default function usersReducer(
  state = { usersList: users, currentPage: 0 },
  action
) {
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
}
