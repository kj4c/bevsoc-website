'use client';

import { useState, useEffect } from 'react';
import Sparkles from '@/components/Sparkles';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  category: 'social' | 'workshop' | 'tasting' | 'other';
}

const emptyEvent: Omit<Event, 'id'> = {
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',
  image: '',
  category: 'other',
};

export default function AdminPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<Omit<Event, 'id'>>(emptyEvent);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple password protection (you should use proper auth in production!)
  const ADMIN_PASSWORD = 'bevsoc2025';

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch {
      setMessage({ type: 'error', text: 'Failed to load events' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Incorrect password!' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      if (editingEvent) {
        // Update existing event
        const res = await fetch('/api/events', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editingEvent.id }),
        });
        
        if (!res.ok) throw new Error('Failed to update');
        
        setMessage({ type: 'success', text: 'Event updated! ✨' });
      } else {
        // Create new event
        const res = await fetch('/api/events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        
        if (!res.ok) throw new Error('Failed to create');
        
        setMessage({ type: 'success', text: 'Event created! 🎉' });
      }

      // Reset form and refresh events
      setFormData(emptyEvent);
      setEditingEvent(null);
      fetchEvents();
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong!' });
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      image: event.image || '',
      category: event.category,
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const res = await fetch(`/api/events?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) throw new Error('Failed to delete');
      
      setMessage({ type: 'success', text: 'Event deleted!' });
      fetchEvents();
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete event!' });
    }
  };

  const handleCancel = () => {
    setFormData(emptyEvent);
    setEditingEvent(null);
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--primary)] flex items-center justify-center p-4">
        <div className="pixel-window p-8 max-w-md w-full">
          <h1 className="font-bubbly-title text-lg text-[var(--accent)] text-center mb-6">
            🔒 Admin Login
          </h1>
          
          {message && (
            <div className={`mb-4 p-3 font-pixel text-center ${
              message.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="font-pixel text-lg text-[var(--foreground)] block mb-2">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none focus:border-[var(--accent-dark)]"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" className="pixel-btn w-full">
              Enter ✨
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--primary)]">
      {/* Header */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[var(--pink-light)] to-[var(--primary)]">
        <Sparkles />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="pixel-window p-6">
            <h1 className="font-bubbly-title text-xl text-[var(--accent)] mb-2">
              Admin Panel
            </h1>
            <p className="font-pixel text-lg text-[var(--foreground)]">
              ✨ Manage your events here! ✨
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 font-pixel text-lg text-center pixel-window ${
            message.type === 'error' ? 'bg-red-50 border-red-400' : 'bg-green-50 border-green-400'
          }`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Form */}
          <div className="pixel-window p-6">
            <h2 className="font-bubbly-title text-sm text-[var(--accent)] mb-6">
              {editingEvent ? '✏️ Edit Event' : '➕ Add New Event'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-pixel text-lg text-[var(--foreground)] block mb-1">
                  Title:
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-pixel text-lg text-[var(--foreground)] block mb-1">
                    Date:
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="font-pixel text-lg text-[var(--foreground)] block mb-1">
                    Time:
                  </label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="e.g., 7:00 PM"
                    className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-pixel text-lg text-[var(--foreground)] block mb-1">
                  Location:
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-pixel text-lg text-[var(--foreground)] block mb-1">
                  Category:
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as Event['category'] })}
                  className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none"
                >
                  <option value="social">🎉 Social</option>
                  <option value="workshop">📚 Workshop</option>
                  <option value="tasting">🍷 Tasting</option>
                  <option value="other">✨ Other</option>
                </select>
              </div>

              <div>
                <label className="font-pixel text-lg text-[var(--foreground)] block mb-1">
                  Description:
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full p-3 border-4 border-[var(--accent)] bg-[var(--cream)] font-pixel text-lg focus:outline-none resize-none"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="pixel-btn flex-1">
                  {editingEvent ? 'Update ✨' : 'Create 🎉'}
                </button>
                {editingEvent && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="pixel-btn bg-[var(--cream)] text-[var(--accent)] flex-1"
                    style={{ 
                      boxShadow: '4px 4px 0 var(--accent), inset -2px -2px 0 var(--pink), inset 2px 2px 0 white'
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Events List */}
          <div className="pixel-window p-6">
            <h2 className="font-bubbly-title text-sm text-[var(--accent)] mb-6">
              📋 All Events
            </h2>

            {isLoading ? (
              <p className="font-pixel text-lg text-[var(--foreground)] text-center py-8">
                Loading... ⏳
              </p>
            ) : events.length === 0 ? (
              <p className="font-pixel text-lg text-[var(--foreground)] text-center py-8">
                No events yet! Add one above~ 💕
              </p>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 bg-[var(--cream)] border-4 border-[var(--accent)]"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bubbly-title text-lg text-[var(--accent)] font-bold">
                          {event.title}
                        </h3>
                        <p className="font-pixel text-sm text-[var(--foreground)]">
                          📅 {event.date} @ {event.time}
                        </p>
                        <p className="font-pixel text-sm text-[var(--foreground)]">
                          📍 {event.location}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(event)}
                          className="px-3 py-1 bg-[var(--accent)] text-white font-pixel text-sm border-2 border-[var(--accent-dark)] hover:bg-[var(--accent-light)]"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="px-3 py-1 bg-red-500 text-white font-pixel text-sm border-2 border-red-700 hover:bg-red-600"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

