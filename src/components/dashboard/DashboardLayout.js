"use client";

import { useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Image from 'next/image';
import WebLogo from '../shared/WebLogo';
import {
    HiMenu,
    HiViewGrid,
    HiPlusCircle,
    HiShoppingBag,
    HiUsers,
    HiLogout
} from 'react-icons/hi';

export default function DashboardLayout({ children }) {
    const { data: session, status } = useSession(); // Get the status
    const router = useRouter();
    const user = session?.user;

    // --- Authentication Check ---
    useEffect(() => {
        // If the session is not loading and the user is not authenticated, redirect
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    // Show a loading screen while the session is being verified
    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    
    // If authenticated, render the dashboard
    if (status === "authenticated") {
        const navLinks = [
            { href: "/dashboard/overview", label: "Dashboard", icon: <HiViewGrid /> },
            { href: "/dashboard/add-product", label: "Add Product", icon: <HiPlusCircle /> },
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
                        <div className="px-4 mb-4">
                            <WebLogo />
                        </div>
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
                        <div className="mt-auto p-4 border-t border-base-300">
                            {user && (
                                <div>
                                    <Link href="/profile" className="flex items-center gap-4 p-2 rounded-lg hover:bg-base-300">
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
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => signOut({ callbackUrl: '/' })}
                                        className="btn btn-error w-full text-white mt-4"
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

    // Return null while redirecting
    return null;
}