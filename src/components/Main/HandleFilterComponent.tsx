import { forwardRef, useEffect, useRef } from "react";
import { useCx } from "../../context";
import { Filter } from "../../hooks";

export const HandleFilterComponent = () => {
  const allBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (allBtnRef.current) allBtnRef.current.focus();
  }, []);

  return (<>
    <ul
      className='
        flex
        items-center
        justify-center
        gap-4
        border-2
        py-2
        rounded
        font-medium
        shadow-lg
        bg-white
        '
    >
      <ButtonComponent text="All" ref={allBtnRef} filter={Filter.All} />
      <ButtonComponent text="Active" filter={Filter.Active} />
      <ButtonComponent text="Completed" filter={Filter.Completed} />      
    </ul>
  </>);
};

interface IButton {
  text: string;
  filter: Filter;
}

const ButtonComponent = forwardRef<HTMLButtonElement, IButton>(({ text, filter }, ref) => {
  const cx = useCx();

  const handleChangeFilter = cx?.methods.handleChangeFilter!;

  return (<li>
    <button
      onClick={(e) => { e.stopPropagation(); handleChangeFilter(filter) }}
      ref={ref}
      className="focus:text-blue-600"
    >{ text }</button>
  </li>);
}); 