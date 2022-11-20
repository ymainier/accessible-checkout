import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <PersonalInfo />
      <Address />
      <PaymentMethod />
    </form>
  );
}
