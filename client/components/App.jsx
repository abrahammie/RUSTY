import React from 'react';
import $ from 'jquery';
import NewTodo from './NewTodo.jsx';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleCreation = this.handleCreation.bind(this);
    this.handleCompletion = this.handleToggleCompletion.bind(this);
  }

  componentDidMount() {
    $.get('http://localhost:3000/todos', (response) => {
      console.log(response);
    });
  }

  handleToggleCompletion(id) {
    $.ajax({
      method: 'POST',
      url: `/todos/${id}`
    }).then(data => {
      console.log('TOGGLE:', data);
      // Find the item and update its state
      // this.setState({ todos: data })
    })
  }

  handleCreation(item) {}

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>RUSTY test</h1>

        <div>
          <div>
            <NewTodo handleCreation={this.handleCreation} />
          </div>
        </div>

        <div>
          <TodoList todos={todos} handleToggleCompletion={this.handleToggleCompletion} />
        </div>
      </div>

    );
  }
}

export default App;
