import "./App.css";
import Counter from "./Counter";
import Employee from "./Employee";

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Sparrow",
    age: "28",
    employeeId: "1",
  },
  {
    firstName: "Stephanie",
    lastName: "Bee",
    age: "22",
    employeeId: "2",
  },
  {
    firstName: "George",
    lastName: "Crown",
    age: "21",
    employeeId: "3",
  },
  {
    firstName: "Ant",
    lastName: "Man",
    age: "30",
    employeeId: "4",
  },
];

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>Company Directory</h1>
      {employeeInfo.map((employee) => {
        return (
          <Employee
            firstName={employee.firstName}
            lastName={employee.lastName}
            age={employee.age}
            key={employee.employeeId}
          />
        );
      })}
    </div>
  );
}

export default App;
