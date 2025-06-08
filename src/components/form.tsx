import { formValueTypes } from "@/types/fieldTypes";

export default function Form({
    formValue,
    setFormValue,
    handleSubmit,
}: {
    formValue: formValueTypes;
    setFormValue: (e: formValueTypes) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            {Object.keys(formValue).map((field, index) => {
                const label =
                    field === "dueDate"
                        ? "Due Date"
                        : field.charAt(0).toUpperCase() + field.slice(1);

                return (
                    <div key={index} className="space-x-2 flex flex-col">
                        <label className="font-bold">{label}</label>
                        <input
                            type={"text"}
                            name={field}
                            value={formValue[field as keyof formValueTypes]}
                            onChange={(e) => {
                                setFormValue({
                                    ...formValue,
                                    [field]: e.target.value,
                                });
                            }}
                            className="border rounded-md p-3 outline-none"
                        />
                    </div>
                );
            })}
            <button
                type="submit"
                className="px-6 py-3 mt-6 border w-full rounded-md bg-blue-400 cursor-pointer hover:-translate-y-1 transition-all"
            >
                Add Task
            </button>
        </form>
    );
}
