"use client"; // Required if using Next.js App Router (app/ directory)

import { todoTypes } from "@/types/todoTypes";
import {
    createContext,
    useContext,
    useReducer,
    ReactNode,
    Dispatch,
} from "react";

// Define Todo item type


// Define action types
type Action =
    | { type: "ADD_TODO"; payload: todoTypes }
    | { type: "REMOVE_TODO"; payload: number }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "EDIT_TODO"; payload: { id: number; data: Partial<todoTypes> } };

// Initial state
const initialTodos: todoTypes[] = [];

// Reducer function
function todoReducer(state: todoTypes[], action: Action): todoTypes[] {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: Date.now(),
                    task: action.payload.task,
                    category: action.payload.category,
                    dueDate: action.payload.dueDate,
                    priority: action.payload.priority,
                    completed: false,
                },
            ];
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "EDIT_TODO":
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, ...action.payload.data }
                    : todo
            );
        default:
            return state;
    }
}

// Create context
const TodoContext = createContext<{
    todos: todoTypes[];
    dispatch: Dispatch<Action>;
} | null>(null);

// Provider component
export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

// Custom hook to use the context
export function useTodos() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos must be used within a TodoProvider");
    }
    return context;
}
