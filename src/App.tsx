import "./App.css";
import { RecoilRoot } from "recoil";
import TextForm from "./components/TextForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <RecoilRoot>
      <div>
        <TextForm />
        <TaskList />
      </div>
    </RecoilRoot>
  );
}

export default App;
