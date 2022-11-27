export function Address() {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <div className="form-line">
        <label htmlFor="house_number">House number:</label>
        <input type="text" name="house_number" id="house_number" required />
      </div>
      <div className="form-line">
        <label htmlFor="street">Street:</label>
        <input type="text" name="street" id="street" />
      </div>
      <div className="form-line">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          autoComplete="address-level1"
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
    </fieldset>
  );
}
