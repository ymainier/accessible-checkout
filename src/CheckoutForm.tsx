import { useId } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm(): JSX.Element {
  const id = useId();
  return (
    <section aria-labelledby={id}>
      <h2 id={id} >Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <PersonalInfo />
        <Address />
        <PaymentMethod />
      </form>
    </section>
  );
}
