import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

type Task = {
  id: string;
  text: string;
  status: 'inProgress' | 'completed';
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Добавление новой задачи
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Math.random().toString(16).substring(2, 10),
      text: taskText,
      status: 'inProgress',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
      <h3>Todo App</h3>
      <AddTask onSave={addTask} />
      <div className="table-wrapper">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>№</th>
              <th>Задача</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>

          <tbody>
            <TaskItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
