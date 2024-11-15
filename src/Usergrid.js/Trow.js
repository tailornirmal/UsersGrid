function Trow({ user }) {
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
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span class="relative">Edit</span>
        </span>
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span class="relative">Delete</span>
        </span>
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span class="relative">View</span>
        </span>
      </td>
    </tr>
  );
}

export default Trow;
