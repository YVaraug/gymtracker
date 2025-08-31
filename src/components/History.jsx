import { useState, useEffect } from 'react';

export default function History() {
  const [history, setHistory] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('workoutHistory')) || [];
    const grouped = {};
    for (const entry of stored) {
      if (!grouped[entry.date]) grouped[entry.date] = [];
      if (Array.isArray(entry.sessions)) {
        grouped[entry.date].push(...entry.sessions);
      } else {
        grouped[entry.date].push(entry);
      }
    }
    setHistory(grouped);
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = (firstDayOfMonth.getDay() + 6) % 7; // lunes = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  function handleDayClick(day) {
    if (!day) return;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (history[dateStr]) {
      setSelectedDate(dateStr);
      setSelectedSession(null);
    } else {
      setSelectedDate(null);
      setSelectedSession(null);
    }
  }

  const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Historial</h2>
      <div className="grid grid-cols-7 gap-2 mb-4 text-center">
        {dayNames.map(name => (
          <div key={name} className="font-semibold">{name}</div>
        ))}
        {days.map((day, idx) => {
          if (!day) return <div key={idx}></div>;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasWorkout = !!history[dateStr];
          return (
            <button
              key={idx}
              onClick={() => handleDayClick(day)}
              className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full text-white ${hasWorkout ? 'bg-green-500' : 'bg-red-500'}`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Entrenamientos del {selectedDate}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {history[selectedDate].map((session, i) => (
              <li key={i}>
                <button
                  className="underline"
                  onClick={() => setSelectedSession(i)}
                >
                  {session.name ? session.name : `Sesión ${i + 1}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedDate !== null && selectedSession !== null && (
        <div>
          <h4 className="font-semibold mb-2">Ejercicios</h4>
          <ul className="list-disc pl-5">
            {(history[selectedDate][selectedSession].exercises || []).map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
