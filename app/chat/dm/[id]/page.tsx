import { getDemoUser, getDemoDirectMessages } from "@/lib/demo-data";
import Image from "next/image";
import { Phone, Video } from "lucide-react";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";

interface DMPageProps {
  params: Promise<{ id: string }>;
}

export default async function DMPage({ params }: DMPageProps) {
  const { id } = await params;
  const user = getDemoUser(id);
  const messages = getDemoDirectMessages(id);

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">User not found</p>
      </div>
    );
  }

  const statusColor = user.status === "online" ? "bg-green-500" : user.status === "away" ? "bg-yellow-500" : "bg-gray-500";
  const statusText = user.status === "online" ? "Online" : user.status === "away" ? "Away" : "Offline";

  return (
    <>
      {/* DM Header */}
      <div className="border-b bg-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={user.image || "/images/avatars/demo.png"}
              alt={user.name || "User"}
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusColor}`}></div>
          </div>
          <div>
            <h2 className="font-bold text-gray-900">{user.name}</h2>
            <p className="text-xs text-gray-500">{statusText}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-gray-700 transition p-2 rounded-lg hover:bg-gray-100" title="Audio call">
            <Phone className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-700 transition p-2 rounded-lg hover:bg-gray-100" title="Video call">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      {messages.length > 0 ? (
        <MessageList messages={messages} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Image
              src={user.image || "/images/avatars/demo.png"}
              alt={user.name || "User"}
              width={80}
              height={80}
              className="rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{user.bio}</p>
            <p className="text-sm text-gray-400">This is the beginning of your direct message history with {user.name}.</p>
          </div>
        </div>
      )}

      {/* Input */}
      <MessageInput />
    </>
  );
}
