import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { MessageSquare } from 'lucide-react';

export function ChatHeader() {
  const navigate = useNavigate(); // Initialize navigate

  const handleHeaderClick = () => {
    navigate('/chat'); // Navigate to the chat page
  };
  return (
    <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 bg-white" onClick={handleHeaderClick}>
      <div className="flex items-center gap-3">
        <MessageSquare className="w-8 h-8 text-gray-900" />
        <h1 className="text-xl font-bold text-gray-900">Discussions</h1>
      </div>
    </div>
  );
}
