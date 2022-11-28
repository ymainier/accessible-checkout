export function PersonalInfo() {
  return (
    <section>
      <div className="form-line">
        <label htmlFor="first_name">First name: </label>
        <input
          type="text"
          autoComplete="given-name"
          name="first_name"
          id="first_name"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="last_name">Last name: </label>
        <input
          type="text"
          autoComplete="family-name"
          name="last_name"
          id="last_name"
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="email">Email: </label>
        <input type="email" autoComplete="email" name="email" id="email" required />
      </div>
      <div className="form-line">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          autoComplete="new-password"
          name="password"
          id="password"
          required
        />
      </div>
    </section>
  );
}
