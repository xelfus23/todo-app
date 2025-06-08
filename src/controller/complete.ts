/* eslint-disable @typescript-eslint/no-explicit-any */
import { todoTypes } from "@/types/todoTypes";

export function completeFunction(todo: todoTypes, dispatch: React.Dispatch<any>) {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
}
