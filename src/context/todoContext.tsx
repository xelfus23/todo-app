"use client"; // Required if using Next.js App Router (app/ directory)

import {
    createContext,
    useContext,
    useReducer,
    ReactNode,
    Dispatch,
} from "react";

// Define Todo item type
export type Todo = {
    id: number;
    task: string;
    completed: boolean;
};

// Define action types
type Action =
    | { type: "ADD_TODO"; payload: string }
    | { type: "REMOVE_TODO"; payload: number }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "EDIT_TODO"; payload: number };

// Initial state
const initialTodos: Todo[] = [];

// Reducer function
function todoReducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: Date.now(),
                    ...action.payload,
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
    todos: Todo[];
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
