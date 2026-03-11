'use client';

import { Input , Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
    const searchParams = useSearchParams();
    return (
        <form action={actions.search}>
            <div className='flex items-center w-full border-green-400 rounded-lg gap-2 bg-gray-50'>
                <FiSearch className='text-gray-500' /> 
                <Input 
                    name="term" 
                    placeholder="Search..." 
                    defaultValue={searchParams.get('term') || ""} 
                    className='max-w-full outline-none bg-transparent text-xl'
                />
            </div>
        </form>
    );
}