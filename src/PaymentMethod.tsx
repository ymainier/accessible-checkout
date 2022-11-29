import { useId } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";

function Terms() {
  const id = useId();
  return (
    <div className="form-line">
      <input type="checkbox" name="tems" id={id} />
      <label htmlFor={id}>I've read and agreed to the terms</label>
    </div>
  );
}

function CreditCard() {
  return (
    <div>
      <h2>Card Payment</h2>
      <div className="form-line">
        <label htmlFor="card_number">Card Number:</label>
        <input
          type="text"
          autoComplete="cc-number"
          name="card_number"
          id="card_number"
          pattern="[0-9]{15,16}"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="expiry_date">Expiry date (MM/YY):</label>
        <input
          type="text"
          autoComplete="cc-exp"
          name="expiry_date"
          id="expiry_date"
          pattern="[0-9]{2}/[0-9]{2}"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="security_code">Security code:</label>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger aria-label="Where can I find my security" className="tooltip-trigger">?</Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="tooltip-content">
                Your security code is the last 3 digits on the back of your card.
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <input
          type="text"
          autoComplete="cc-csc"
          name="security_code"
          id="security_code"
          pattern="[0-9]{3,4}"
          required
        />
      </div>
      <Terms />
      <div className="form-line">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export function Paypal() {
  return (
    <div>
      <h2>Paypal</h2>
      <Terms />
      <div className="form-line">
        <button>Checkout with Paypal</button>
      </div>
    </div>
  );
}

export function PaymentMethod() {
  return (
    <section>
      <Tabs.Root
        className="payment-tabs"
        defaultValue="card"
        activationMode="manual"
      >
        <Tabs.List>
          <Tabs.Trigger value="card">Card</Tabs.Trigger>
          <Tabs.Trigger value="paypal">Paypal</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="card">
          <CreditCard />
        </Tabs.Content>
        <Tabs.Content value="paypal">
          <Paypal />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
