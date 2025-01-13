"use client";

import React, { useState, useEffect } from "react";

const promptsList = [
  "What are you grateful for today?",
  "What is one thing you want to focus on?",
  "How can you make today better than yesterday?",
  "What is holding you back today?",
  "What are you excited about?",
];

const PromptsPage: React.FC = () => {
  const [dailyPrompts, setDailyPrompts] = useState<string[]>([]);
  const [responses, setResponses] = useState<string[]>([]);

  useEffect(() => {
    // Generate new prompts or load existing ones
    const storedPrompts = localStorage.getItem("dailyPrompts");
    const storedDate = localStorage.getItem("reflectionDate");
    const today = new Date().toISOString().split("T")[0];

    if (storedDate === today && storedPrompts) {
      setDailyPrompts(JSON.parse(storedPrompts));
    } else {
      const newPrompts = promptsList.sort(() => 0.5 - Math.random()).slice(0, 3);
      setDailyPrompts(newPrompts);
      localStorage.setItem("dailyPrompts", JSON.stringify(newPrompts));
      localStorage.setItem("reflectionDate", today);
    }
  }, []);

  const handleInputChange = (index: number, value: string) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
    localStorage.setItem("responses", JSON.stringify(updatedResponses));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Today's Reflection</h1>
      <div className="w-full max-w-md">
        {dailyPrompts.map((prompt, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg text-gray-700 mb-2">{prompt}</p>
            <input
              type="text"
              value={responses[index] || ""}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Write your reflection here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        ))}
      </div>
      <p className="text-gray-500 mt-6">Your reflections are saved automatically.</p>
    </div>
  );
};

export default PromptsPage;