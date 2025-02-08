"use client";

import { useState } from "react";

export default function TodoForm({ addTodo }: { addTodo: (todo: string) => void }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex">
      <input
        type="text"
        placeholder="Add a new task..."
        className="w-full p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="px-4 bg-blue-500 text-white rounded-r hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}