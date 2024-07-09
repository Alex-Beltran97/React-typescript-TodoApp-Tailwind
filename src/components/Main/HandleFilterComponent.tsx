export const HandleFilterComponent = () => {
  return (<>
    <ul className='flex items-center justify-center gap-4 border-2 py-2 rounded font-medium shadow-lg'>
      <li>
        <button>All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  </>);
};