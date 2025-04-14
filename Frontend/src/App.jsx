import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import React from "react";

function App() {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState(`🚀 Welcome to AI Code Reviewer! 👋
Paste your code in the editor on the left and click "Review Code" to get started.
I'm here to help you write cleaner, faster, and more secure code. 🧠💻

I can assist you with:

🔍 Code Quality Analysis – Identify code smells and structure issues

✅ Best Practices Suggestions – Follow modern and proven development standards

🐞 Potential Bug Detection – Catch logic errors and pitfalls early

⚡ Performance Improvements – Optimize code for speed and efficiency

🔐 Security Considerations – Spot vulnerabilities and suggest safe coding habits

🧼 Code Readability & Clean-up – Improve formatting and naming conventions

🧪 Testability Enhancements – Help write code that’s easy to test

🔄 Refactoring Guidance – Restructure code without changing its behavior`);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data.response);
    } catch (error) {
      setReview("### Error occurred while reviewing code 😢\nPlease try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-500">AI Code Reviewer</h1>
        <p className="text-gray-400 mt-2">Get instant feedback on your code</p>
      </header>
      
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Code Input</h2>
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden h-[550px] flex flex-col">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={20}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                backgroundColor: 'transparent',
                flexGrow: 1,
                overflow: 'auto'
              }}
              className="w-full"
              placeholder="Please enter your code here..."
            />
          </div>
          <button
            onClick={reviewCode}
            disabled={isLoading}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 
              transition-colors duration-200 rounded-lg font-semibold 
              shadow-lg hover:shadow-xl disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Reviewing..." : "Review Code"}
          </button>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">AI Review</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl prose prose-invert max-w-none h-[550px] overflow-auto">
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          </div>
        </div>
      </main>
    </div>
    
    </>
  );
}

export default App;
