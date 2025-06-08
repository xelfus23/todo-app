/* eslint-disable @typescript-eslint/no-explicit-any */
import { todoTypes } from "@/types/todoTypes";
import { formValueTypes } from "@/types/fieldTypes";

// Just a basic example that modifies task string:
export function editFunction(todo: todoTypes, dispatch: React.Dispatch<any>) {
    const updatedData: formValueTypes = {
        task: prompt("New task:", todo.task) || todo.task,
        category: todo.category,
        dueDate: todo.dueDate,
        priority: todo.priority,
    };
    dispatch({
        type: "EDIT_TODO",
        payload: { id: todo.id, data: updatedData },
    });
}
