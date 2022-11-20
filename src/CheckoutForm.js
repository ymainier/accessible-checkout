import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Checkout</h1>
      <PersonalInfo />
      <Address />
      <PaymentMethod />
    </form>
  );
}
