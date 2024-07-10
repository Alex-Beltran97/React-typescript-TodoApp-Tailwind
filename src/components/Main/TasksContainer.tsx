import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useCx } from '../../context';
import { TaskComponent } from './TaskComponent';

export const TasksContainer = () => {

  const cx = useCx();
  const tasks  = cx?.attributes?.tasks;
  const handleSortTask  = cx?.methods?.handleSortTask!;

  const handleDragEnd = (e: any) => {
    const indexOrigin = e?.source?.index;
    const indexDestiny = e?.destination?.index;

    if (indexDestiny === undefined || (indexOrigin === indexDestiny)) return;

    handleSortTask(indexOrigin, indexDestiny);
  };

  return (<>
    <div className='pb-2'>
      <DragDropContext onDragEnd={ handleDragEnd }>
        <Droppable droppableId='droppable-1'>
          { (dropProvided) => (
            <div ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
              { tasks?.map((task, index) => (
                <Draggable key={ task.id } draggableId={ task.id } index={index}>
                  { (dragProvided) => (
                    <div ref={dragProvided.innerRef} {...dragProvided.dragHandleProps} {...dragProvided.draggableProps}>
                      <TaskComponent task={ task } />
                    </div>
                    ) }
                </Draggable>
                )) }
                {dropProvided.placeholder}
            </div>
          ) }
        </Droppable>
      </DragDropContext>
    </div>
  </>);
};