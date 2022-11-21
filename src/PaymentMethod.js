import { useId, useState } from "react";

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
  const [currentTab, setCurrentTab] = useState("creditcard");
  return (
    <div>
      <div className="tab-list">
        <button
          className="tab"
          type="button"
          onClick={() => setCurrentTab("creditcard")}
          data-selected={currentTab === "creditcard"}
        >
          Credit card
        </button>
        <button
          className="tab"
          type="button"
          onClick={() => setCurrentTab("paypal")}
          data-selected={currentTab === "paypal"}
        >
          Paypal
        </button>
      </div>
      <div className="tab-panel-list">
        <div className="panel" hidden={currentTab !== "creditcard"}>
          <fieldset>
            <legend>Card Payment</legend>
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
              <label htmlFor="expiry_date">Expiry date:</label>
              <input
                type="month"
                autofill="cc-exp"
                name="expiry_date"
                id="expiry_date"
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
          </fieldset>
        </div>
        <div className="panel" hidden={currentTab !== "paypal"}>
          <fieldset>
            <legend>Paypal</legend>
            <Terms />
            <div className="form-line">
              <button>Checkout with Paypal</button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
