import { SETLANGUAGE } from './language.actions';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SETLANGUAGE:
      return action.payload.lan;
      

    default: {
      return state;
    }
  }
};
