import Table from "./components/Table";
import TableBody from "./components/TableBody";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-red-400 text-4xl text-center mt-[20px]">
        Hello World
      </h1>
      <Table />
      <TableBody />
    </div>
  );
};

export default App;
