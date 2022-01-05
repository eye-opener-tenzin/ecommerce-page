import { MOCK_DATA } from './../mock_data';
export const POPULATE_PRODUCTS = 'POPULATE_PRODUCTS';

export const populateProducts = products => ({
  type: POPULATE_PRODUCTS,
  payload: products,
});

export const getProducts = () => dispatch => {
  dispatch(populateProducts(MOCK_DATA));
};
