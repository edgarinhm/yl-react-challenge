import { TaskState } from "../../common/enums/task-state";
import { TaskModel } from "../../common/models/task-model";

export const TaskData: TaskModel[] = [
  {
    id: 1,
    name: "task 1",
    state: TaskState.Complete,
  },
  {
    id: 2,
    name: "task 2",
    state: TaskState.InComplete,
  },
];
