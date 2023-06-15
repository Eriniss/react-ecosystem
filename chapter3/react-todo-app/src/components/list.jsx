import React from 'react';

export default function list({ todoData, setTodoData }) {
  const btnStyle = {
    background: 'skyblue',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? '#bbbbbb' : '#000',
    };
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const onClickDelete = (id) => {
    return () => {
      console.log('delete');
      setTodoData(todoData.filter((data) => data.id !== id));
    };
  };

  return (
    <div>
      {todoData.map((data) => (
        // 이런식으로 map 메서드를 활용 할 때는 key값을 넣어줘야 에러가 나지 않는다.
        // key값은 고유한 값이어야 하며 index값을 넣는것은 불변성을 위해 피해야 한다.
        <div style={listStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={() => handleCompleChange(data.id)} />
          {data.title}
          <button type="button" style={btnStyle} onClick={onClickDelete(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}

// import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';

// export default function List({ todoData, setTodoData }) {
//   const btnStyle = {
//     background: 'skyblue',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right',
//     height: '20px',
//     width: '20px',
//   };

//   const listStyle = (completed) => ({
//     padding: '10px',
//     borderBottom: '1px #ccc dotted',
//     textDecoration: completed ? 'line-through' : 'none',
//     color: completed ? '#bbbbbb' : '#000',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   });

//   const handleCompleChange = (id) => {
//     let newTodoData = todoData.map((data) => {
//       if (data.id === id) {
//         data.completed = !data.completed;
//       }
//       return data;
//     });
//     setTodoData(newTodoData);
//   };

//   const onClickDelete = (id) => {
//     return () => {
//       console.log('delete');
//       setTodoData(todoData.filter((data) => data.id !== id));
//     };
//   };

//   return (
//     <div>
//       {todoData.map((data, index) => (
//         <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
//           {(provided, snapshot) => (
//             <div
//               style={listStyle(data.completed)}
//               key={data.id}
//               ref={provided.innerRef}
//               {...provided.draggableProps}
//               {...provided.dragHandleProps}
//               className={snapshot.isDragging ? 'selected' : 'not-selected'}
//             >
//               <input type="checkbox" defaultChecked={false} onChange={() => handleCompleChange(data.id)} />
//               <span>{data.title}</span>
//               <button type="button" style={btnStyle} onClick={onClickDelete(data.id)}>
//                 x
//               </button>
//             </div>
//           )}
//         </Draggable>
//       ))}
//     </div>
//   );
// }
