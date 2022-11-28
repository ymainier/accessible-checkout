import { useId } from "react";
import type { ReactNode } from "react";
import { VoucherForm } from "./VoucherForm";

type ItemProps = {
  children: ReactNode;
  price: string;
  isTotal?: boolean;
  previousPrice?: string;
};
function Item({
  children,
  price,
  isTotal,
  previousPrice,
}: ItemProps): JSX.Element {
  return (
    <div role="listitem" className={`${isTotal ? "basket-total" : ""}`}>
      <span className="name">{children}</span>
      {previousPrice ? (
        <span className="price">
          <em>{previousPrice}</em> <strong>{price}</strong>
        </span>
) : (
        <span className="price">{price}</span>
      )}
    </div>
  );
}

export function Basket(): JSX.Element {
  const id = useId();
  return (
    <aside className="basket" aria-labelledby={id}>
      <h2 id={id}>Basket</h2>
      <div role="list" aria-labelledby={id}>
        <Item price="£9.99" previousPrice="£14.99">
          Cinema Membership
        </Item>
        <Item price="£10.99">Entertainment Membership</Item>
        <Item price="£20.98" isTotal>
          Total
        </Item>
      </div>
      <VoucherForm />
    </aside>
  );
}
