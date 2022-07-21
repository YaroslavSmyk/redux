import { SETUSER, REMOVEUSER } from './user.actions';

export const userReduser = (state = null, action) => {
  switch (action.type) {
    case SETUSER:
      return {
        ...state,
        payload: action.payload.user,
      };
    case REMOVEUSER: {
      return null;
    }
    default: {
      return state;
    }
  }
};
