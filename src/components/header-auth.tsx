"use client";

import { useEffect, useState } from "react";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export default function HeaderAuth() {
    const [phone, setPhone] = useState<string | null>(null);
    const [inputPhone, setInputPhone] = useState("");

    useEffect(() => {
        const savedPhone = localStorage.getItem("phone");
        if (savedPhone) setPhone(savedPhone);
    }, []);

    const login = () => {
        if (!inputPhone) return;
        localStorage.setItem("phone", inputPhone);
        setPhone(inputPhone);
    };

    const logout = () => {
        localStorage.removeItem("phone");
        setPhone(null);
        setInputPhone("");
    };

    if (phone) {
        return (
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Avatar
                        src="/avatar-icon.png"
                        className="cursor-pointer w-6 h-6"
                    />
                </PopoverTrigger>
                <PopoverContent>
                <div className="p-4 flex flex-col gap-2 bg-white">
                    <p className="text-sm text-gray-500">
                        {phone}
                    </p>
                    <Button size="sm" onClick={logout}>
                        Sign Out
                    </Button>
                </div>
                </PopoverContent>
            </Popover>
            );
        }
        return (
            <>
                <Popover placement="bottom">
                    <PopoverTrigger>
                        <Button className="bg-blue-400 text-white border rounded-t-lg font-semibold" variant="bordered">
                            Login/Register
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                        <div className="bg-white flex flex-col gap-3 p-4 w-64">
                            <input
                                placeholder="Enter a phone number..."
                                value={inputPhone}
                                onChange={(e) => setInputPhone(e.target.value)}
                            />

                            <Button onClick={login} isDisabled={inputPhone.length !== 10}>
                                Login/Register
                            </Button>

                        </div>
                    </PopoverContent>
                </Popover>
            </>
    );
}