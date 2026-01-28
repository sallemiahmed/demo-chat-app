import { getDemoChannel, getDemoMessages, DEMO_CHANNELS } from "@/lib/demo-data";
import { Hash, Lock, Users, Bell, Pin } from "lucide-react";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";

interface ChannelPageProps {
  params: Promise<{ id: string }>;
}

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { id } = await params;
  const channel = getDemoChannel(id);
  const messages = getDemoMessages(id);

  if (!channel) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Channel not found</p>
      </div>
    );
  }

  return (
    <>
      {/* Channel Header */}
      <div className="border-b bg-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {channel.isPrivate ? <Lock className="w-5 h-5 text-gray-600" /> : <Hash className="w-5 h-5 text-gray-600" />}
          <h2 className="font-bold text-gray-900 text-lg">{channel.name}</h2>
          {channel.description && (
            <>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-sm text-gray-500 truncate max-w-md">{channel.description}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-gray-700 transition" title="Members">
            <Users className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-700 transition" title="Pinned">
            <Pin className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-700 transition" title="Notifications">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <MessageList messages={messages} />

      {/* Input */}
      <MessageInput />
    </>
  );
}
