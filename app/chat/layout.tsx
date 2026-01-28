import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getDemoChannels, getDMUsers } from "@/lib/demo-data";
import ChatSidebar from "@/components/ChatSidebar";

export default async function ChatLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const channels = getDemoChannels();
  const dmUsers = getDMUsers();

  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar
        channels={channels}
        dmUsers={dmUsers}
        currentUser={{
          name: session.user?.name,
          image: session.user?.image,
          email: session.user?.email,
        }}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
