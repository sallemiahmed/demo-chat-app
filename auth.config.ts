import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getDemoUserByEmail } from "./lib/demo-data";

export default {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const email = credentials.email as string;
        const password = credentials.password as string;
        const demoUser = getDemoUserByEmail(email);
        if (demoUser && password === demoUser.password) {
          return { id: demoUser.id, email: demoUser.email, name: demoUser.name, image: demoUser.image };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
