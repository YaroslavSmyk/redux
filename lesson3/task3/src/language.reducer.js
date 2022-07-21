import { SETLANGUAGE } from './language.actions';

export const languageReducer = (state = 'en', action) => {
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
