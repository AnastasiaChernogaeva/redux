const defaultState = {
  customer: [],
};

const addCus = "ADD_CUSTOMER";
const deleteCus = "DELETE_CUSTOMER";
const addManyCuses = "ADD_MANY_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addManyCuses:
      return { ...state, customer: [...state.customer, ...action.payload] };
    case addCus:
      return { ...state, customer: [...state.customer, action.payload] };
    case deleteCus:
      return {
        ...state,
        customer: [
          ...state.customer.filter((customer) => customer !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: addCus, payload });
export const deleteCustomerAction = (payload) => ({ type: deleteCus, payload });
export const addManyCustomersAction = (payload) => ({
  type: addManyCuses,
  payload,
});
