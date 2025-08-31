import { useState } from 'react';
import Profile from './components/Profile.jsx';
import Workout from './components/Workout.jsx';
import Goals from './components/Goals.jsx';
import History from './components/History.jsx';
import Stats from './components/Stats.jsx';

const tabs = [
  { id: 'profile', label: 'Perfil', component: Profile },
  { id: 'workout', label: 'Entrenar', component: Workout },
  { id: 'goals', label: 'Objetivos', component: Goals },
  { id: 'history', label: 'Historial', component: History },
  { id: 'stats', label: 'Estadísticas', component: Stats },
];

export default function App() {
  const [current, setCurrent] = useState('profile');
  const CurrentComponent = tabs.find(t => t.id === current).component;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold text-center">GymTracker</h1>
      </header>
      <nav className="flex justify-center space-x-4 bg-white shadow p-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrent(tab.id)}
            className={`px-3 py-1 rounded ${current === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <main className="max-w-4xl mx-auto">
        <CurrentComponent />
      </main>
    </div>
  );
}
