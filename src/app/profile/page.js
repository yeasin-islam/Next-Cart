"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUser, FaShoppingBag, FaCog } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Handle loading and unauthenticated states
  if (status === "loading") {
    return <p className="text-center p-8">Loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const user = session.user;
  // Example join date
  const joinDate = new Date().toLocaleDateString("en-US", {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- Left Sidebar --- */}
          <aside className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl p-6 text-center">
              <div className="avatar online mx-auto">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={user.image || "/assets/avatars/default.png"}
                    alt={user.name}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
              <p className="text-base-content/70">{user.email}</p>
              {/* <p className="text-sm text-base-content/50 mt-2">Joined on {joinDate}</p> */}
              <p><span className="badge badge-success mt-4">Active</span></p>
            </div>
            
            {/* Sidebar Navigation */}
            <ul className="menu bg-base-100 w-full rounded-box shadow-xl mt-6">
              <li className="menu-title"><span>Dashboard</span></li>
              <li className="bordered">
                <a><FaUser /> My Profile</a>
              </li>
              <li>
                <a><FaShoppingBag /> Order History</a>
              </li>
              <li>
                <a><FaCog /> Settings</a>
              </li>
            </ul>
          </aside>

          {/* --- Right Content Area --- */}
          <main className="lg:col-span-3">
            <div className="card bg-base-100 shadow-xl p-8">
              <h1 className="text-3xl font-bold mb-6">Account Overview</h1>
              
              {/* Stats Section */}
              <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                <div className="stat">
                  <div className="stat-figure text-primary">
                    <FaShoppingBag className="text-3xl" />
                  </div>
                  <div className="stat-title">Total Orders</div>
                  <div className="stat-value">12</div>
                  <div className="stat-desc">2 new orders this month</div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div className="stat-title">Wishlist Items</div>
                  <div className="stat-value">5</div>
                  <div className="stat-desc">↗︎ 1 item added yesterday</div>
                </div>
                
                <div className="stat">
                  <div className="stat-figure text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                   <div className="stat-title">Reviews Written</div>
                  <div className="stat-value">2</div>
                </div>
              </div>

              {/* User Details Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Your Information</h2>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <tbody>
                      <tr>
                        <th className="w-1/3">Full Name</th>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <th>Email Address</th>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <th>Account Status</th>
                        <td><span className="badge badge-success">Active</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="btn btn-primary mt-6">Edit Profile</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}