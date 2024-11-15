import Thead from "./Thead";
import Trow from "./Trow";
import Loading from "../Utility/Loading";
import Modal from "../Components/Modal";
import { useState, useEffect } from "react";
import Toast from "../Utility/Toast";

function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  function handleEdit(event) {
    // console.log("table", e.target.id);
    const { id } = event.target;
    console.log("users", users);
    console.log("id", id);
    const filterSelectedUser = users.filter((e) => e.id == id);
    console.log("filter", filterSelectedUser);
    if (filterSelectedUser.length > 0 && id) {
      setSelectedUser(filterSelectedUser[0]);
      setIsOpen(true);
    }
  }

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await fetch(`https://dummyjson.com/users/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      setLoading(false);
      const filterUsers = users.filter((e) => e.id !== parseInt(id));
      setUsers(filterUsers);
      setShowToast(true);
    }
  };

  function handleView() {}

  console.log("selectedUser", selectedUser);

  return (
    <>
      <table class="min-w-full leading-normal">
        <Thead />
        {loading && <Loading />}
        {toast && <Toast message={`User has been deleted successfully.`} />}
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            selectedUser={selectedUser}
            handleDelete={handleDelete}
          />
        )}
        <tbody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <Trow
                  user={user}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
