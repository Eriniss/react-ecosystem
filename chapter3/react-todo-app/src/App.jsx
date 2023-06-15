import { useState, useCallback } from 'react';
import List from './components/List';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  // useCallback을 사용하지 않을 경우 매번 새로운 함수가 생성되어 자식 컴포넌트에게 props로 전달되는데
  // 이는 자식 컴포넌트가 매번 리렌더링 되는 원인이 된다.
  const onClickDelete = useCallback(
    (id) => {
      console.log('delete');
      setTodoData(todoData.filter((data) => data.id !== id));
    },
    [todoData]
  );

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} onClickDelete={onClickDelete} />
        <Form value={value} setValue={setValue} onSubmitForm={onSubmitForm} />
      </div>
    </div>
  );
};

export default App;

// import React, { useState } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import List from './components/List';
// import Form from './components/Form';
// import './App.css';

// const App = () => {
//   const [todoData, setTodoData] = useState([]);
//   const [value, setValue] = useState('');

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     console.log('submit');
//     let newTodo = {
//       id: Date.now(),
//       title: value,
//       completed: false,
//     };
//     setTodoData((prev) => [...prev, newTodo]);
//     setValue('');
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const newTodoData = [...todoData];

//     const [reorderedItem] = newTodoData.splice(result.source.index, 1);

//     newTodoData.splice(result.destination.index, 0, reorderedItem);
//     setTodoData(newTodoData);
//   };

//   return (
//     <div className="container">
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="todo">
//           {(provided) => (
//             <div className="todoBlock" ref={provided.innerRef} {...provided.droppableProps}>
//               <div className="title">
//                 <h1>할 일 목록</h1>
//               </div>
//               <div>
//                 <List todoData={todoData} setTodoData={setTodoData} />
//                 {provided.placeholder}
//               </div>
//               <Form value={value} setValue={setValue} onSubmitForm={onSubmitForm} />
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default App;
