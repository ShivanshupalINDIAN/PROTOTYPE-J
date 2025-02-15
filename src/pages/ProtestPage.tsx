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
    description: 'Join us in our peaceful protest for digital privacy rights and data protection. Together we can make a difference!',
    location: 'New Delhi, India',
    date: '2024-04-15',
    participants: 1200,
    status: 'upcoming' as const,
    videoUrl: '/mock-protest-1.mp4',
    likes: 2500,
    comments: 342,
    dailyUpdates: [
      {
        date: '2024-03-20',
        content: 'Permit applications submitted. Planning committee formed.'
      },
      {
        date: '2024-03-19',
        content: 'Initial route planning completed. Starting volunteer registration.'
      }
    ]
  },
  {
    id: '2',
    title: 'Clean Governance Rally',
    description: 'Standing together for transparency in digital governance. This protest aims to highlight the importance of accountability.',
    location: 'Mumbai, India',
    date: '2024-04-20',
    participants: 800,
    status: 'active' as const,
    videoUrl: '/mock-protest-2.mp4',
    likes: 1800,
    comments: 256,
    dailyUpdates: [
      {
        date: '2024-03-20',
        content: 'Second planning meeting completed. Route confirmed.'
      },
      {
        date: '2024-03-19',
        content: 'First batch of volunteers onboarded.'
      }
    ]
  }
];

export function ProtestPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  
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
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          Organize Protest
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-800">
                <th className="pb-3 px-4 text-white">Name</th>
                <th className="pb-3 px-4 text-white">Full Name</th>
                <th className="pb-3 px-4 text-white">Associated With</th>
                <th className="pb-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrgs.map((org) => (
                <tr 
                  key={org.id}
                  className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-white">{org.name}</td>
                  <td className="py-4 px-4 text-white">{org.fullName}</td>
                  <td className="py-4 px-4 text-white">{org.association}</td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => {
                        setSelectedOrg(org.id);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Join Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Protests Section */}
      {selectedOrg && (
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white">Selected Organization</h2>
          <p className="text-gray-400">You have selected: {YOUTH_ORGANIZATIONS.find(org => org.id === selectedOrg)?.fullName}</p>
        </div>
      )}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Active Protests</h2>
        {MOCK_PROTESTS.map((protest) => (
          <ProtestCard key={protest.id} protest={protest} />
        ))}
      </div>
    </div>
  );
}
