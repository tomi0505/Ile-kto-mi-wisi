function SimpleUserForm({ currentUser }) {
  return (
    <form className={currentUser !== "" ? "" : "d-none"}>
      <div className="mb-4">
        <h2>
          {currentUser.name} {currentUser.surname}
        </h2>
        <h3>Jest Ci winien: {currentUser.account} zł.</h3>
      </div>
      <div className="mb-3">
        <label htmlFor="newAccount" className="form-label">
          Wpisz nową kwotę
        </label>
        <input type="number" className="form-control" id="newAccount" />
      </div>
      <button type="submit" className="btn btn-primary">
        Zapisz
      </button>
    </form>
  );
}

export default SimpleUserForm;
