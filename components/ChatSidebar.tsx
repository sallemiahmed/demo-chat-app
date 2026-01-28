"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Hash, Lock, MessageCircle, Plus, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface ChatSidebarProps {
  channels: Array<{ id: string; name: string; isPrivate: boolean }>;
  dmUsers: Array<{ id: string; name: string | null; image: string | null; status: string }>;
  currentUser: { name?: string | null; image?: string | null; email?: string | null };
}

export default function ChatSidebar({ channels, dmUsers, currentUser }: ChatSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-screen">
      {/* Workspace Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-indigo-400" />
          <h1 className="font-bold text-lg">ChatFlow</h1>
        </div>
      </div>

      {/* Channels */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Channels</span>
          <button className="text-gray-400 hover:text-white transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-0.5 px-2">
          {channels.map((channel) => {
            const isActive = pathname === `/chat/channel/${channel.id}`;
            return (
              <Link
                key={channel.id}
                href={`/chat/channel/${channel.id}`}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition ${
                  isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {channel.isPrivate ? <Lock className="w-4 h-4 flex-shrink-0" /> : <Hash className="w-4 h-4 flex-shrink-0" />}
                <span className="truncate">{channel.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Direct Messages */}
        <div className="px-4 mt-6 mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Direct Messages</span>
          <button className="text-gray-400 hover:text-white transition">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-0.5 px-2">
          {dmUsers.map((user) => {
            const isActive = pathname === `/chat/dm/${user.id}`;
            const statusColor = user.status === "online" ? "bg-green-500" : user.status === "away" ? "bg-yellow-500" : "bg-gray-500";
            return (
              <Link
                key={user.id}
                href={`/chat/dm/${user.id}`}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition ${
                  isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <Image
                    src={user.image || "/images/avatars/demo.png"}
                    alt={user.name || "User"}
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                  <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-gray-900 ${statusColor}`}></div>
                </div>
                <span className="truncate">{user.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* User Profile Bar */}
      <div className="p-3 border-t border-gray-700 flex items-center gap-3">
        <Image
          src={currentUser.image || "/images/avatars/demo.png"}
          alt={currentUser.name || "User"}
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{currentUser.name}</p>
          <p className="text-xs text-gray-400 truncate">{currentUser.email}</p>
        </div>
        <button onClick={() => signOut({ callbackUrl: "/" })} className="text-gray-400 hover:text-white transition" title="Sign out">
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
