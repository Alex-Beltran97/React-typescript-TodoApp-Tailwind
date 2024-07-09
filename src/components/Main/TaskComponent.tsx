import React from 'react';

interface Props {
  task: ITask;
};

export const TaskComponent = ({ task }: Props) => {
  const { id, name, completed } = task;

  return (<>
    <div className='flex items-center justify-between border-b-2 py-2'>
      <div className='flex items-center gap-2'>
        <input
          type="radio"
          id={ id }
          defaultChecked={completed}
        />
        <label
          htmlFor={ id }
          className='text-black'
        >{ name }</label>
      </div>
      <button className='mx-4'>
        <img className='w-3' src="/icons/icon-cross.svg" alt="cross-exit" />
      </button>
    </div>
  </>);
};
