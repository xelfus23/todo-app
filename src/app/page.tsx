"use client";
import { dummyTodoItems } from "@/constants/todoDummy";
import { useState } from "react";

export default function Home() {
    const buttonFunctions = [
        {
            name: "Delete",
            color: "bg-red-400",
        },
        {
            name: "Edit",
            color: "bg-blue-400",
        },
        {
            name: "Complete",
            color: "bg-green-400",
        },
    ];

    const [formValue, setFormValue] = useState({
        task: "",
        category: "",
        dueDate: "",
        priority: "",
    });

    return (
        <div className="grid grid-cols-5">
            <div className="h-screen">
                <div className="border-r rounded-md h-full p-2">
                    <form className="space-y-4">
                        {Object.keys(formValue).map((field, index) => {
                            return (
                                <div
                                    key={index}
                                    className="space-x-2 flex flex-col"
                                >
                                    <label className="font-bold">
                                        {field === "dueDate"
                                            ? "Due Date"
                                            : field.charAt(0).toUpperCase() +
                                              field.slice(1)}
                                    </label>
                                    <input
                                        className="border rounded-md p-2 outline-none"
                                        onChange={(e) => {
                                            setFormValue((prev) => {
                                                return {
                                                    ...prev,
                                                    [e.target.name]:
                                                        e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </form>
                </div>
            </div>
            <div className="h-screen bg-gray-950 grid grid-cols-2 p-4 space-x-4 col-span-4">
                <div className="border p-4 rounded-xl space-y-4">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold text-white">
                            Todos:
                        </h1>
                        <div className="flex space-x-8 items-center">
                            {buttonFunctions.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex space-x-2 items-center"
                                >
                                    <div className={`w-2 h-2 ${value.color}`} />
                                    <p>{value.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-md p-2 space-y-2">
                        {dummyTodoItems.map(
                            (value, index) =>
                                !value.completed && (
                                    <div
                                        key={value.id}
                                        className="flex bg-white/10 p-4 rounded-sm justify-between"
                                    >
                                        <div className="flex space-x-2">
                                            <h1>Task {index + 1}:</h1>
                                            <h1 key={value.id}>{value.task}</h1>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            {buttonFunctions.map((value, i) => (
                                                <div
                                                    key={value.name}
                                                    className={`h-4 aspect-square rounded-sm hover:scale-105 transition-all cursor-pointer ${value.color}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
                <div className="border p-4 rounded-xl space-y-4">
                    <h1 className="text-2xl font-bold text-white">
                        Completed Recently:
                    </h1>
                    <div className="border rounded-md p-2">
                        {dummyTodoItems.map(
                            (value) =>
                                value.completed && (
                                    <h1 key={value.id}>{value.task}</h1>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
