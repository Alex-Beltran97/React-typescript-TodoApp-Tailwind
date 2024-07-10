import { useCx } from "../../context";

interface Props {
  task: ITask;
};

export const TaskComponent = ({ task }: Props) => {
  const { id, name, completed } = task;

  const cx = useCx();
  const handleCompleteTask = cx?.methods?.handleCompleteTask!;
  const handleDeleteTask = cx?.methods?.handleDeleteTask!;

  return (<>
    <div
      onClick={() => handleCompleteTask(id)}
      className='flex items-center justify-between border-b-2 py-2'
    >
      <div className='flex items-center gap-2 break-all'>
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
        <p className={completed ? "line-through" : "" }>{ name }</p>
      </div>
      <button className='mx-4' onClick={(e) => { e.stopPropagation() ;handleDeleteTask(id)}}>
        <img className='w-3' src="/icons/icon-cross.svg" alt="cross-exit" />
      </button>
    </div>
  </>);
};
