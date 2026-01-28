"use client";

import { useState } from "react";
import { Send, Plus, Smile } from "lucide-react";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage("");
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <button type="button" className="p-2 text-gray-500 hover:text-gray-700 transition rounded-lg hover:bg-gray-100">
          <Plus className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button type="button" className="p-2 text-gray-500 hover:text-gray-700 transition rounded-lg hover:bg-gray-100">
          <Smile className="w-5 h-5" />
        </button>
        <button type="submit" disabled={!message.trim()} className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
