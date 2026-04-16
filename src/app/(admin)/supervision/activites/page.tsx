"use client";

import React, { useState } from 'react';
import { 
  History, Clock, ChevronDown, Filter, 
  Info, Plus, Building2, CheckCircle2 
} from 'lucide-react';

export default function ActivityLogsPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="p-6 max-w-[1200px] mx-auto text-gray-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <History className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Journal d'Activité</h1>
            <p className="text-sm text-gray-400 mt-1">Historique des actions effectuées</p>
          </div>
        </div>
        
        <div className="md:ml-6 mt-2 md:mt-0 flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500 text-xs font-medium">
          <Clock className="w-4 h-4" />
          Seuls les activités de moins de 45 jours sont conservés.
        </div>
      </div>

      {/* Collapsible Filters Bar */}
      <div className="mb-6 bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <button 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full p-4 flex justify-between items-center hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2 font-medium text-white">
            <Filter className="w-4 h-4 text-gray-400" /> Filtres
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isFiltersOpen && (
          <div className="p-4 border-t border-gray-800 bg-[#151b2b]/50 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div>
                <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Utilisateur</label>
                <select className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-yellow-500">
                  <option>Tous les utilisateurs</option>
                </select>
             </div>
             <div>
                <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Type d'action</label>
                <select className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-yellow-500">
                  <option>Toutes les actions</option>
                  <option>Création</option>
                  <option>Modification</option>
                  <option>Suppression</option>
                </select>
             </div>
             <div>
                <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Période</label>
                <input type="date" className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-gray-400 focus:outline-none focus:border-yellow-500" />
             </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4">
         <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded-full text-xs font-bold">
           1 activité(s)
         </span>
      </div>

      {/* Timeline / Activity List */}
      <div className="space-y-4">
        
        {/* Single Activity Card Mockup */}
        <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
           {/* Left colored border accent */}
           <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
           
           <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#151b2b] rounded-full border border-gray-700 flex items-center justify-center overflow-hidden">
                   {/* Faux Avatar / Initial */}
                   <span className="font-bold text-gray-400">K</span>
                 </div>
                 <div>
                    <div className="flex items-center gap-2">
                       <span className="font-bold text-white text-sm">RentCar</span>
                       <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded text-[10px] font-bold border border-blue-500/20">Vous</span>
                    </div>
                    <span className="text-xs text-gray-500">14/04/2026 à 15:43</span>
                 </div>
              </div>

              {/* Tags (Top Right) */}
              <div className="flex items-center gap-2">
                 <span className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20 text-[10px] font-bold">
                   <Info className="w-3 h-3" /> Info
                 </span>
                 <span className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 text-[10px] font-bold">
                   <Plus className="w-3 h-3" /> Ajout
                 </span>
                 <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20 text-[10px] font-bold">
                   <Building2 className="w-3 h-3" /> Agence
                 </span>
              </div>
           </div>

           {/* Activity Details Box */}
           <div className="bg-[#151b2b] border border-gray-800 rounded-lg p-4 text-sm text-gray-300 ml-13">
              <p className="mb-2">a créé une agence.</p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• Agence : RentCar</li>
                <li>• Ville : Casablanca</li>
                <li className="flex items-center gap-1 mt-2 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Active
                </li>
              </ul>
           </div>
        </div>
        
      </div>

      {/* Pagination (Mock) */}
      <div className="mt-8 flex justify-center items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-gray-800 disabled:opacity-50">&lt;</button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-yellow-500 text-gray-900 font-bold">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:text-white hover:bg-gray-800 disabled:opacity-50">&gt;</button>
      </div>

    </div>
  );
}