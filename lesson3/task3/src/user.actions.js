export const SETUSER = 'USER/SETUSER';
export const REMOVEUSER = 'USER/REMOVEUSER';

export const setUser = (user) => {
  return {
    type: SETUSER,
    payload: user,
  };
};
export const removeUser = () => {
  return {
    type: REMOVEUSER,
  };
};
