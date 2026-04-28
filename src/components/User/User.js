function User({ user, chooseUser }) {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action"
      aria-current="true"
      onClick={() => chooseUser(user.id)}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          {user.name} {user.surname}
        </h5>
        <small>3 dni temu</small>
      </div>
      <p className="mb-1">Wisi mi: {user.account} zł.</p>
      <small>And some small print.</small>
    </a>
  );
}

export default User;
