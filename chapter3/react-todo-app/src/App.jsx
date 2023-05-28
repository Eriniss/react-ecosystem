import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const onClickDelete = (removeToId) => {
    setTodoList(todoList.filter((item) => item.id !== removeToId));
  }

  const onChangeInput = (e) => {
    setInputValue(e.currentTarget.value);
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTodoList = [...todoList];
    const [removed] = reorderedTodoList.splice(result.source.index, 1);
    reorderedTodoList.splice(result.destination.index, 0, removed);

    setTodoList(reorderedTodoList);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let newTodoData = {
      id: new Date().getTime(),
      value: inputValue,
      completed: false,
    }
    setTodoList((prev) => [...prev, newTodoData]);
    setInputValue('');
  }

  const toggleCompleted = (id) => {
    setTodoList(todoList.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
  }

  const Container = ({ id, value, completed }) => {
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)} />
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{value}</span>
        <button onClick={() => onClickDelete(id)}>Delete</button>
      </li>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <Droppable droppableId="droppable">
        
        <div className="App">
          <form onSubmit={onSubmitForm}>
            <input value={inputValue} onChange={onChangeInput} placeholder='Enter here'/>
            <input type='submit' value='Submit' />
          </form>
          <ul>
            {todoList.map((data) => (
              <Draggable>
                <Container key={data.id} id={data.id} value={data.value} completed={data.completed} />
              </Draggable>
            ))}
          </ul>
        </div>

      </Droppable>

    </DragDropContext>
  );
}

export default App;
