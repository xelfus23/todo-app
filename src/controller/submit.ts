/* eslint-disable @typescript-eslint/no-explicit-any */
import { formValueTypes } from "@/types/fieldTypes";

export function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    formValue: formValueTypes,
    dispatch: React.Dispatch<any>
) {
    e.preventDefault();
    if (!formValue.task.trim()) return;
    dispatch({ type: "ADD_TODO", payload: formValue });
}
