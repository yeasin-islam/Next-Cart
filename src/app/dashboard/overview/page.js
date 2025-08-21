"use client";

import { useSession } from "next-auth/react";
import Link from 'next/link';
import {
  HiOutlineShoppingBag,
  HiOutlineStar,
  HiOutlineHeart,
  HiOutlineUserCircle,
  HiPencilAlt,
  HiEye
} from "react-icons/hi";

// This is a client component to personalize the welcome message
export default function UserDashboard() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "User";

  // Static data for the design
  const stats = [
    {
      title: "My Orders",
      value: "12",
      desc: "2 currently processing",
      icon: <HiOutlineShoppingBag className="text-3xl text-primary" />,
    },
    {
      title: "My Reviews",
      value: "2",
      desc: "You're helping others!",
      icon: <HiOutlineStar className="text-3xl text-accent" />,
    },
    {
      title: "Wishlist Items",
      value: "5",
      desc: "Great choices saved",
      icon: <HiOutlineHeart className="text-3xl text-secondary" />,
    },
    {
      title: "Account Status",
      value: "Active",
      desc: "All systems go!",
      icon: <HiOutlineUserCircle className="text-3xl text-success" />,
    },
  ];

  const recentOrders = [
    { id: "ORD001", date: "Aug 21, 2025", total: "$120.50", status: "Shipped" },
    { id: "ORD002", date: "Aug 19, 2025", total: "$45.00", status: "Delivered" },
    { id: "ORD003", date: "Aug 15, 2025", total: "$89.99", status: "Processing" },
  ];

  return (
    <div>
      {/* --- Header --- */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Hello, {userName}!</h1>
        <p className="text-base-content/70">Welcome to your personal dashboard.</p>
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat bg-base-100 shadow-lg rounded-lg">
            <div className="stat-figure">{stat.icon}</div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value text-2xl">{stat.value}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* --- Recent Orders and Quick Links --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map(order => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.total}</td>
                        <td>
                          <span className={`badge 
                            ${order.status === 'Shipped' && 'badge-info'}
                            ${order.status === 'Processing' && 'badge-warning'}
                            ${order.status === 'Delivered' && 'badge-success'}
                          `}>
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-ghost btn-xs">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        {/* <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Quick Links</h2>
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/profile/orders">
                <button className="btn btn-ghost w-full justify-start">
                  <HiOutlineShoppingBag className="mr-2"/> Full Order History
                </button>
              </Link>
              <Link href="/profile/edit">
                <button className="btn btn-ghost w-full justify-start">
                  <HiPencilAlt className="mr-2"/> Edit Profile
                </button>
              </Link>
               <Link href="/profile/wishlist">
                <button className="btn btn-ghost w-full justify-start">
                  <HiEye className="mr-2"/> View Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}