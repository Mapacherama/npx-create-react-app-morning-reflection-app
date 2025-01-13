"use client";

import React, { useEffect, useState } from "react";

const PastReflectionsPage: React.FC = () => {
  const [reflections, setReflections] = useState<string[]>([]);

  // Load reflections from localStorage
  useEffect(() => {
    const storedReflections = localStorage.getItem("responses");
    if (storedReflections) {
      setReflections(JSON.parse(storedReflections));
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Past Reflections</h1>
      {reflections.length > 0 ? (
        <div className="w-full max-w-md">
          {reflections.map((reflection, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-lg bg-white shadow"
            >
              <h2 className="text-lg font-semibold text-gray-700">
                Reflection {index + 1}
              </h2>
              <p className="text-gray-600 mt-2">{reflection || "No reflection added."}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No reflections found.</p>
      )}
    </div>
  );
};

export default PastReflectionsPage;