import { SETLANGUAGE } from './language.actions';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SETLANGUAGE:
      return {
        // ...state,
        language: action.payload.lan,
      };

    default: {
      return state;
    }
  }
};
