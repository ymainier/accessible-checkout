import { VoucherForm } from "./VoucherForm";

function Item({ children, price, isTotal }) {
  return (
    <div
      role="listitem"
      className={`${isTotal ? "basket-total" : ""}`}
    >
      <span className="name">{children}</span>
      <span className="price">{price}</span>
    </div>
  );
}

export function Basket() {
  return (
    <section className="basket">
      <h2 id="basket">Basket</h2>
      <div role="list" aria-labelledby="basket">
        <Item price="£9.99">Cinema Membership</Item>
        <Item price="£10.99">Entertainment Membership</Item>
        <Item price="£20.98" isTotal>Total</Item>
      </div>
      <VoucherForm />
    </section>
  );
}
