import * as Collapsible from "@radix-ui/react-collapsible";

export function VoucherForm() {
  return (
    <Collapsible.Root className="voucher-disclosure">
      <Collapsible.Trigger>
        <h3>Voucher</h3>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="voucher">
            <div className="form-line">
              <label htmlFor="voucher">Enter voucher code: </label>
              <input
                type="text"
                name="voucher"
                id="voucher"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-line">
              <button type="button">Apply</button>
            </div>
          </div>
        </form>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
