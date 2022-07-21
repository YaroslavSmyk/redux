import { ADDPRODUCT, REMOVEPRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.prod),
      };
    case REMOVEPRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
