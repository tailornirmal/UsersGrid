import { useEffect, useState } from "react";

import Table from "./Table";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div class="w-full mt-12">
      <p class="text-xl pb-3 flex items-center">
        <i class="fas fa-list mr-3"></i> List of Users
      </p>
      <div class="bg-white overflow-auto">
          <Table users={users} loading={loading} error={error} />
      </div>
    </div>
  );
}
