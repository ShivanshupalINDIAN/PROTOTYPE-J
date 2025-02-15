import { Video, PoliticalPost } from './index';

export interface Room {
  id: string;
  name: string;
  type: 'native' | 'global';
  topic?: string;
  description?: string;
  participants: Participant[];
  lastMessage?: Message;
  unreadCount: number;
  createdAt: number;
}

export interface Participant {
  id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: number;
}

export interface Message {
  id: string;
  sender: Participant;
  content: string;
  timestamp: number;
  attachments?: MessageAttachment[];
  reactions?: MessageReaction[];
}

export interface MessageAttachment {
  id: string;
  type: 'video' | 'post' | 'protest';
  content: Video | PoliticalPost | any; // Add other types as needed
}

export interface MessageReaction {
  emoji: string;
  count: number;
  users: string[]; // user IDs
}