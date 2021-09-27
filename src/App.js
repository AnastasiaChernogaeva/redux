import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/customerReducer";
//state.(название редьюсера).переменная

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customer);

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  // const deleteCustomer = (customer) => {
  //   dispatch({ type: "DELETE_CUSTOMER", payload: customer });
  // };
  // const addCustomer = (name) => {
  //   const customer = {
  //     id: Date.now(),
  //     name,
  //   };
  //   dispatch({ type: "ADD_CUSTOMER", payload: customer });
  // };

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer));
  };
  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name,
    };
    dispatch(addCustomerAction(customer));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "45px" }}>{cash}</div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "45px" }}
      >
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
        <br></br>
        <button onClick={() => addCustomer(String(prompt()))}>
          Add Customer
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => deleteCustomer(customer)} key={customer.id}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "3rem" }}>There are no clients</div>
      )}
    </div>
  );
}

export default App;
