"use client";

import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Morning Reflection</h1>
        <p className="text-lg text-gray-600 mt-2">
          Start your day with clarity, gratitude, and purpose. Reflect on what truly matters.
        </p>
      </header>

      <main className="text-center">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600 transition mb-4"
          onClick={() => alert("Start Reflecting!")}
        >
          <Link href="/prompts">Start Reflection</Link>
        </button>
        <p className="text-gray-500">
          ✨ Discover daily prompts, track your gratitude, and unlock mindful growth.
        </p>
      </main>
    </div>
  );
};

export default Home;