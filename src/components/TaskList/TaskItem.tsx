import { useMemo } from "react";
import { TaskState } from "../../common/enums/task-state";
import { TaskModel } from "../../common/models/task-model";

interface TaskItemProps {
  task: TaskModel;
  onDelete: (taskId: number) => void;
  onSelected: (task: TaskModel) => void;
}
const TaskItem = ({ task, onDelete, onSelected }: TaskItemProps) => {
  const stateSyle = useMemo(() => {
    return task.state === TaskState.Complete ? "green" : "red";
  }, [task.state]);
  return (
    <li
      style={{
        display: "flex",
        gap: "0.5rem",
        backgroundColor: stateSyle,
      }}
    >
      <input
        aria-label={`mark task ${task.name} has complete`}
        aria-checked={task.selected}
        type="checkbox"
        onClick={() => onSelected(task)}
        checked={task.selected}
      />
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div>
          <span>Name: </span>
          {task.name}
        </div>
        <div>
          <span>State: </span>
          {task.state}
        </div>
      </div>
      <button aria-label="delete task button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
