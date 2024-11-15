import Table from "./Table";

export default function App() {

  return (
    <div class="w-full mt-12">
      <p class="text-xl pb-3 flex items-center">
        <i class="fas fa-list mr-3"></i> List of Users
      </p>
      <div class="bg-white overflow-auto">
          <Table />
      </div>
    </div>
  );
}
