// "use client";

// import { signIn } from "next-auth/react";

// export default function LoginPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl mb-4">Login</h1>
//       <button
//         onClick={() => signIn("google", { callbackUrl: "/" })}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Google icon
import WebLogo from "@/components/shared/WebLogo"; // Assuming you have this component

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="m-6 space-y-8 bg-white shadow-2xl rounded-2xl ">

        {/* --- Right Side (Login Form) --- */}
        <div className="flex flex-col justify-center p-8 md:p-14 ">
          <div className="mb-6">
            <WebLogo />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="font-light text-gray-600 mb-8">
            Sign in to continue to your NextCart dashboard.
          </p>

          {/* Google Sign-In Button */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="btn btn-outline w-full text-lg"
          >
            <FcGoogle className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>

          <div className="divider my-8">Trusted by creators</div>
          
          {/* Social Proof Avatars */}
          <div className="flex justify-center items-center space-x-2">
             <p className="text-sm text-gray-500">Join 10,000+ happy customers.</p>
             <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                    <div className="w-10">
                        <img src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-10">
                        <img src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-10">
                        <img src="https://i.pravatar.cc/150?img=3" alt="User 3" />
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className="w-10 bg-neutral text-neutral-content">
                        <span>+99</span>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}