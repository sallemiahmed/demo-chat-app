import Link from "next/link";
import { MessageCircle, Users, Zap, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ChatFlow</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition">Log in</Link>
              <Link href="/register" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">Sign up</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Team Communication
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Made Simple.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The modern messaging platform for teams. Channels, direct messages, threads, and more — all in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/register" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-lg">Get Started Free</Link>
            <Link href="/login" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold text-lg">Log in</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Channels</h3>
            <p className="text-gray-600">Organize conversations by topic, team, or project with dedicated channels.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Messages</h3>
            <p className="text-gray-600">Private one-on-one conversations with any team member.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time</h3>
            <p className="text-gray-600">Instant message delivery with real-time typing indicators and presence.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600">End-to-end encryption for private channels and direct messages.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to connect your team?</h2>
          <p className="text-indigo-100 text-lg mb-8">Start chatting in seconds. No credit card required.</p>
          <Link href="/login" className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">Try Demo Now →</Link>
        </div>
      </div>

      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-indigo-600" />
              <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ChatFlow</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 ChatFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
