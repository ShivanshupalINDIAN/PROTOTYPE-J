import React, { useState, useEffect } from 'react';
import { CreditCard, KeyRound } from 'lucide-react';

interface AadhaarVerificationProps {
  onVerify: (aadhaarId: string) => void;
}

export function AadhaarVerification({ onVerify }: AadhaarVerificationProps) {
  const [aadhaarId, setAadhaarId] = useState('');
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    if (otpSent && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [otpSent, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAadhaarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aadhaarId.length !== 12 || !/^\d+$/.test(aadhaarId)) {
      setError('Please enter a valid 12-digit Aadhaar number');
      return;
    }
    setOtpSent(true);
    setTimeLeft(120);
    setError('');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6 || !/^\d+$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    onVerify(aadhaarId);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-8">Aadhaar Verification</h2>
      
      {!otpSent ? (
        <form onSubmit={handleAadhaarSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Aadhaar Number
            </label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={aadhaarId}
                onChange={(e) => setAadhaarId(e.target.value.slice(0, 12))}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter 12-digit Aadhaar number"
                maxLength={12}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter OTP
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Time remaining: {formatTime(timeLeft)}
            </p>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            disabled={timeLeft === 0}
          >
            Verify OTP
          </button>

          {timeLeft === 0 && (
            <button
              type="button"
              onClick={() => {
                setOtpSent(false);
                setOtp('');
                setError('');
              }}
              className="w-full bg-gray-100 text-black py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Resend OTP
            </button>
          )}
        </form>
      )}
    </div>
  );
}