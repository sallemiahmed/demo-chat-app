// Demo data for Chat Application

export const DEMO_USERS = [
  {
    id: "user-001",
    email: "demo@chatapp.com",
    password: "demo123",
    name: "Demo User",
    image: "/images/avatars/demo.png",
    status: "online",
    bio: "Product Manager at TechCorp",
  },
  {
    id: "user-002",
    email: "alex@chatapp.com",
    password: "alex123",
    name: "Alex Rivera",
    image: "/images/avatars/john.png",
    status: "online",
    bio: "Full-stack developer",
  },
  {
    id: "user-003",
    email: "sarah@chatapp.com",
    password: "sarah123",
    name: "Sarah Chen",
    image: "/images/avatars/sarah.png",
    status: "away",
    bio: "UI/UX Designer",
  },
  {
    id: "user-004",
    email: "mike@chatapp.com",
    password: "mike123",
    name: "Mike Johnson",
    image: "/images/avatars/mike.png",
    status: "offline",
    bio: "DevOps Engineer",
  },
  {
    id: "user-005",
    email: "emma@chatapp.com",
    password: "emma123",
    name: "Emma Wilson",
    image: "/images/avatars/emma.png",
    status: "online",
    bio: "Marketing Lead",
  },
];

export const DEMO_CHANNELS = [
  {
    id: "ch-001",
    name: "general",
    description: "General discussion for the whole team",
    isPrivate: false,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "ch-002",
    name: "engineering",
    description: "Engineering team discussions",
    isPrivate: false,
    createdAt: new Date("2024-01-02"),
  },
  {
    id: "ch-003",
    name: "design",
    description: "Design team and UI/UX feedback",
    isPrivate: false,
    createdAt: new Date("2024-01-03"),
  },
  {
    id: "ch-004",
    name: "random",
    description: "Non-work related fun stuff",
    isPrivate: false,
    createdAt: new Date("2024-01-04"),
  },
  {
    id: "ch-005",
    name: "announcements",
    description: "Important company announcements",
    isPrivate: false,
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "ch-006",
    name: "project-alpha",
    description: "Confidential project discussions",
    isPrivate: true,
    createdAt: new Date("2024-01-10"),
  },
];

