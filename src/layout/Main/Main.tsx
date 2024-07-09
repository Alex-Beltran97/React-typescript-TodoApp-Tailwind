import React from 'react';
import {
  HandleFilterComponent,
  HandleTasksComponent,
  TasksContainer,
} from '../../components/Main';

export const MainComponent = () => {
  return (
    <>
      <main className="flex flex-col gap-2 text-sm text-gray-600 font-light">
        <div className="border-2 p-2 flex flex-col gap-2 rounded mb-4 bg-white shadow-lg">
          <TasksContainer />          
          <HandleTasksComponent />
        </div>
        <HandleFilterComponent />
        <p
          className="text-center my-4"
        >Drag and drop to reorder list</p>
      </main>
    </>
  );
};
