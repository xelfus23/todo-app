import Image from "next/image";
import { useState } from "react";

export default function SideBar() {
    const [user, setUser] = useState({
        name: "Patrick John Medenilla",
        email: "patrick@email.com",
        image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    });

    const navItem = [
        {
            label: "Important",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-secondary stroke-secondary"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="col-span-1 p-4 bg-secondary/30">
            <div className="h-full">
                <div className="flex space-x-4 p-4">
                    <div className="h-12 aspect-square relative">
                        <Image
                            src={user.image}
                            fill
                            alt="profile picture"
                            className="rounded-full border-3 border-primary"
                        />
                    </div>

                    <div>
                        <h1 className="text-md">{user.name}</h1>
                        <h1 className="text-sm text-text/80">{user.email}</h1>
                    </div>

                    <div>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                />
                                <path d="M9 3v18" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex mb-4 space-x-2 items-center">
                        <input
                            type="search"
                            className="w-full outline-secondary/20 border rounded-md border-text p-2 text-sm"
                            placeholder="Search..."
                        />
                    </div>
                    <div className=" bg-primary/30 flex space-x-2 items-center px-4 rounded-xl hover:bg-primary/10 py-4 cursor-pointer">
                        <button className="h-8 text-center bg-primary aspect-square rounded-full text-2xl text-white">
                            +
                        </button>
                        <p className="text-text font-bold">Add Task</p>
                    </div>
                    <div className="h-[1] w-full bg-secondary my-2" />
                    {navItem.map((value) => (
                        <div className="flex items-center px-4 rounded-md hover:bg-primary/10 py-2 cursor-pointer">
                            <button className="text-yellow-100  h-8 aspect-square rounded-full text-2xl">
                                {value.icon}
                            </button>
                            <p className="text-text text-sm font-bold">
                                {value.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
