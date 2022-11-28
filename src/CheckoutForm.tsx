import * as Accordion from "@radix-ui/react-accordion";
import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm(): JSX.Element {
  return (
    <main aria-label="Checkout Form">
      <form onSubmit={(e) => e.preventDefault()}>
        <Accordion.Root type="single" defaultValue="personal-info">
          <Accordion.Item value="personal-info">
            <h2>
            <Accordion.Trigger>Personal Info</Accordion.Trigger>
            </h2>
            <Accordion.Content>
              <PersonalInfo />
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="address">
            <h2>
              <Accordion.Trigger>Address</Accordion.Trigger>
            </h2>
            <Accordion.Content>
              <Address />
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="payment-method">
            <h2>
              <Accordion.Trigger>Payment Method</Accordion.Trigger>
            </h2>
            <Accordion.Content>
              <PaymentMethod />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </form>
    </main>
  );
}
