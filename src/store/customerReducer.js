const defaultState = {
  customer: [],
};

const addCus = "ADD_CUSTOMER";
const deleteCus = "DELETE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addCus:
      return { ...state, customer: [...state.customer, action.payload] };
    case deleteCus:
      return {
        ...state,
        customer: [
          ...state.customer.filter((custom) => custom !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: addCus, payload });
export const deleteCustomerAction = (payload) => ({ type: deleteCus, payload });
