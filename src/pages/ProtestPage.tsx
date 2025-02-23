import React, { useState } from 'react';
import { Search, Users, ExternalLink, User, Plus } from 'lucide-react'; // Added Plus icon
import { ProtestCard } from '../components/protest/ProtestCard';
import { Dialog } from "@headlessui/react";
import { Switch } from "@headlessui/react";

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
    description: 'Join us in our peaceful protest for digital privacy rights and data protection.',
    location: 'New Delhi, India',
    date: '2024-04-15',
    participants: 1200,
    status: 'upcoming',
    videoUrl: '/mock-protest-1.mp4',
    likes: 2500,
    comments: 342
  },
  {
    id: '2',
    title: 'Clean Governance Rally',
    description: 'Standing together for transparency in digital governance.',
    location: 'Mumbai, India',
    date: '2024-04-20',
    participants: 800,
    status: 'active',
    videoUrl: '/mock-protest-2.mp4',
    likes: 1800,
    comments: 256
  }
];

export function ProtestPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [joinedOrgs, setJoinedOrgs] = useState<string[]>([]);
  const [joinedProtests, setJoinedProtests] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isNotified, setIsNotified] = useState(false);
  const [pollOptions, setPollOptions] = useState([""]);
  const [showAllGroups, setShowAllGroups] = useState(false); // State to toggle all groups visibility

  const addPollOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const updatePollOption = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  const handleJoinToggle = (orgId: string) => {
    setJoinedOrgs((prev) =>
      prev.includes(orgId) ? prev.filter((id) => id !== orgId) : [...prev, orgId]
    );
  };

  const handleProtestJoinToggle = (protestId: string) => {
    setJoinedProtests((prev) =>
      prev.includes(protestId) ? prev.filter((id) => id !== protestId) : [...prev, protestId]
    );
  };

  const filteredOrgs = YOUTH_ORGANIZATIONS.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const joinedOrganizations = YOUTH_ORGANIZATIONS.filter(org => joinedOrgs.includes(org.id));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Raise Your Voice</h1>
          <p className="text-black">Join and support digital rights movements</p>
        </div>
        <button
          type="button"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl active:bg-blue-800"
          onClick={() => setIsOpen(true)}
        >
          Organize Voices
        </button>
      </div>

      {/* Youth Organizations Tab */}
      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-white" /> {/* Human icon */}
            <h2 className="text-xl font-semibold text-white">Youth Activist Groups</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAllGroups(!showAllGroups)}
              className="bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
            >
              <Plus className="h-4 w-4" /> {/* Plus icon */}
            </button>
            <button
              onClick={() => setShowAllGroups(false)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
            >
              Show Joined Organizations
            </button>
          </div>
        </div>

        {showAllGroups ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800">
                  <th className="pb-3 px-4 text-white">Name</th>
                  <th className="pb-3 px-4 text-white">Full Name</th>
                  <th className="pb-3 px-4 text-white">Associated With</th>
                  <th className="pb-3 px-4 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrgs.map((org) => (
                  <tr
                    key={org.id}
                    className={`border-b border-gray-800 hover:bg-gray-800/50 transition-all transform hover:scale-105 ${
                      joinedOrgs.includes(org.id) ? 'bg-gray-700' : ''
                    }`}
                  >
                    <td className="py-4 px-4 font-medium text-white">{org.name}</td>
                    <td className="py-4 px-4 text-white">{org.fullName}</td>
                    <td className="py-4 px-4 text-white">{org.association}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleJoinToggle(org.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                          joinedOrgs.includes(org.id)
                            ? 'bg-yellow-500 text-white font-bold'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        {joinedOrgs.includes(org.id) ? 'Joined' : 'Join Now'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800">
                  <th className="pb-3 px-4 text-white">Name</th>
                  <th className="pb-3 px-4 text-white">Full Name</th>
                  <th className="pb-3 px-4 text-white">Associated With</th>
                  <th className="pb-3 px-4 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {joinedOrganizations.length > 0 ? (
                  joinedOrganizations.map((org) => (
                    <tr
                      key={org.id}
                      className={`border-b border-gray-800 transition-all transform hover:scale-95 ${
                        joinedOrgs.includes(org.id) ? 'bg-white' : ''
                      }`}
                    >
                      <td className="py-4 px-4 font-medium text-black">{org.name}</td>
                      <td className="py-4 px-4 text-black">{org.fullName}</td>
                      <td className="py-4 px-4 text-black">{org.association}</td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleJoinToggle(org.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                            joinedOrgs.includes(org.id)
                              ? 'bg-black text-white font-bold'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                        >
                          {joinedOrgs.includes(org.id) ? 'Joined' : 'Join Now'}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-4 px-4 text-center text-white">
                      No organizations joined yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Active Protests Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Active Voices</h2>
        {MOCK_PROTESTS.map((protest) => (
          <div
            key={protest.id}
            className={`p-4 rounded-lg transition-all ${
              joinedProtests.includes(protest.id) ? 'bg-gray-700 opacity-75' : 'bg-white'
            }`}
          >
            <ProtestCard protest={protest} />
            <button
              onClick={() => handleProtestJoinToggle(protest.id)}
              className={`mt-3 flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                joinedProtests.includes(protest.id)
                  ? 'bg-green-500 text-white font-bold'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {joinedProtests.includes(protest.id) ? 'Joined' : 'Join Voice'}
            </button>
          </div>
        ))}
      </div>

      {/* Dialog for Organize Voices */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-80"></div>
  <Dialog.Panel className="bg-gray-100 text-black max-w-md w-full p-6 border border-gray-300 shadow-lg relative">
    <h2 className="text-center text-2xl font-bold mb-6">Organize Voice</h2>
    
    {/* Step Indicator (Removed Numbers) */}
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3].map((num, index) => (
      <div key={num} className="flex items-center mx-2">
        <div className={`flex items-center justify-center rounded-full border-2 font-bold ${step >= num ? 'bg-black text-white' : 'text-black border-gray-400'} ${step === num ? 'w-12 h-12' : 'w-7 h-7'}`}>
        {num}
        </div>
        {index !== 2 && <div className="w-16 h-0.5 bg-black"></div>}
      </div>
      ))}
    </div>

    {/* Step 1 Fields */}
    {step === 1 && (
      <div>
        <label className="block text-lg font-semibold mb-2">Upload Cover</label>
        <div className="border-2 border-dashed border-gray-400 p-12 mb-4 text-center cursor-pointer bg-white text-gray-600 hover:bg-gray-50 transition-colors">
          Drop file here or <span className="underline font-bold">Upload</span>
        </div>
        
        <label className="block text-lg font-semibold mb-2">General Information</label>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 px-10 mb-3 bg-white border border-black rounded-3xl font-medium focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Description"
          className="w-full p-3 bg-white border border-black rounded-4xl font-medium focus:outline-none focus:ring-2 focus:ring-black"
        />
        <label className="block text-lg font-semibold mb-2">Target Audience</label>
        <select className="w-full p-3 bg-white border border-gray-300 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black">
          <option>Students</option>
          <option>All Users</option>
          <option>Workers</option>
        </select>
        
        <div className="flex justify-between mt-6">
            <button
            onClick={() => setIsOpen(false)}
            className="border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition-colors"
            >
            Cancel
            </button>
            <button
            onClick={() => setStep(2)}
            className="bg-white text-black border border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition-colors"
            >
            Next
            </button>
        </div>
      </div>
    )}

    {/* Step 2 Fields */}
    {step === 2 && (
      <div>
        <label className="block text-lg font-semibold mb-2">Anonymous or Show Identity</label>
        <div className="mb-4 flex space-x-4">
          <label className="flex items-center font-medium">
            <input type="radio" name="identity" className="mr-2" /> Anonymous
          </label>
          <label className="flex items-center font-medium">
            <input type="radio" name="identity" className="mr-2" /> Show Identity
          </label>
        </div>
        
        <label className="block text-lg font-semibold mb-2">User Notification Events</label>
        <Switch
          checked={isNotified}
          onChange={setIsNotified}
          className={`${isNotified ? 'bg-black' : 'bg-gray-400'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
        >
          <span className="sr-only">Enable notifications</span>
          <span className={`${isNotified ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
        </Switch>
        
        <label className="block text-lg font-semibold mt-4 mb-2">Upload Documentation or Proof</label>
        <div className="border-2 border-dashed border-gray-400 p-8 rounded-xl text-center cursor-pointer bg-white text-gray-600 hover:bg-gray-50 transition-colors">
          Drop files here (Supported formats: .jpg, .png, .pdf)
        </div>
        
        <div className="flex justify-between mt-6">
            <button
            onClick={() => setStep(1)}
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition-colors"
            >
            Back
            </button>
            <button
            onClick={() => setStep(3)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 font-semibold transition-colors"
            >
            Next
            </button>
        </div>
      </div>
    )}

    {/* Step 3 Fields */}
    {step === 3 && (
      <div>
        <label className="block text-lg font-semibold mb-2">Post</label>
        <div className="border-2 border-dashed border-gray-400 p-12 rounded-xl mb-4 text-center bg-white text-gray-600 hover:bg-gray-50 transition-colors">
          Live Video or Post Preview
        </div>
        
        <label className="block text-lg font-semibold mb-2">Event Scheduling</label>
        <input
          type="date"
          className="w-full p-3 bg-white border border-gray-300 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
        />
        
        <label className="block text-lg font-semibold mb-2">Poll</label>
        {pollOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => updatePollOption(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg font-medium mb-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        ))}
        <button
          onClick={addPollOption}
          className="text-black underline font-semibold hover:text-black"
        >
          + Add Option
        </button>
        
        <div className="flex justify-between mt-6">
            <button
            onClick={() => setStep(2)}
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition-colors"
            >
            Back
            </button>
          <button
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black font-semibold transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    )}
  </Dialog.Panel>
</Dialog>
    </div>
  );
}