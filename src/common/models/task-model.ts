import { TaskState } from "../enums/task-state";

export interface TaskModel {
  id: number;
  name: string;
  state: TaskState;
  selected?: boolean;
}
