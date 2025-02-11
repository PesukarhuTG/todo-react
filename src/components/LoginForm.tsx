import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (username: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState('');

  const handleSubmitKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit(username);
    }
  };

  const handleSubmit = () => {
    onSubmit(username);
  };

  return (
    <div className="vh-100 w-100 d-flex align-items-center justify-content-center flex-column">
      <h3>Todo App</h3>
      <p>Пожалуйста, введите ваше имя:</p>

      <form className="d-flex align-items-center mb-3" onSubmit={handleSubmit}>
        <label className="form-group me-3 mb-0">
          <input
            type="text"
            className="form-login"
            placeholder="Введите ваше имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleSubmitKeydown}
            aria-label="Ввод имени"
          />
        </label>

        <button type="submit" className="btn btn-primary me-3" disabled={!username.trim()}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
