import Thead from "./Thead";
import Trow from "./Trow";
import Loading from "../Utility/Loading";
import Modal from "../Components/Modal";
import { useState } from "react";

function Table({ users, loading, error }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(0);

  function handleEdit(event) {
    // console.log("table", e.target.id);
    const { id } = event.target;
    console.log("users", users);
    console.log("id", id);
    const filterSelectedUser = users.filter((e) => e.id == id);
    console.log("filter", filterSelectedUser);
    if(filterSelectedUser.length > 0 && id) {
      setSelectedUser(filterSelectedUser[0]);
      setIsOpen(true);
    } 

  }

  function handleDelete() {
    
  }

  function handleView() {
    
  }

  console.log("selectedUser", selectedUser);
  return (
    <table class="min-w-full leading-normal">
      <Thead />
      {loading && <Loading />}
      {isOpen && <Modal setIsOpen={setIsOpen} selectedUser={selectedUser} />}
      <tbody>
        {users.length > 0 &&
          users.map((user) => {
            return <Trow user={user} handleEdit={handleEdit} />;
          })}
      </tbody>
    </table>
  );
}

export default Table;
