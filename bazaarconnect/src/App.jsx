import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // use Tailwind styles here

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <div className="flex gap-10 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-20 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-20 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600 mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-700 mt-3">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* ✅ Tailwind Test */}
      <div className="bg-green-500 text-white p-4 rounded-xl text-center mb-4">
        Tailwind is working! 🎉
      </div>

      <p className="text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
