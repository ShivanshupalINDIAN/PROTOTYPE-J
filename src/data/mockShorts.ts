import type { Short } from '../types';

export const MOCK_SHORTS: Short[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'activist123',
      fullName: 'Social Activist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64',
      followers: 10000,
      following: 500,
      isVerified: true,
      socialCreditScore: 88,
      tokens: 800,
      protestsParticipated: 15
    },
    videoUrl: '/mock-video.mp4',
    description: 'Quick update from today\'s community meeting #LocalGov',
    likes: 1500,
    comments: 89,
    views: 25000,
    timestamp: Date.now(),
    categories: ['governance', 'social-impact']
  }
];