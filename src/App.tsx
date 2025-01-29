import "./styles.css";
import { Wrapper } from "./styled";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <Wrapper>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TaskList />
    </Wrapper>
  );
}
