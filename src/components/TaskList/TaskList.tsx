import { useState } from "react";
import { TaskData } from "../../common/data/task-data";
import { TaskState } from "../../common/enums/task-state";
import { TaskModel } from "../../common/models/task-model";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTask] = useState<TaskModel[]>(TaskData);
  const handleDelete = (id: number) => {
    setTask((state) => state.filter((task) => !(task.id == id)));
  };

  const handleSelect = (task: TaskModel) => {
    const updatedTasks = tasks.map((localTask) => {
      if (localTask.id === task.id) {
        return {
          ...localTask,
          selected: !localTask.selected,
          state:
            !localTask.selected === true
              ? TaskState.Complete
              : TaskState.InComplete,
        };
      } else {
        return { ...localTask };
      }
    });

    setTask(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <TaskItem
            key={`${index}-task.name`}
            task={task}
            onDelete={handleDelete}
            onSelected={handleSelect}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
