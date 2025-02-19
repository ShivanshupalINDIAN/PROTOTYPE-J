import React, { useState } from 'react';
import { Search, Users, ExternalLink } from 'lucide-react';
import { ProtestCard } from '../components/protest/ProtestCard';

const YOUTH_ORGANIZATIONS = [
  { id: 'abvp', name: 'ABVP', fullName: 'Akhil Bharatiya Vidyarthi Parishad', association: 'Rashtriya Swayamsevak Sangh' },
  { id: 'ackhsa', name: 'ACKHSA', fullName: 'All Cachar Karimganj Hailakandi Students Association', association: 'Barak Democratic Front' },
  { id: 'aidso', name: 'AIDSO', fullName: 'All India Democratic Students Organisation', association: 'Socialist Unity Centre of India (Communist)' },
  { id: 'aimsf', name: 'AIMSF', fullName: 'All India Muslim Students Federation', association: 'All-India Muslim League' },
  { id: 'airsf', name: 'AIRSF', fullName: 'All India Revolutionary Students Federation', association: 'Communist Party of India (Maoist)' },
  { id: 'aisa', name: 'AISA', fullName: 'Ambedkar Students Association', association: 'Progressive Students Forum' },
  { id: 'aisf', name: 'AISF', fullName: "All India Students' Federation", association: 'Communist Party of India' },
  { id: 'asa', name: 'ASA', fullName: 'Ambedkar Students Association', association: 'Progressive Students Forum' },
  { id: 'bssf', name: 'BSSF', fullName: 'Bahujan Samaj Students Forum', association: 'Bahujan Samaj Party' },
  { id: 'bapsa', name: 'BAPSA', fullName: 'Birsa Ambedkar Phule Students Association', association: 'United Dalit Students Forum' }
] as const;

const MOCK_PROTESTS = [
  {
    id: '1',
    title: 'Digital Rights March',
    description: 'Join us in our peaceful protest for digital privacy rights and data protection.',
    location: 'New Delhi, India',
    date: '2024-04-15',
    participants: 1200,
    status: 'upcoming',
    videoUrl: '/mock-protest-1.mp4',
    likes: 2500,
    comments: 342
  },
  {
    id: '2',
    title: 'Clean Governance Rally',
    description: 'Standing together for transparency in digital governance.',
    location: 'Mumbai, India',
    date: '2024-04-20',
    participants: 800,
    status: 'active',
    videoUrl: '/mock-protest-2.mp4',
    likes: 1800,
    comments: 256
  }
];

export function ProtestPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [joinedOrgs, setJoinedOrgs] = useState<string[]>([]);
  const [joinedProtests, setJoinedProtests] = useState<string[]>([]);

  const handleJoinToggle = (orgId: string) => {
    setJoinedOrgs((prev) =>
      prev.includes(orgId) ? prev.filter((id) => id !== orgId) : [...prev, orgId]
    );
  };

  const handleProtestJoinToggle = (protestId: string) => {
    setJoinedProtests((prev) =>
      prev.includes(protestId) ? prev.filter((id) => id !== protestId) : [...prev, protestId]
    );
  };

  const filteredOrgs = YOUTH_ORGANIZATIONS.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Raise Your Voice</h1>
          <p className="text-black">Join and support digital rights movements</p>
        </div>
        <button className="bg-gray-300 border-6 border-black text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Organize Voices
        </button>
      </div>

      {/* Youth Organizations Section */}
      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
            <Users className="h-5 w-5" />
            Youth Activist Groups
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w- text-gray-600" />
            <input
              type="search"
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-600   focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b  border-gray-800">
                <th className="pb-3 px-4 text-white">Name</th>
                <th className="pb-3 px-4 text-white">Full Name</th>
                <th className="pb-3 px-4 text-white">Associated With</th>
                <th className="pb-3 px-4  text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrgs.map((org) => (
                <tr 
                  key={org.id}
                  className={`border-b  border-gray-800 hover:bg-gray-800/50 transition-colors ${
                    joinedOrgs.includes(org.id) ? 'bg-gray-700' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-medium text-white">{org.name}</td>
                  <td className="py-4 px-4 text-white">{org.fullName}</td>
                  <td className="py-4 px-4 text-white">{org.association}</td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleJoinToggle(org.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                        joinedOrgs.includes(org.id) 
                          ? 'bg-yellow-500 text-white font-bold' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {/* <ExternalLink className="h-4 w-4" /> */}
                      {joinedOrgs.includes(org.id) ? 'Joined' : 'Join Now'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Protests Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Active Voices</h2>
        {MOCK_PROTESTS.map((protest) => (
          <div
            key={protest.id}
            className={`p-4 rounded-lg transition-all ${
              joinedProtests.includes(protest.id) ? 'bg-gray-700 opacity-75' : 'bg-white'
            }`}
          >
            <ProtestCard protest={protest} />
            <button
              onClick={() => handleProtestJoinToggle(protest.id)}
              className={`mt-3 flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                joinedProtests.includes(protest.id) 
                  ? 'bg-green-500 text-white font-bold' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {joinedProtests.includes(protest.id) ? 'Joined' : 'Join Voice'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
