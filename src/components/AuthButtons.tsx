
import React, { useState } from 'react';
import { LogIn, LogOut, User } from 'lucide-react';
import { Button } from './ui/button';

const AuthButtons = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleSignIn = () => {
    // This is a placeholder - you'll replace this with your actual authentication logic
    setIsSignedIn(true);
    setUser({ name: 'User' });
    console.log('Sign in clicked - integrate with your auth service');
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUser(null);
    console.log('Sign out clicked');
  };

  if (isSignedIn && user) {
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 text-gray-700">
          <User size={20} />
          <span className="hidden sm:inline">Welcome, {user.name}</span>
        </div>
        <Button
          onClick={handleSignOut}
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleSignIn}
      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
    >
      <LogIn size={16} />
      <span>Sign In</span>
    </Button>
  );
};

export default AuthButtons;
