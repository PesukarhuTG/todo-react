interface Task {
  id: string;
  text: string;
  status: 'inProgress' | 'completed';
}

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TaskItem = ({ task, onDelete, onComplete }: Props) => {
  const isCompleted = task.status === 'completed';

  return (
    <>
      <tr className={`table-${isCompleted ? 'success' : 'light'}`}>
        <td>1</td>
        <td className="task" aria-label={task.id} style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
          {task.text}
        </td>
        <td>{task.status === 'completed' ? 'Выполнено' : 'В процессе'}</td>
        <td>
          <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
            Удалить
          </button>
          <button className="btn btn-success" onClick={() => onComplete(task.id)} disabled={isCompleted}>
            Завершить
          </button>
        </td>
      </tr>
    </>
  );
};

export default TaskItem;
