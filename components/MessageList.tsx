"use client";

import Image from "next/image";
import { format } from "date-fns";
import { getDemoUser } from "@/lib/demo-data";

interface MessageListProps {
  messages: Array<{
    id: string;
    content: string;
    userId?: string;
    senderId?: string;
    createdAt: Date;
    reactions?: Array<{ emoji: string; count: number; users: string[] }>;
  }>;
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, index) => {
        const userId = msg.userId || msg.senderId || "";
        const user = getDemoUser(userId);
        const prevMsg = index > 0 ? messages[index - 1] : null;
        const prevUserId = prevMsg ? (prevMsg.userId || prevMsg.senderId) : null;
        const isSameUser = prevUserId === userId;
        const timeDiff = prevMsg ? msg.createdAt.getTime() - prevMsg.createdAt.getTime() : Infinity;
        const isGrouped = isSameUser && timeDiff < 5 * 60 * 1000;

        return (
          <div key={msg.id} className={`flex gap-3 hover:bg-gray-50 px-2 py-1 rounded-lg transition group ${isGrouped ? "" : "mt-4"}`}>
            {isGrouped ? (
              <div className="w-10 flex-shrink-0">
                <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  {format(msg.createdAt, "HH:mm")}
                </span>
              </div>
            ) : (
              <Image
                src={user?.image || "/images/avatars/demo.png"}
                alt={user?.name || "User"}
                width={40}
                height={40}
                className="rounded-lg object-cover flex-shrink-0 mt-1"
              />
            )}
            <div className="flex-1 min-w-0">
              {!isGrouped && (
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-gray-900 text-sm">{user?.name || "Unknown"}</span>
                  <span className="text-xs text-gray-500">{format(msg.createdAt, "h:mm a")}</span>
                </div>
              )}
              <div className="text-sm text-black whitespace-pre-wrap break-words">
                {msg.content.includes("```") ? (
                  <div>
                    {msg.content.split("```").map((part, i) =>
                      i % 2 === 1 ? (
                        <pre key={i} className="bg-gray-900 text-green-400 rounded-lg p-4 my-2 overflow-x-auto text-xs font-mono">{part.replace(/^[a-z]+\n/, "")}</pre>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </div>
                ) : msg.content.includes("**") ? (
                  <span dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                ) : (
                  msg.content
                )}
              </div>
              {/* Reactions */}
              {msg.reactions && msg.reactions.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {msg.reactions.map((reaction, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-1 px-2 py-0.5 bg-indigo-50 border border-indigo-200 rounded-full text-xs hover:bg-indigo-100 transition"
                    >
                      <span>{reaction.emoji}</span>
                      <span className="font-medium text-indigo-700">{reaction.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
