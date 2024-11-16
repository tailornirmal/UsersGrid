import Table from "./Table";

export default function App() {
  return (
    <div className="w-full mt-12">
      <p className="text-xl pb-3 flex items-center">
        <i className="fas fa-list mr-3"></i> List of Users
      </p>
      <div className="bg-white overflow-auto">
        <Table />
      </div>
    </div>
  );
}
