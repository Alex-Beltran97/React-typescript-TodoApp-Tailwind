import React from 'react';
import { useCx } from '../../context';
import { TaskComponent } from './TaskComponent';

export const TasksContainer = () => {
  const cx = useCx();
  const tasks = cx?.tasks;

  return (<>
    <div className='pb-2'>
      { tasks?.map(task => (<TaskComponent key={task.id} task={task} />)) }
    </div>
  </>);
};