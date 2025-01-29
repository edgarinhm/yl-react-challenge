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
        type="checkbox"
        onClick={() => onSelected(task)}
        checked={task.selected}
      />
      <div>
        <span>Name: </span>
        {task.name}
      </div>
      <div>
        <span>State: </span>
        {task.state}
      </div>
      <button aria-label="" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
