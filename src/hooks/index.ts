import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

export const useTasks = () => {
  const [tasks] = useState<ITask[]>([
    { id: uuidV4(), name: "First task", completed: false, edited: false },
    { id: uuidV4(), name: "Second task", completed: false, edited: false },
    { id: uuidV4(), name: "Third task", completed: false, edited: false },
  ]);

  return {
    tasks
  }
};