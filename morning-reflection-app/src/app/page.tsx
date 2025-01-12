"use client"; 

import React from "react";

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Morning Reflection</h1>
        <p style={styles.subtitle}>
          Start your day with clarity, gratitude, and purpose. Reflect on what truly matters.
        </p>
      </header>

      <main style={styles.main}>
        <button style={styles.ctaButton} onClick={() => alert("Start Reflecting!")}>
          Start Reflection
        </button>
        <p style={styles.featurePreview}>
          ✨ Discover daily prompts, track your gratitude, and unlock mindful growth.
        </p>
      </main>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "3rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#666",
    marginTop: "10px",
  },
  main: {
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    marginBottom: "20px",
  },
  featurePreview: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default Home;