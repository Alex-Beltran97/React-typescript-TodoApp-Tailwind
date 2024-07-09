interface FormValues {
  newTask: string;
}

interface ITask {
  id: string;
  name: string;
  completed: boolean;
  edited: boolean;
}

interface IContext {
  tasks: ITask[]
}