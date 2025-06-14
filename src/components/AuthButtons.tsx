
import React from 'react';
import { LogIn, LogOut, User } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useToast } from './ui/use-toast';

const AuthButtons = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Sign Out Error",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out."
      });
    }
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 text-gray-700">
          <User size={20} />
          <span className="hidden sm:inline">
            Welcome, {user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}
          </span>
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
