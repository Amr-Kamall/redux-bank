import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <h1>hello {customer}</h1>;
}

export default Customer;
