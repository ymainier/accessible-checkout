import type { ReactNode } from "react";
import { VoucherForm } from "./VoucherForm";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type ItemProps = {
  children: ReactNode;
  price: string;
  previousPrice?: string;
  isTotal?: boolean;
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
          <em aria-hidden>{previousPrice}</em>
          <strong aria-hidden>{price}</strong>
          <VisuallyHidden.Root>was {previousPrice}, now {price}</VisuallyHidden.Root>
        </span>
      ) : (
        <span className="price">{price}</span>
      )}
    </div>
  );
}

export function Basket(): JSX.Element {
  return (
    <section className="basket">
      <h2 id="basket">Basket</h2>
      <div role="list" aria-labelledby="basket">
        <Item price="£9.99" previousPrice="£14.99">Cinema Membership</Item>
        <Item price="£10.99">Entertainment Membership</Item>
        <Item price="£20.98" isTotal>
          Total
        </Item>
      </div>
      <VoucherForm />
    </section>
  );
}
