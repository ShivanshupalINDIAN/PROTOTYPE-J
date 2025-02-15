import type { Video } from '../types';

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Understanding Digital Democracy: A Comprehensive Guide',
    description: 'Learn about the fundamentals of digital democracy and its impact on modern governance.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1577017040065-650ee4d43339?w=1280',
    duration: '10:32',
    views: 15000,
    likes: 1200,
    comments: 89,
    timestamp: '2 hours ago',
    categories: ['digital-rights', 'governance'],
    user: {
      id: '1',
      username: 'DigiPub',
      fullName: 'Digital Publication',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64',
      followers: 15000,
      following: 200,
      isVerified: true,
      socialCreditScore: 95,
      tokens: 1500,
      protestsParticipated: 12
    }
  },
  {
    id: '2',
    title: 'Digital Rights and Privacy Protection',
    description: 'Exploring the importance of digital rights and privacy in the modern age.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280',
    duration: '8:45',
    views: 12000,
    likes: 980,
    comments: 65,
    timestamp: '5 hours ago',
    categories: ['digital-rights', 'privacy'],
    user: {
      id: '2',
      username: 'PrivacyFirst',
      fullName: 'Privacy Advocate',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64',
      followers: 12000,
      following: 150,
      isVerified: true,
      socialCreditScore: 92,
      tokens: 1200,
      protestsParticipated: 8
    }
  }
];