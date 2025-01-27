//initial state
const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

//reducer
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomerName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

//action creators

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
export function updateCustomerName(fullName) {
  return { type: "customer/updateCustomerName", payload: fullName };
}
