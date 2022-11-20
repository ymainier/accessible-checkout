import { useId } from "react"

function Terms() {
  const id = useId();
  return (
    <div className="form-line">
      <input type="checkbox" name="tems" id={id} />
      <label htmlFor={id}>I've read and agreed to the terms</label>
    </div>
  );
}

export function PaymentMethod() {
  return (
    <div>
      <fieldset>
        <legend>Card Payment</legend>
        <div className="form-line">
          <label htmlFor="card_number">Card Number:</label>
          <input
            type="text"
            name="card_number"
            id="card_number"
            pattern="[0-9]{15,16}"
            required
          />
        </div>
        <div className="form-line">
          <label htmlFor="expiry_date">Expiry date:</label>
          <input type="month" name="expiry_date" id="expiry_date" required />
        </div>
        <div className="form-line">
          <label htmlFor="security_code">Security code:</label>
          <input
            type="text"
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
      </fieldset>
      <fieldset>
        <legend>Paypal</legend>
        <Terms />
        <div className="form-line">
          <button>Checkout with Paypal</button>
        </div>
      </fieldset>
    </div>
  );
}
