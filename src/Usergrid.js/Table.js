import Thead from "./Thead";
import Trow from "./Trow";
import Loading from "../Utility/Loading";

function Table({ users, loading, error }) {
  console.log("users", users);
  return (
    <table class="min-w-full leading-normal">
      <Thead />
      {loading && <Loading />}
      <tbody>
        {users.length > 0 &&
          users.map((user) => {
            return <Trow user={user} />;
          })}
      </tbody>
    </table>
  );
}

export default Table;
