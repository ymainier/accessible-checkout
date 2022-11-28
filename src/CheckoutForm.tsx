import { useId } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { PersonalInfo } from "./PersonalInfo";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutForm(): JSX.Element {
  const id = useId();
  return (
    <section aria-labelledby={id}>
      <h2 id={id}>Form</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Accordion.Root type="single" defaultValue="personal-info">
          <Accordion.Item value="personal-info" className="accordion-item">
            <Accordion.Header>
              <Accordion.Trigger>Personal Info</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <PersonalInfo />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="address" className="accordion-item">
            <Accordion.Header>
              <Accordion.Trigger>Address</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Address />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="payment-method" className="accordion-item">
            <Accordion.Header>
              <Accordion.Trigger>Payment Method</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <PaymentMethod />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </form>
    </section>
  );
}
