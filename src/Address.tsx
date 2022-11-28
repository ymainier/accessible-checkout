export function Address() {
  return (
    <section className="address">
      <div className="form-line">
        <label htmlFor="house_number">House number:</label>
        <input type="text" autoComplete="address-line1" name="house_number" id="house_number" required />
      </div>
      <div className="form-line">
        <label htmlFor="street">Street:</label>
        <input type="text" autoComplete="address-line3" name="street" id="street" />
      </div>
      <div className="form-line">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          autoComplete="address-level2"
          name="city"
          id="city"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="postcode">Postcode:</label>
        <input
          type="text"
          autoComplete="postal-code"
          name="postcode"
          id="postcode"
          required
        />
      </div>
    </section>
  );
}
