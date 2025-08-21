// src/components/ComingSoon.jsx

'use client'; 

import { useRouter } from 'next/navigation';

const ComingSoon = ({
  title = "Coming Soon",
  message = "We're working hard to bring this feature to you soon.",
  showBack = true,
}) => {
  const router = useRouter(); 

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 bg-gradient-to-r from-green-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
     
      <div className="flex flex-col items-center bg-white/80 dark:bg-gray-800/80 p-10 rounded-2xl shadow-xl backdrop-blur-md">

        <h1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-4">
          🚧 {title}
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
          {message}
        </p>

        {showBack && (
          <button
            onClick={() => router.back()} 
            className="mt-6 inline-flex items-center px-5 py-2.5 text-white bg-primary rounded-full shadow-md transition duration-200 hover:bg-opacity-90"
          >
            ⬅️ Back
          </button>
        )}

        <div className="mt-6 animate-bounce text-2xl text-indigo-500">⏳</div>
      </div>
    </div>
  );
};

export default ComingSoon;