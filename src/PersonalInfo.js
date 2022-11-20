export function PersonalInfo() {
  return (
    <fieldset>
      <legend>PersonalInfo</legend>
      <div className="form-line">
        <label htmlFor="first_name">First name: </label>
        <input
          type="text"
          autofill="given-name"
          name="first_name"
          id="first_name"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="last_name">Last name: </label>
        <input
          type="text"
          autofill="family-name"
          name="last_name"
          id="last_name"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="email">Email: </label>
        <input type="email" autofill="email" name="email" id="email" required />
      </div>
      <div className="form-line">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          autofill="new-password"
          name="password"
          id="password"
          required
        />
      </div>
      <div className="form-line">
        <button type="button">Next</button>
      </div>
    </fieldset>
  );
}