export const DEMO_MESSAGES: Record<string, Array<{
  id: string;
  content: string;
  userId: string;
  channelId: string;
  createdAt: Date;
  reactions?: Array<{ emoji: string; count: number; users: string[] }>;
}>> = {
  "ch-001": [
    {
      id: "msg-001",
      content: "Good morning everyone! Hope you all had a great weekend.",
      userId: "user-001",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T09:00:00"),
      reactions: [{ emoji: "👋", count: 3, users: ["user-002", "user-003", "user-005"] }],
    },
    {
      id: "msg-002",
      content: "Morning! Ready to crush it this week 💪",
      userId: "user-002",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T09:05:00"),
    },
    {
      id: "msg-003",
      content: "Don't forget we have the all-hands meeting at 2pm today",
      userId: "user-005",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T09:15:00"),
      reactions: [{ emoji: "👍", count: 4, users: ["user-001", "user-002", "user-003", "user-004"] }],
    },
    {
      id: "msg-004",
      content: "Thanks for the reminder Emma! I'll prepare the quarterly report slides.",
      userId: "user-001",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T09:20:00"),
    },
    {
      id: "msg-005",
      content: "Has anyone tried the new coffee machine in the break room? It's amazing!",
      userId: "user-003",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T09:30:00"),
      reactions: [
        { emoji: "☕", count: 2, users: ["user-001", "user-004"] },
        { emoji: "😍", count: 1, users: ["user-005"] },
      ],
    },
    {
      id: "msg-006",
      content: "Quick update: the client meeting has been moved to 4pm",
      userId: "user-004",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T10:00:00"),
    },
    {
      id: "msg-007",
      content: "Lunch orders? I'm thinking Thai food today 🍜",
      userId: "user-002",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T11:30:00"),
      reactions: [{ emoji: "🙋", count: 3, users: ["user-001", "user-003", "user-005"] }],
    },
    {
      id: "msg-008",
      content: "Count me in! Pad Thai for me please",
      userId: "user-003",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T11:32:00"),
    },
    {
      id: "msg-009",
      content: "I'll take green curry, extra spicy 🌶️",
      userId: "user-001",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T11:35:00"),
    },
    {
      id: "msg-010",
      content: "Great standup today team! Here's a summary of the action items:\n\n• Alex: Finish API endpoints by Wednesday\n• Sarah: Complete design mockups for the dashboard\n• Mike: Deploy staging environment\n• Emma: Send out the newsletter draft\n\nLet's keep the momentum going!",
      userId: "user-001",
      channelId: "ch-001",
      createdAt: new Date("2024-01-25T14:00:00"),
      reactions: [{ emoji: "🚀", count: 4, users: ["user-002", "user-003", "user-004", "user-005"] }],
    },
  ],
  "ch-002": [
    {
      id: "msg-101",
      content: "Heads up: I just pushed a major refactor to the authentication module. Please pull the latest changes.",
      userId: "user-002",
      channelId: "ch-002",
      createdAt: new Date("2024-01-25T08:30:00"),
    },
    {
      id: "msg-102",
      content: "Nice work Alex! I'll review the PR after lunch. Any breaking changes?",
      userId: "user-004",
      channelId: "ch-002",
      createdAt: new Date("2024-01-25T08:45:00"),
    },
    {
      id: "msg-103",
      content: "No breaking changes! I maintained backwards compatibility. The new auth flow supports OAuth 2.0 and magic links.",
      userId: "user-002",
      channelId: "ch-002",
      createdAt: new Date("2024-01-25T08:50:00"),
      reactions: [{ emoji: "🎉", count: 2, users: ["user-001", "user-004"] }],
    },
    {
      id: "msg-104",
      content: "```typescript\n// New auth configuration\nconst authConfig = {\n  providers: ['oauth', 'magic-link', 'credentials'],\n  session: { strategy: 'jwt' },\n  callbacks: { ... }\n};\n```\nHere's a quick look at the new config structure",
      userId: "user-002",
      channelId: "ch-002",
      createdAt: new Date("2024-01-25T09:00:00"),
    },
    {
      id: "msg-105",
      content: "Question: should we add rate limiting to the new endpoints? I noticed we don't have that yet.",
      userId: "user-004",
      channelId: "ch-002",
      createdAt: new Date("2024-01-25T10:15:00"),
    },
    {
      id: "msg-106",
      content: "Good catch Mike! Let me create a ticket for that. We should definitely add rate limiting before going to production.",
      userId: "user-002",
      channelId: "ch-002",
      createdAt: new Date("2024-01-25T10:20:00"),
      reactions: [{ emoji: "👍", count: 1, users: ["user-004"] }],
    },
  ],
  "ch-003": [
    {
      id: "msg-201",
      content: "Hey team! I just uploaded the new landing page designs to Figma. Would love your feedback!",
      userId: "user-003",
      channelId: "ch-003",
      createdAt: new Date("2024-01-25T10:00:00"),
      reactions: [{ emoji: "👀", count: 3, users: ["user-001", "user-002", "user-005"] }],
    },
    {
      id: "msg-202",
      content: "These look incredible Sarah! Love the gradient on the hero section. One suggestion: can we make the CTA button a bit bigger?",
      userId: "user-005",
      channelId: "ch-003",
      createdAt: new Date("2024-01-25T10:30:00"),
    },
    {
      id: "msg-203",
      content: "Good idea! I'll increase the button size and add a subtle hover animation too.",
      userId: "user-003",
      channelId: "ch-003",
      createdAt: new Date("2024-01-25T10:35:00"),
    },
    {
      id: "msg-204",
      content: "Also thinking about adding a dark mode toggle. What does everyone think?",
      userId: "user-003",
      channelId: "ch-003",
      createdAt: new Date("2024-01-25T11:00:00"),
      reactions: [
        { emoji: "🌙", count: 2, users: ["user-002", "user-004"] },
        { emoji: "👍", count: 3, users: ["user-001", "user-002", "user-005"] },
      ],
    },
  ],
  "ch-004": [
    {
      id: "msg-301",
      content: "Who's up for a board game night this Friday? 🎲",
      userId: "user-003",
      channelId: "ch-004",
      createdAt: new Date("2024-01-25T12:00:00"),
      reactions: [{ emoji: "🙋", count: 4, users: ["user-001", "user-002", "user-004", "user-005"] }],
    },
    {
      id: "msg-302",
      content: "I'm in! I'll bring Catan and Ticket to Ride",
      userId: "user-002",
      channelId: "ch-004",
      createdAt: new Date("2024-01-25T12:10:00"),
    },
    {
      id: "msg-303",
      content: "Perfect! I'll bring snacks 🍕",
      userId: "user-005",
      channelId: "ch-004",
      createdAt: new Date("2024-01-25T12:15:00"),
      reactions: [{ emoji: "🍕", count: 3, users: ["user-001", "user-002", "user-003"] }],
    },
  ],
  "ch-005": [
    {
      id: "msg-401",
      content: "📢 **Important Update**\n\nWe're excited to announce that our company has secured Series B funding! This is a huge milestone for all of us. More details will be shared at the all-hands meeting on Friday.\n\nThank you all for your hard work and dedication! 🎉",
      userId: "user-001",
      channelId: "ch-005",
      createdAt: new Date("2024-01-25T08:00:00"),
      reactions: [
        { emoji: "🎉", count: 5, users: ["user-001", "user-002", "user-003", "user-004", "user-005"] },
        { emoji: "🚀", count: 3, users: ["user-002", "user-003", "user-005"] },
      ],
    },
    {
      id: "msg-402",
      content: "Amazing news! Congratulations to the whole team! 🥳",
      userId: "user-002",
      channelId: "ch-005",
      createdAt: new Date("2024-01-25T08:15:00"),
    },
  ],
  "ch-006": [
    {
      id: "msg-501",
      content: "Project Alpha kickoff: We need to finalize the architecture document by EOW. @Alex can you lead the backend design?",
      userId: "user-001",
      channelId: "ch-006",
      createdAt: new Date("2024-01-25T09:00:00"),
    },
    {
      id: "msg-502",
      content: "On it! I'll have a draft ready by Thursday for review.",
      userId: "user-002",
      channelId: "ch-006",
      createdAt: new Date("2024-01-25T09:10:00"),
      reactions: [{ emoji: "💪", count: 2, users: ["user-001", "user-004"] }],
    },
  ],
};

