function Trow({ user, handleEdit, handleDelete }) {
  return (
    <tr key={user.id}>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-full h-full rounded-full"
              src={user.image}
              alt={`${user.firstName}`}
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p class="text-gray-900 whitespace-no-wrap">{user.gender}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p class="text-gray-900 whitespace-no-wrap">{user.birthDate}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p class="text-gray-900 whitespace-no-wrap">{user.university}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <p class="text-gray-900 whitespace-no-wrap">{user.ssn}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-xs">
        <button
          onClick={() => handleEdit(user.id)}
          type="button"
          id={user.id}
          class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          type="button"
          id={user.id}
          class="px-3 py-2 text-xs ml-1 font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Remove
        </button>
        <button
          type="button"
          class="px-3 py-2 text-xs ml-1 font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
        </button>
      </td>
    </tr>
  );
}

export default Trow;
