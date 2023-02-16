import { ORDERS } from "../../constants/data/index";

const initialState = {
  orders: ORDERS,
};

const ordersReducer = (state = initialState, action) => {
  return state;
};

export default ordersReducer;
