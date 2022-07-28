import { LEFT, RIGHT } from './users.actions.js';
import { users } from '../users.js';

export default function usersReducer(
  state = { usersList: users, currentPage: 0 },
  action
) {
  switch (action.type) {
    case LEFT: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case RIGHT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    default:
      return state;
  }
}
