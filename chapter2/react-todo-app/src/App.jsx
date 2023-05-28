import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todoData: [
      {
        id: '1',
        value: 'study',
        completed: true
      },
      {
        id: '2',
        value: 'exercise',
        completed: false
      },
    ],
    value: ''
  }

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

  onClickDelete = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData});
  }

  onChangeInput = (e) => {
    console.log('e', e.target.value);
    this.setState({ value: e.target.value })
  }

  onSubmitForm = (e) => {
    // 인풋으로 전송할때 페이지가 리렌더링 되는것을 막는다.
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    };

    this.setState({ todoData: [...this.state.todoData, newTodo], value: '' });
  }

  render() {
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>To do list</h1>
          </div>
        {this.todoData.state.map((data) => (
          <div style={this.getStyle()} key={data.id}>
          <input type='checkbox' defaultChecked={false} />
          {data.title}
          <button
            style={this.btnStyle}
            onClick={() => this.onClickDelete(data.id)}
            >
              x
            </button>
        </div>
        ))}

          <form style={{ display: 'flex' }} onSubmit={this.onSubmitForm}>
            <input
              type='text'
              name='value'
              style={{ flex: '10', padding: '5px' }}
              placeholder='Enter here'
              value={this.state.value}
              onChange={this.onChangeInput}
            />
            <input
              type='submit'
              value='Enter'
              className="bnt"
              style={{ flex: '1'}}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;