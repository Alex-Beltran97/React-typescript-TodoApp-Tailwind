interface FormValues {
  newTask: string;
}

interface ITask {
  id: string;
  name: string;
  completed: boolean;
}

interface IContext {
  attributes: {
    tasks: ITask[];
  };
  methods: {
    handleCreateTask: (name:string) => void;
    handleDeleteTask: (id:string) => void;
    handleCompleteTask: (id:string) => void;
    handleCleanTask: () => void;
    handleChangeFilter: (filter: any) => void;
    handleSortTask: (from: number, to: number) => void;
  }
}