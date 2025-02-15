import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { AadhaarVerification } from './AadhaarVerification';
import { Home } from './Home';

type AuthStage = 'login' | 'register' | 'aadhaar' | 'home';

export function AuthFlow() {
  const [stage, setStage] = useState<AuthStage>('login');
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    gender: '',
    dateOfBirth: '',
    aadhaarId: '',
  });

  const handleLogin = (email: string, password: string) => {
    // Here you would implement actual login logic
    // For demo, we'll just go to home
    setStage('home');
  };

  const handleRegister = (data: {
    name: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    password: string;
  }) => {
    setUserData({ ...userData, ...data });
    setStage('aadhaar');
  };

  const handleAadhaarVerification = (aadhaarId: string) => {
    setUserData({ ...userData, aadhaarId });
    setStage('home');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {stage === 'login' && (
        <Login onLogin={handleLogin} onRegister={() => setStage('register')} />
      )}
      {stage === 'register' && <Register onSubmit={handleRegister} />}
      {stage === 'aadhaar' && (
        <AadhaarVerification onVerify={handleAadhaarVerification} />
      )}
      {stage === 'home' && <Home userData={userData} />}
    </div>
  );
}