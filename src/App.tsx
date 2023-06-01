import * as React from 'react';
import './style.css';

type Todos = {
  taskName: string;
  dateTime: Date;
  worker: string;
  done: boolean;
};

const App = () => {
  const [todos, setTodos] = React.useState<Todos[] | null>([]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
export default App;
