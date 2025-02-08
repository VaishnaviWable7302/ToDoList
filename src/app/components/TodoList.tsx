"use client";

import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo }: { todos: string[]; removeTodo: (index: number) => void }) {
  return (
    <ul className="w-full max-w-md mt-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />)
      ) : (
        <p className="text-gray-600 text-center">No tasks added yet.</p>
      )}
    </ul>
  );
}