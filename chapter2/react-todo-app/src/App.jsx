import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    todoData: [],
    value: '',
    completed: false,
  };

  btnStyle = {
    background: 'skyblue',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  handleChageInput = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('submit');
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    this.setState({
      todoData: [...this.state.todoData, newTodo],
      value: '',
    });
  };

  handleCompleChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({
      todoData: newTodoData,
    });
  };

  onClickDelete = (id) => {
    return () => {
      console.log('delete');
      this.setState({
        todoData: this.state.todoData.filter((data) => data.id !== id),
      });
    };
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            // 이런식으로 map 메서드를 활용 할 때는 key값을 넣어줘야 에러가 나지 않는다.
            // key값은 고유한 값이어야 하며 index값을 넣는것은 불변성을 위해 피해야 한다.
            <div style={this.listStyle(data.completed)} key={data.id}>
              <input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleChange(data.id)} />
              {data.title}
              <button type="button" style={this.btnStyle} onClick={this.onClickDelete(data.id)}>
                x
              </button>
            </div>
          ))}

          <form style={{ display: 'flex' }}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요"
              value={this.state.value}
              onChange={this.handleChageInput}
            />
            <input type="submit" value="입력" className="btn" style={{ flex: '1' }} onClick={this.handleSubmitForm} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
