'use client';
import { useState } from "react";
import WebLogo from "./shared/WebLogo";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
    const { data: session, status } = useSession();
    const user = session?.user;
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/dashboard/overview", label: "Dashboard" },
        { href: "/about", label: "About Us" },
    ];

    return (
        <div className="bg-base-300 w-full sticky top-0 z-50 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-3 px-4">
                    <WebLogo />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ul className="flex space-x-4">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* User Profile Icon & Auth Logic (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <AuthIcon status={status} user={user} />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <AuthIcon status={status} user={user} /> {/* Also show icon on mobile */}
                        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
                            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 flex flex-col items-center gap-4">
                        <ul className="flex flex-col items-center space-y-2 w-full">
                            {navLinks.map(link => (
                                <li key={link.href} className="w-full text-center">
                                    <Link href={link.href} className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

// UPDATE: This component now handles all auth states with a single icon.
function AuthIcon({ status, user }) {
    if (status === "loading") {
        return <span className="loading loading-spinner loading-sm"></span>;
    }

    if (user) {
        // User is logged in: Show dropdown menu
        return (
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                            width={32}
                            height={32}
                            src={user.image}
                            alt={user.name || 'profile'} />
                    </div>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >

                    <li>
                        <Link
                            href="/profile"
                            className="hover:text-primary block py-2 p-2 font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            {user.name || "Profile"}
                        </Link>
                    </li>
                    <div className="divider my-0"></div>
                    <li>
                        <button onClick={() => signOut()} className="w-full text-left p-2 hover:bg-base-200 rounded">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        );
    }

    // User is logged out: Show icon that links to login page
    return (
        <Link href="/login">
            <div className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                    <CgProfile className="h-8 w-8" />
                </div>
            </div>
        </Link>
    );
}