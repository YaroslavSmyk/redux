export const SETLANGUAGE = 'LANGUAGE/SETLANGUAGE';

export const setLanguage = (lan) => {
  return {
    type: SETLANGUAGE,
    payload: {lan}
  };
};

