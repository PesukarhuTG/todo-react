import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

const App = () => {
  return (
    <div className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
      <h3>Todo App</h3>
      <AddTask />
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
