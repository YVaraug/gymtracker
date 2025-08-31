import { useState, useEffect } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    weight: '',
    height: '',
    gender: '',
    level: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('userProfile');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    alert('Perfil guardado exitosamente!');
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Mi Perfil</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1" htmlFor="firstName">Nombre</label>
          <input
            id="firstName"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="lastName">Apellido</label>
          <input
            id="lastName"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="weight">Peso (kg)</label>
          <input
            id="weight"
            name="weight"
            type="number"
            value={profile.weight}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="height">Altura (cm)</label>
          <input
            id="height"
            name="height"
            type="number"
            value={profile.height}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="gender">Género</label>
          <select
            id="gender"
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Selecciona</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div>
          <label className="block mb-1" htmlFor="level">Nivel</label>
          <select
            id="level"
            name="level"
            value={profile.level}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Selecciona</option>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="advanced">Avanzado</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}
