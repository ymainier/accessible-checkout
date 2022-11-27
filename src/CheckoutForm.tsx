import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm(): JSX.Element {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <PersonalInfo />
      <Address />
      <PaymentMethod />
    </form>
  );
}
