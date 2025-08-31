import { useState, useEffect } from 'react';

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('goals');
    if (saved) setGoals(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  function addGoal(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setGoals([...goals, { id: Date.now(), text, completed: false }]);
    setText('');
  }

  function toggleGoal(id) {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  }

  function deleteGoal(id) {
    setGoals(goals.filter(g => g.id !== id));
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
      <form onSubmit={addGoal} className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nuevo objetivo"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Añadir
        </button>
      </form>
      <ul className="space-y-2">
        {goals.map((goal) => (
          <li key={goal.id} className="flex items-center justify-between border p-2 rounded">
            <span className={goal.completed ? 'line-through' : ''}>{goal.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => toggleGoal(goal.id)}
                className="px-2 py-1 text-sm bg-green-500 text-white rounded"
              >
                {goal.completed ? 'Reabrir' : 'Completar'}
              </button>
              <button
                onClick={() => deleteGoal(goal.id)}
                className="px-2 py-1 text-sm bg-red-500 text-white rounded"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
