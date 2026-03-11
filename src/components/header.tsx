'use client';

import Link from 'next/link';
import { 
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
} from '@nextui-org/react';
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import SearchInput from './searchinput';

export default function Header() {
    const [open, setOpen]  = useState<boolean>(false);

    return (
        <>
        <Navbar className="sticky top-0 bg-gray-200 z-50 py-2 shadow-sm px-3 min-w-screen">
            <NavbarContent justify="start">
                <button 
                    onClick={() => setOpen(true)}
                    className="text-xl"
                >
                    <FaHamburger />
                </button>
                <NavbarBrand>
                    <Link href='/' className='flex items-center'>
                        <img src='/image.png' alt='logo' width={90} />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem>
                    <SearchInput />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="gap-2">
                <NavbarItem className='text-xl text-center block mx-auto px-1 py-1 text-black hover:underline'>
                    <Link href='/'>
                    Login/Register
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
        <div className='px-4 py-2 border-b flex items-center gap-2 bg-white md:hidden'>
            <FiSearch className='text-gray-500' /> 
            <input 
                placeholder='Search...' 
                type="text"
                className='w-full outline-none text-sm'
            />
        </div>
        {open && (
            <div
                onClick={() => setOpen(true)}
                className='fixed inset-0 bg-transparent z-30'
            />
        )}
        <aside
            className={`fixed h-full w-40 bg-gray-200 text-black transform transition-transform duration-300 z-50
             ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <span className="font-semibold">Hey Welcome!</span>
            <button onClick={() => setOpen(false)}>
                <IoClose size={24} />
            </button>
            </div>
            <nav className="flex flex-col p-4 gap-2 text-sm">
                <Link href="/" onClick={() => setOpen(true)} className="p-2 hover:underline">
                    Home
                </Link>
                <Link href="/consumer/gift-cards" onClick={() => setOpen(true)} className="p-2 hover:underline">
                    Brands
                </Link>
                <Link href="/consumer/gift-cards/filter" onClick={() => setOpen(true)} className="p-2 hover:underline">
                    Categories
                </Link>
                <Link href="/" onClick={() => setOpen(true)} className="p-2 hover:underline">
                    Contact Us
                </Link>
            </nav>
        </aside>
        </>
    );
}


