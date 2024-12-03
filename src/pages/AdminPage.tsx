import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { CarouselManager } from '../components/admin/CarouselManager';
import { ContentManager } from '../components/admin/ContentManager';
import { LogOut, MessageSquare, Image, Package, Activity } from 'lucide-react';

export const AdminPage = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('messages');
  const [messages] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Interested in personal training sessions',
      timestamp: new Date(),
    },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(credentials.username, credentials.password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full bg-brand-gray p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-white mb-2">Username</label>
              <input
                type="text"
                id="username"
                className="input-field"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="input-field"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'messages', label: 'Mensagens', icon: MessageSquare },
    { id: 'carousel', label: 'Carousel', icon: Image },
    { id: 'content', label: 'Conteúdo', icon: Package },
    { id: 'activities', label: 'Atividades', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Painel Administrativo</h2>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-brand-yellow text-brand-black'
                  : 'bg-brand-gray text-white hover:bg-brand-light-gray'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'messages' && (
            <div className="bg-brand-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6">Mensagens Recebidas</h3>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="bg-brand-black p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-white">{message.name}</h4>
                        <p className="text-gray-400">{message.email}</p>
                      </div>
                      <span className="text-sm text-gray-400">
                        {message.timestamp.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-white">{message.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'carousel' && <CarouselManager />}
          {activeTab === 'content' && <ContentManager />}
        </div>
      </div>
    </div>
  );
};