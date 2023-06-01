import * as React from 'react';
import './style.css';

type Todos = {
  taskName: string;
  worker: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = React.useState<Todos[] | null>([
    {
      taskName: 'Do the Laundry',
      worker: 'John Doe',
      done: true,
    },
  ]);

  const randomTasks = (): void => {
    const tasks: Todos[] = [
      { taskName: 'Do the Laundry', worker: 'John Doe', done: false },
      { taskName: 'Wash Dishes', worker: 'Jerry', done: true },
      { taskName: 'Cut the grass', worker: 'Tom', done: false },
      { taskName: 'Clean windows', worker: 'Mary', done: true },
      { taskName: 'Buy grocery', worker: 'Chloe', done: false },
    ];
    const index = tasks[Math.floor(Math.random() * tasks.length)];
    setTodos([...todos, index]);
  };

  return (
    <div>
      <h1>Todos list with Typescript</h1>
      {todos &&
        todos.map((todo, i: number) => (
          <div style={{ border: 'solid blue 1px', padding: '1rem' }}>
            <span>{i + 1}: </span>
            <span>{todo.taskName} / </span>
            <span>{todo.worker} / </span>
            <span>{todo.done ? 'Task Done' : 'Task Not Done'}</span>
          </div>
        ))}
      <hr />
      <button onClick={() => randomTasks()}>Add Task</button>
    </div>
  );
};
export default App;
