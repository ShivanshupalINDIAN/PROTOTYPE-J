import React, { useState } from 'react';
import { Search, Plus, Globe, Users } from 'lucide-react';
import { RoomItem } from './RoomItem';
import { CreateRoomModal } from './CreateRoomModal';
import { MOCK_ROOMS } from '../../data/mockRooms';

export function RoomList() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'native' | 'global'>('native');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRooms = MOCK_ROOMS
    .filter(room => room.type === activeTab)
    .filter(room => 
      room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Rooms</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab('native')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'native' 
                ? 'bg-gray-200 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            Native
          </button>
          <button
            onClick={() => setActiveTab('global')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'global' 
                ? 'bg-gray-200 text-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Globe className="h-4 w-4 mr-2" />
            Global
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search rooms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 space-y-2">
          {filteredRooms.map(room => (
            <RoomItem key={room.id} room={room} />
          ))}
        </div>
      </div>

      {showCreateModal && (
        <CreateRoomModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}