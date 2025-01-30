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
        style={{ cursor: "pointer" }}
        aria-label={`mark task ${task.name} has complete`}
        aria-checked={task.selected}
        type="checkbox"
        onClick={() => onSelected(task)}
        checked={task.selected}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          whiteSpace: "nowrap",
          width: "150px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {task.name}
        </div>
        <div
          style={{
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {task.state}
        </div>
      </div>
      <button
        style={{ borderRadius: "4px", cursor: "pointer" }}
        aria-label="delete task button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
