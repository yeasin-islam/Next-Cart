"use client";

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import WebLogo from '../shared/WebLogo'; // Adjust path if needed
import {
    HiMenu,
    HiViewGrid,
    HiPlusCircle,
    HiShoppingBag,
    HiUsers,
    HiLogout
} from 'react-icons/hi';

// This is a client component because it uses hooks for session and state.
export default function DashboardLayout({ children }) {
    const { data: session } = useSession();
    const user = session?.user;

    const navLinks = [
        { href: "/dashboard/overview", label: "Dashboard", icon: <HiViewGrid /> },
        { href: "/dashboard/add-product", label: "Add Product", icon: <HiPlusCircle /> },
        // { href: "/dashboard/manage-products", label: "Manage Products", icon: <HiShoppingBag /> },
        // { href: "/dashboard/orders", label: "Orders", icon: <HiShoppingBag /> },
        // { href: "/dashboard/customers", label: "Customers", icon: <HiUsers /> },
    ];

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* --- Main Content Area --- */}
            <div className="drawer-content flex flex-col items-start justify-start">
                {/* Mobile Navbar */}
                <div className="lg:hidden navbar bg-base-100 sticky top-0 z-40">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                            <HiMenu className="h-6 w-6" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <Link href="/" className="">
                            <WebLogo />
                        </Link>
                    </div>
                </div>

                {/* Page Content */}
                <main className="w-full p-4 md:p-8">
                    {children}
                </main>
            </div>

            {/* --- Sidebar --- */}
            <aside className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-72 min-h-full bg-base-200 text-base-content flex flex-col">
                    {/* Sidebar Header */}
                    <div className="px-4 mb-4">
                        <WebLogo />
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex-grow">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <span className="text-lg mr-2">{link.icon}</span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* User Profile & Logout */}
                    <div className="mt-auto p-4 border-t border-base-300">
                        {user && (
                            <div>
                                <Link href="/profile" className="flex items-center mb-2">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <Image
                                                    src={user.image || "/assets/avatars/default.png"}
                                                    alt={user.name}
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold">{user.name}</p>
                                            <p className="text-sm text-base-content/70">{user.email}</p>
                                        </div>
                                    </div>
                                </Link>


                                <button
                                    onClick={() => signOut({ callbackUrl: '/' })}
                                    className="btn btn-error w-full text-sm flex items-center gap-1 mt-4 hover:bg-red-500 text-white"
                                >
                                    <HiLogout /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
}