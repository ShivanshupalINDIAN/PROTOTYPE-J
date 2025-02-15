import React from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

interface Protest {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  status: 'completed' | 'ongoing';
}

const MOCK_PROTESTS: Protest[] = [
  {
    id: '1',
    title: 'Digital Rights March',
    date: '2024-03-15',
    location: 'New Delhi',
    participants: 1200,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Tech Policy Reform Rally',
    date: '2024-03-20',
    location: 'Mumbai',
    participants: 800,
    status: 'ongoing'
  }
];

export function ProfileProtests() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4 text-white">Protest Participation</h2>
      {MOCK_PROTESTS.map((protest) => (
        <div key={protest.id} className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">{protest.title}</h3>
            <span className={`px-2 py-1 rounded-full text-sm ${
              protest.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
            }`}>
              {protest.status}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{protest.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{protest.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{protest.participants} joined</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
