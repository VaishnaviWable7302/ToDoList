"use client";

export default function TodoItem({ index, todo, removeTodo }: { index: number; todo: string; removeTodo: (index: number) => void }) {
  return (
    <li className="flex justify-between items-center bg-white p-3 mt-2 rounded shadow">
      <span className="text-gray-800">{todo}</span>
      <button
        onClick={() => removeTodo(index)}
        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}