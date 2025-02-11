import { FormEvent, useState } from 'react';

interface Props {
  onSave: (task: string) => void;
}

const AddTask = ({ onSave }: Props) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskText.trim()) {
      onSave(taskText);
      setTaskText(''); // Очищаем поле после добавления задачи
    }
  };

  return (
    <form className="d-flex align-items-center mb-3" onSubmit={handleSubmit}>
      <label className="form-group me-3 mb-0">
        <input
          type="text"
          className="form-control"
          placeholder="Ввести задачу"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          aria-label="Ввод задачи"
        />
      </label>

      <button type="submit" className="btn btn-primary me-3" disabled={!taskText.trim()}>
        Сохранить
      </button>

      <button type="reset" className="btn btn-warning" onClick={() => setTaskText('')}>
        Очистить
      </button>
    </form>
  );
};

export default AddTask;
