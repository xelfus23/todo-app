"use client";
import React, { useState } from "react";
import Form from "@/components/form";
import { useTodos } from "@/context/todoContext";
import { completeFunction } from "@/controller/complete";
import { deleteFunction } from "@/controller/delete";
import { editFunction } from "@/controller/edit";
import { handleSubmit } from "@/controller/submit";
import { formValueTypes } from "@/types/fieldTypes";
import { todoTypes } from "@/types/todoTypes";
import SideBar from "@/components/sideBar";

export default function Home() {
    const { todos, dispatch } = useTodos();

    const [formValue, setFormValue] = useState<formValueTypes>({
        task: "",
        category: "",
        dueDate: "",
        priority: "low",
    });

    const buttonFunctions = [
        {
            name: "Delete",
            color: "bg-red-400",
            function: (todo: todoTypes) => deleteFunction(todo, dispatch),
        },
        {
            name: "Edit",
            color: "bg-blue-400",
            function: (todo: todoTypes) => editFunction(todo, dispatch),
        },
        {
            name: "Complete",
            color: "bg-green-400",
            function: (todo: todoTypes) => completeFunction(todo, dispatch),
        },
    ];

    return (
        <div className="grid grid-cols-5 bg-background">
            <SideBar />

            <div className="relative grid grid-cols-2 p-4 space-x-4 col-span-4">
                <div className="p-4 rounded-md space-y-4">

                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold text-text">
                            Todos:
                        </h1>
                        <div className="flex space-x-8 items-center">
                            {buttonFunctions.map((btn, index) => (
                                <div
                                    key={index}
                                    className="flex space-x-2 items-center"
                                >
                                    <div className={`w-2 h-2 ${btn.color}`} />
                                    <p>{btn.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-2 h-220 border rounded-md">
                        <div className="space-y-2 overflow-y-auto max-h-full h-full">
                            {todos
                                .filter((todo) => !todo.completed)
                                .map((todo, index) => (
                                    <div
                                        key={todo.id}
                                        className="flex bg-white/10 p-4 rounded-sm justify-between"
                                    >
                                        <div className="flex space-x-2">
                                            <h1>Task {index + 1}:</h1>
                                            <h1>{todo.task}</h1>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            {buttonFunctions.map((btn) => (
                                                <button
                                                    key={btn.name}
                                                    onClick={() =>
                                                        btn.function(todo)
                                                    }
                                                    className={`h-4 aspect-square rounded-sm hover:scale-105 transition-all cursor-pointer ${btn.color}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Completed section */}

                <div className="p-4 rounded-md space-y-4">
                    <h1 className="text-2xl font-bold text-text">
                        Completed Recently:
                    </h1>

                    {/* Completed todos */}

                    <div className="p-2 h-220 border rounded-md">
                        <div className="space-y-2 overflow-y-auto max-h-full h-full">
                            {todos
                                .filter((todo) => todo.completed)
                                .map((todo, index) => (
                                    <div
                                        key={todo.id}
                                        className="flex bg-white/10 p-4 rounded-sm justify-between"
                                    >
                                        <div className="flex space-x-2">
                                            <h1>Task {index + 1}:</h1>
                                            <h1 className="">{todo.task}</h1>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
