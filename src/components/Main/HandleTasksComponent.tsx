import { useCx } from "../../context";

export const HandleTasksComponent = () => {
  const cx = useCx();
  const handleCleanTask = cx?.methods?.handleCleanTask!;
  const { length } = cx?.attributes?.tasks || [];

  return (<>
    <div className='flex items-center justify-between'>
      <p>{ length } { length === 1 ? "item" : "items"} left</p>
      <button onClick={ handleCleanTask }>Clear completed</button>
    </div>
  </>);
};