import { useRecoilState } from "recoil";
import { Item, taskState } from "../atoms/atom";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(taskState);

  const handleCompeleted = (task: Item) => {
    const copyTasks = [...tasks];
    const copyTask = { ...task };
    copyTask.completed = !copyTask.completed;

    copyTasks.splice(copyTasks.indexOf(task), 1, copyTask);
    setTasks(copyTasks);
  };

  const onRemove = (id: number) => {
    const copyTasks = [...tasks];
    const index = copyTasks.findIndex((v) => v.id === id);
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCompeleted(task)}
            ></input>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
              {task.title}
            </span>
            <button onClick={() => onRemove(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
