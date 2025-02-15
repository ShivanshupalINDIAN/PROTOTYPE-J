import React, { useState } from 'react';
import { X, Upload, Check } from 'lucide-react';

type CrimeType = {
  id: string;
  label: string;
};

const crimeTypes: CrimeType[] = [
  { id: 'cyberbullying', label: 'Cyberbullying' },
  { id: 'misinformation', label: 'Misinformation/Disinformation' },
  { id: 'identity-theft', label: 'Identity Theft' },
  { id: 'hate-speech', label: 'Hate Speech' },
  { id: 'harassment', label: 'Online Harassment' },
  { id: 'fake-news', label: 'Fake News' },
];

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [step, setStep] = useState(1);
  const [selectedCrimes, setSelectedCrimes] = useState<string[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleCrimeSelection = (crimeId: string) => {
    setSelectedCrimes(prev =>
      prev.includes(crimeId)
        ? prev.filter(id => id !== crimeId)
        : [...prev, crimeId]
    );
  };

  const handleFilesDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleSubmit = () => {
    // Here you would implement the actual submission logic
    setStep(5);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-black rounded-xl w-full max-w-2xl mx-4 shadow-2xl border border-gray-700">
      {/* Header */}
      <div className="border-b border-gray-700 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Report Digital Crime</h2>
        <button
        onClick={onClose}
        className="p-1 hover:bg-gray-700 rounded-full transition-colors"
        >
        <X className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {step === 1 && (
        <div className="space-y-4">
          <p className="text-gray-300 mb-4">
          Select the type of digital crime you want to report.
          </p>
          <div className="grid grid-cols-2 gap-4">
          {crimeTypes.map(crime => (
            <button
            key={crime.id}
            onClick={() => handleCrimeSelection(crime.id)}
            className={`p-4 rounded-lg text-left transition-all ${
              selectedCrimes.includes(crime.id)
              ? 'bg-gray-700 ring-2 ring-gray-400 ring-opacity-50 shadow-lg'
              : 'bg-gray-800 hover:bg-gray-700'
            }`}
            >
            <span className="text-white">{crime.label}</span>
            </button>
          ))}
          </div>
        </div>
        )}

        {step === 2 && (
        <div className="space-y-4">
          <p className="text-gray-300 mb-4">
          Please provide your contact information (optional).
          </p>
          <div className="space-y-4">
          <input
            type="text"
            placeholder="Name (Optional)"
            value={personalInfo.name}
            onChange={e =>
            setPersonalInfo(prev => ({ ...prev, name: e.target.value }))
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email (Optional)"
            value={personalInfo.email}
            onChange={e =>
            setPersonalInfo(prev => ({ ...prev, email: e.target.value }))
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={personalInfo.phone}
            onChange={e =>
            setPersonalInfo(prev => ({ ...prev, phone: e.target.value }))
            }
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
          </div>
        </div>
        )}

        {step === 3 && (
        <div className="space-y-4">
          <p className="text-gray-300 mb-4">
          Upload evidence or provide additional information.
          </p>
          <div
          onDragOver={e => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleFilesDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
            ? 'border-gray-400 bg-gray-700'
            : 'border-gray-700 bg-gray-800'
          }`}
          >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-300">
            Drop files here or click to upload
          </p>
          <input
            type="file"
            multiple
            onChange={e => {
            const selectedFiles = Array.from(e.target.files || []);
            setFiles(prev => [...prev, ...selectedFiles]);
            }}
            className="hidden"
          />
          </div>
          {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-2 rounded-lg"
            >
              <span className="text-gray-300">{file.name}</span>
              <button
              onClick={() =>
                setFiles(prev =>
                prev.filter((_, i) => i !== index)
                )
              }
              className="text-gray-400 hover:text-gray-200"
              >
              <X className="w-4 h-4" />
              </button>
            </div>
            ))}
          </div>
          )}
        </div>
        )}

        {step === 4 && (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-semibold mb-2">Selected Crimes:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {selectedCrimes.map(crimeId => (
            <li key={crimeId}>
              {crimeTypes.find(c => c.id === crimeId)?.label}
            </li>
            ))}
          </ul>
          </div>
          {(personalInfo.name || personalInfo.email || personalInfo.phone) && (
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2">
            Contact Information:
            </h3>
            {personalInfo.name && (
            <p className="text-gray-300">Name: {personalInfo.name}</p>
            )}
            {personalInfo.email && (
            <p className="text-gray-300">Email: {personalInfo.email}</p>
            )}
            {personalInfo.phone && (
            <p className="text-gray-300">Phone: {personalInfo.phone}</p>
            )}
          </div>
          )}
          {files.length > 0 && (
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2">
            Uploaded Files:
            </h3>
            <ul className="list-disc list-inside text-gray-300">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
            </ul>
          </div>
          )}
        </div>
        )}

        {step === 5 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
          Report Submitted Successfully
          </h3>
          <p className="text-gray-300 mb-4">
          We will review your report and take necessary actions.
          </p>
          <button
          onClick={onClose}
          className="text-white bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
          Close
          </button>
        </div>
        )}
      </div>

      {/* Footer */}
      {step < 5 && (
        <div className="border-t border-gray-700 p-4 flex justify-between">
        {step > 1 && (
          <button
          onClick={() => setStep(prev => prev - 1)}
          className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
          Back
          </button>
        )}
        <div className="ml-auto flex gap-4">
          {step === 2 && (
          <button
            onClick={() => setStep(3)}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Skip
          </button>
          )}
          <button
          onClick={() =>
            step === 4 ? handleSubmit() : setStep(prev => prev + 1)
          }
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
          {step === 4 ? 'Submit Report' : 'Next →'}
          </button>
        </div>
        </div>
      )}
      </div>
    </div>
  );
}