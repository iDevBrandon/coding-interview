import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoCreate from "./Components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body 
  { background: #e9ecfe;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
