interface Props {
  task: ITask;
};

export const TaskComponent = ({ task }: Props) => {
  const { id, name, completed } = task;

  return (<>
    <div className='flex items-center justify-between border-b-2 py-2'>
      <div className='flex items-center gap-2'>
        <label
          className={`
          w-[1.5rem]
          h-[1.5rem]
          rounded-[50%]
          cursor-pointer
          border-2
          overflow-hidden
          flex
          items-center
          justify-center
          ${ completed ? "bg-gradient-to-br from-teal-500 via-purple-600 to-pink-500" : "" }
          `}
          htmlFor={ id }
        >
          <input
            className="absolute opacity-0 w-0 h-0"
            type="checkbox"
            id={ id }
            defaultChecked={completed}
          />
          <img className={`object-cover ${ completed ? "block" : "hidden" }`} src="/icons/icon-check.svg" alt="check-icon" />
        </label>
        <p>{ name }</p>
      </div>
      <button className='mx-4'>
        <img className='w-3' src="/icons/icon-cross.svg" alt="cross-exit" />
      </button>
    </div>
  </>);
};
