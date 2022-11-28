export function VoucherForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Voucher</h3>
      <div className="voucher">
        <div className="form-line">
          <label htmlFor="voucher">Enter voucher code: </label>
          <input type="text" name="voucher" id="voucher" required autoComplete="off" />
        </div>
        <div className="form-line">
          <button type="button">Apply</button>
        </div>
      </div>
    </form>
  );
}
