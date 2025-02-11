import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';
import LoginForm from './components/LoginForm';

type Task = {
  id: string;
  text: string;
  status: 'inProgress' | 'completed';
};

// Интерфейс для хранения состояния пользователя
interface UserData {
  name: string;
  tasks: Task[];
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [username, setUsername] = useState<string>('');

  // Загрузка данных пользователя из LocalStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem(username);
    if (storedUserData) {
      const userData: UserData = JSON.parse(storedUserData);
      setTasks(userData.tasks || []);
    }
  }, [username]);

  // Сохранение задач в LocalStorage
  useEffect(() => {
    if (username) {
      localStorage.setItem(
        username,
        JSON.stringify({
          name: username,
          tasks,
        })
      );
    }
  }, [username, tasks]);

  // Добавление новой задачи
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Math.random().toString(16).substring(2, 10),
      text: taskText,
      status: 'inProgress',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Обновление статуса задачи на "выполненную"
  const completeTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: 'completed' } : task)));
  };

  // Отражаем форму для ввода имени
  if (!username) {
    return <LoginForm onSubmit={(name: string) => setUsername(name)} />;
  }

  return (
    <div className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
      <h3>Todo App</h3>
      <h4>{`Добро пожаловать, ${username}!`}</h4>
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
            {tasks.map((task, i) => (
              <TaskItem
                key={task.id}
                task={{ ...task, number: i + 1 }}
                onDelete={deleteTask}
                onComplete={completeTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
