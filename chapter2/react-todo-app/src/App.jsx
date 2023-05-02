import React, { Component } from 'react';
import './App.css';

class App extends Component {
  todoData = [
    {
      id: '1',
      title: 'study',
      completed: true,
    },
    {
      id: '2',
      title: 'exercise',
      completed: false,
    }
  ]

  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }

  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: 'none'
    }
  }

  render() {
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
        {this.todoData.map((data) => (
          <div style={this.getStyle(data)} key={data.id}>
          <input type='checkbox' defaultChecked={data.completed} />
          {data.title}
          <button style={this.btnStyle}>x</button>
        </div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;