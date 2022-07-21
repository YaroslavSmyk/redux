export const ADDPRODUCT = 'CART/ADDPRODUCT';
export const REMOVEPRODUCT = 'CART/REMOVEPRODUCT';

export const addProduct = (prod) => {
  return {
    type: ADDPRODUCT,
    payload: {prod},
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVEPRODUCT,
    payload: {id},
  };
};
