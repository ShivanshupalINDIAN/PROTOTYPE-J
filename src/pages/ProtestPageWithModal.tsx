import React, { useState } from 'react';
import { OrganizeProtestModal } from '../components/protest/OrganizeProtestModal';
import { ProtestCard } from '../components/protest/ProtestCard';

export function ProtestPageWithModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Raise Your Voice</h1>
          <p className="text-gray-400">Join and support digital rights movements</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Organize Protest
        </button>
      </div>

      <ProtestCard protest={{
        id: '1',
        title: 'Digital Rights March',
        description: 'Join us in our peaceful protest for digital privacy rights and data protection.',
        location: 'New Delhi, India',
        date: '2024-04-15',
        participants: 1200,
        status: 'upcoming',
        videoUrl: '/mock-protest-1.mp4',
        likes: 2500,
        comments: 342,
        dailyUpdates: [
          { date: '2024-03-20', content: 'Permit applications submitted.' },
          { date: '2024-03-19', content: 'Initial route planning completed.' }
        ]
      }} />



      <OrganizeProtestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
