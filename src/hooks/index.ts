import { useEffect, useState } from "react";
import { v4 as uuidV4 } from 'uuid';

export enum Filter {
  "All",
  "Active",
  "Completed",
}

export const useTasks = () => {
  const [tasks, setTask] = useState<ITask[]>([
    { id: uuidV4(), name: "First task", completed: true },
    { id: uuidV4(), name: "Second task", completed: false },
    { id: uuidV4(), name: "Third task", completed: false },
  ]);
  const [taskFiltered, setTaskFiltered] = useState<ITask[]>([]);

  const handleCreateTask = (name: string) => {
    const newTask: ITask = {
      id: uuidV4(),
      name,
      completed: false
    };

    setTask([...tasks, newTask]);
  };

  const handleDeleteTask = (id: string) => setTask([...tasks.filter(task => task.id !== id)]);

  const handleCompleteTask = (id: string) => {
    setTask([...tasks].map(task => {
      if (task.id !== id) return task;
      
      return {
        ...task,
        completed: !task.completed
      }
    }));
  };

  const handleCleanTask = () => setTask([]);

  const allTasks = [...tasks];
  const pendingTasks = [...tasks.filter(task => !task.completed)];
  const completedTasks = [...tasks.filter(task => task.completed)];

  const handleChangeFilter = (filter: Filter = Filter.All) => {
    switch (filter) {
      case Filter.All:
        setTaskFiltered(allTasks);
      break;
      case Filter.Active:
        setTaskFiltered(pendingTasks);
      break;
      case Filter.Completed:
        setTaskFiltered(completedTasks);
      break;
      default:
        console.log("Invalid value");
    };
  };

  const handleSortTask = (from: number, to: number) => {
    const arrTasks = [...tasks];
    const [task] = arrTasks.splice(from, 1);
    arrTasks.splice(to, 0, task);
    setTask(arrTasks);
  };

  useEffect(() => {
    setTaskFiltered(allTasks);    
  }, [tasks]);

  return {
    attributes: {
      tasks: taskFiltered
    },
    methods: {
      handleCreateTask,
      handleDeleteTask,
      handleCompleteTask,
      handleCleanTask,
      handleChangeFilter,
      handleSortTask
    }
  }
};