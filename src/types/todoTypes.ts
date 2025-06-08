export type todoTypes = {
    id: number;
    task: string;
    category: string;
    dueDate: string;
    priority: "low" | "medium" | "high";
    completed: boolean;
};
