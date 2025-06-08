/* eslint-disable @typescript-eslint/no-explicit-any */
import { todoTypes } from "@/types/todoTypes";

export function deleteFunction(todo: todoTypes, dispatch: React.Dispatch<any>) {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
}
