export const GO_NEXT = 'USERS/GO_NEXT';
export const GO_PREV = 'USERS/GO_PREV';

export const goPrev = () => {
  return {
    type: GO_NEXT,
  };
};

export const goNext = () => {
  return {
    type: GO_PREV,
  };
};
