//initial state
const initialStateAcount = {
  loan: 0,
  balance: 0,
  loanPurpose: "",
  isLoading: false,
  cart: [
    { id: 1, namee: "amro", age: 29, salary: 10000 },
    { id: 2, namee: "ahmed", age: 10, salary: 23 },
  ],
};

//reducer
export default function accountReducer(state = initialStateAcount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) {
        return state;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payloan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    case "account/isConverting":
      return { ...state, isLoading: true };
    case "account/removeItemFromCart":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    default:
      return state;
  }
}

//action creatores
export function deposit(amount, currency) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: amount };
  }
  //async function for data fetching
  return async function (dispatch) {
    dispatch({ type: "account/isConverting" }); //make a loading while converting
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    console.log(data); //co nverted amount data
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
export function payloan() {
  return { type: "account/payloan" };
}

export function removeItemFromCart(id) {
  return { type: "account/removeItemFromCart", payload: id };
}
