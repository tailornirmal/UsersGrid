function Trow({ user, handleEdit, handleDelete }) {
  return (
    <tr key={user.id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={user.image}
              alt={`${user.firstName}`}
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p className="text-gray-900 whitespace-no-wrap">{user.gender}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p className="text-gray-900 whitespace-no-wrap">{user.birthDate}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p className="text-gray-900 whitespace-no-wrap">{user.university}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p className="text-gray-900 whitespace-no-wrap">{user.ssn}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <button
          onClick={() => handleEdit(user)}
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user)}
          type="button"
          className="px-3 py-2 text-xs ml-1 font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default Trow;