export const DEMO_DIRECT_MESSAGES: Record<string, Array<{
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
}>> = {
  "user-002": [
    { id: "dm-001", content: "Hey Alex! Do you have a minute to discuss the API design?", senderId: "user-001", receiverId: "user-002", createdAt: new Date("2024-01-25T10:00:00") },
    { id: "dm-002", content: "Sure! I'm free now. What's up?", senderId: "user-002", receiverId: "user-001", createdAt: new Date("2024-01-25T10:02:00") },
    { id: "dm-003", content: "I was thinking we should use GraphQL instead of REST for the new endpoints. Thoughts?", senderId: "user-001", receiverId: "user-002", createdAt: new Date("2024-01-25T10:05:00") },
    { id: "dm-004", content: "Interesting idea! GraphQL would definitely help with the nested data structures. Let me prototype something and share it with you.", senderId: "user-002", receiverId: "user-001", createdAt: new Date("2024-01-25T10:10:00") },
    { id: "dm-005", content: "Perfect, thanks! No rush, by end of day is fine.", senderId: "user-001", receiverId: "user-002", createdAt: new Date("2024-01-25T10:12:00") },
  ],
  "user-003": [
    { id: "dm-101", content: "Sarah, the new mockups look amazing!", senderId: "user-001", receiverId: "user-003", createdAt: new Date("2024-01-25T11:00:00") },
    { id: "dm-102", content: "Thanks! I spent the whole weekend on them 😊", senderId: "user-003", receiverId: "user-001", createdAt: new Date("2024-01-25T11:05:00") },
    { id: "dm-103", content: "Can you also create a mobile version? We need it for the investor presentation.", senderId: "user-001", receiverId: "user-003", createdAt: new Date("2024-01-25T11:10:00") },
    { id: "dm-104", content: "Of course! I'll have the mobile designs ready by tomorrow.", senderId: "user-003", receiverId: "user-001", createdAt: new Date("2024-01-25T11:12:00") },
  ],
  "user-004": [
    { id: "dm-201", content: "Mike, how's the deployment pipeline coming along?", senderId: "user-001", receiverId: "user-004", createdAt: new Date("2024-01-25T14:00:00") },
    { id: "dm-202", content: "Almost done! Just need to configure the monitoring alerts. Should be ready by tonight.", senderId: "user-004", receiverId: "user-001", createdAt: new Date("2024-01-25T14:15:00") },
    { id: "dm-203", content: "Great work! Let me know if you need any help with the configuration.", senderId: "user-001", receiverId: "user-004", createdAt: new Date("2024-01-25T14:20:00") },
  ],
  "user-005": [
    { id: "dm-301", content: "Hey Emma, did you send out the newsletter yet?", senderId: "user-001", receiverId: "user-005", createdAt: new Date("2024-01-25T15:00:00") },
    { id: "dm-302", content: "Just finished reviewing it. Sending it out in 30 minutes! Want to take a final look?", senderId: "user-005", receiverId: "user-001", createdAt: new Date("2024-01-25T15:05:00") },
    { id: "dm-303", content: "Yes please! Forward it to me and I'll give a quick review.", senderId: "user-001", receiverId: "user-005", createdAt: new Date("2024-01-25T15:08:00") },
  ],
};

// Helper functions
export function getDemoUserByEmail(email: string) {
  return DEMO_USERS.find((u) => u.email === email);
}

export function getDemoUser(id: string) {
  return DEMO_USERS.find((u) => u.id === id);
}

export function getDemoChannels() {
  return DEMO_CHANNELS;
}

export function getDemoChannel(id: string) {
  return DEMO_CHANNELS.find((c) => c.id === id);
}

export function getDemoMessages(channelId: string) {
  return (DEMO_MESSAGES[channelId] || []).sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
  );
}

export function getDemoDirectMessages(otherUserId: string) {
  return (DEMO_DIRECT_MESSAGES[otherUserId] || []).sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
  );
}

export function getDMUsers() {
  return DEMO_USERS.filter((u) => u.id !== "user-001");
}
