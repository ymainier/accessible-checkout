import { useId } from "react";

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
          autofill="cc-number"
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
          autofill="cc-exp"
          name="expiry_date"
          id="expiry_date"
          pattern="[0-9]{2}/[0-9]{2}"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="security_code">Security code:</label>
        <input
          type="text"
          autofill="cc-csc"
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
  <div>
    <h2>Paypal</h2>
    <Terms />
    <div className="form-line">
      <button>Checkout with Paypal</button>
    </div>
  </div>;
}

export function PaymentMethod() {
  return (
    <div>
      <CreditCard />
    </div>
  );
}
