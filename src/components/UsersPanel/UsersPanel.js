import User from "../User/User.js";

function UsersPanel({ users, chooseUser }) {
  return (
    <div className="list-group">
      {users.map((user) => {
        return <User key={user.id} user={user} chooseUser={chooseUser} />;
      })}
    </div>
  );
}

export default UsersPanel;
