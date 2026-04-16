"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/store/auth'; 
import { Car, Lock, Mail, AlertCircle, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  
  // Get the setAuth function from our updated real store
  const setAuth = useAuth((state) => state.setAuth); 
  
  // Using email instead of username, because your Prisma database uses 'email'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 1. Send the login request to the REAL backend API
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // 2. If the API says the password or email is wrong, throw an error
      if (!res.ok) {
        throw new Error(data.error || 'Erreur de connexion');
      }

      // 3. Success! Save the REAL user data from the database into Zustand
      setAuth(data.user);
      
      // 4. Redirect to the dashboard
      router.push('/dashboard/statistiques');
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#151b2b] flex items-center justify-center p-4 font-sans text-gray-200">
      <div className="bg-[#1e2536] w-full max-w-md rounded-2xl p-8 border border-gray-800 shadow-2xl">
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30">
            <Car className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-white text-center mb-2">Jebrental OS</h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          Connectez-vous pour accéder au tableau de bord.
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-500 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Email</label>
            <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@jebrental.com" 
                className="w-full bg-transparent pl-10 pr-4 py-2.5 text-white focus:outline-none text-sm" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Mot de passe</label>
            <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-transparent pl-10 pr-4 py-2.5 text-white focus:outline-none text-sm" 
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? 'Connexion en cours...' : 'Se connecter'} <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        
      </div>
    </div>
  );
}