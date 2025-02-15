import React, { useState } from 'react';

export function OrganizeProtestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    expectedParticipants: '',
  });

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    // Handle protest creation
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Organize a Protest</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Expected Participants</label>
            <input
              type="number"
              value={formData.expectedParticipants}
              onChange={(e) => setFormData({ ...formData, expectedParticipants: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Create Protest
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
      </div>
    </div>
  );
}
