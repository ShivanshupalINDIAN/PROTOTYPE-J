export interface Post {
  id: string;
  user: User;
  content: string;
  description?: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  timestamp: number;
  tags?: string[];
}

export interface PoliticalPost extends Post {
  videoUrl?: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
    position: string;
  };
  anonymousComments: string[];
  shares: number; // Added shares property
}

export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  followers: number;
  following: number;
  isVerified: boolean;
  socialCreditScore: number;
  tokens: number;
  protestsParticipated: number;
  bio: string; // Added bio property
  location: string; // Added location property
}

// Other interfaces remain unchanged
