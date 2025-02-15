import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { EditProfileModal } from './EditProfileModal';

export function EditProfileButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
      >
        <Edit2 className="h-4 w-4" />
        <span>Edit Profile</span>
      </button>
      
      {showModal && <EditProfileModal onClose={() => setShowModal(false)} />}
    </>
  );
}