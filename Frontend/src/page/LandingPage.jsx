import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-gray-800 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Welcome to AI Code Reviewer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Instantly review your code for quality, performance, and best practices. Built with ❤️ using AI.
        </p>
        <Link to="/review">
          <button className="text-lg px-6 py-3 rounded-2xl 
          cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all shadow-lg">
            🚀 Get Started
          </button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 text-sm text-gray-400"
      >
        Made with Aceternity UI ✨
      </motion.div>
    </main>
  );
}
