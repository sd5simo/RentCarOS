"use client";

import React, { useState } from "react";
import { useAuth } from "@/store/auth";
import { Save, AlertCircle, CheckCircle2, User } from "lucide-react";

export default function SettingsPage() {
  // Use the REAL user from your database session
  const { user } = useAuth();
  
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (newPass !== confirmPass) {
      setMessage({ type: "error", text: "Les mots de passe ne correspondent pas." });
      return;
    }

    // Note: Since we are using a real database, changing the password requires a new API endpoint.
    // We will build that in the backend phase! For now, this prevents the build from crashing.
    setMessage({ type: "success", text: "L'interface est prête pour l'intégration API." });
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto text-gray-200">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gray-800 rounded-lg">
          <User className="w-6 h-6 text-yellow-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Paramètres du compte</h1>
          <p className="text-sm text-gray-400 mt-1">Gérez votre profil et votre sécurité</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Profile Info (Read Only from Database) */}
        <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-6 shadow-lg h-fit">
          <h2 className="text-lg font-semibold text-white mb-6">Informations du Profil</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Email de connexion</label>
              <input type="text" disabled value={user?.email || ""} className="w-full bg-[#151b2b] border border-gray-700 rounded-lg px-4 py-2.5 text-gray-400 cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Rôle Système</label>
              <input type="text" disabled value={user?.role === 'MANAGER' ? 'Manager (Accès Total)' : 'Employé'} className="w-full bg-[#151b2b] border border-gray-700 rounded-lg px-4 py-2.5 text-gray-400 cursor-not-allowed" />
            </div>
          </div>
        </div>

        {/* Change Password Form */}
        <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-6">Changer le mot de passe</h2>
          
          {message.text && (
            <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${message.type === 'error' ? 'bg-red-500/10 border border-red-500/30 text-red-500' : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-500'}`}>
              {message.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
              {message.text}
            </div>
          )}

          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Mot de passe actuel</label>
              <input 
                type="password" 
                required
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
                className="w-full bg-[#151b2b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition-colors" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Nouveau mot de passe</label>
              <input 
                type="password" 
                required
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                className="w-full bg-[#151b2b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition-colors" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Confirmer le nouveau mot de passe</label>
              <input 
                type="password" 
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="w-full bg-[#151b2b] border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition-colors" 
              />
            </div>

            <button type="submit" className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-6 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Save className="w-4 h-4" /> Enregistrer les modifications
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}