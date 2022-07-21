import { SETLANGUAGE } from './language.actions';

export const languageReducer = (state = null, action) => {
  switch (action.type) {
    case SETLANGUAGE:
      return {
        ...state,
        payload: action.payload.lan,
      };

    default: {
      return state;
    }
  }
};
