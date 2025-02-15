import type { Room } from '../types/room';

export const MOCK_ROOMS: Room[] = [
  {
    id: '1',
    name: 'Digital Rights Discussion',
    type: 'global',
    description: 'A space to discuss digital rights and privacy',
    participants: [
      {
        id: '1',
        username: 'alice',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64',
        isOnline: true
      }
    ],
    unreadCount: 3,
    createdAt: Date.now() - 1000 * 60 * 30
  },
  {
    id: '2',
    name: 'Tech Policy Group',
    type: 'global',
    description: 'Discussion about technology policies',
    participants: [
      {
        id: '2',
        username: 'bob',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64',
        isOnline: false
      }
    ],
    unreadCount: 0,
    createdAt: Date.now() - 1000 * 60 * 60
  }
];