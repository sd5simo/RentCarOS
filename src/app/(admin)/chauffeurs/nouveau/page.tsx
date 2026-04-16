"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, UserPlus, CheckCircle2, User, 
  Calendar, Zap, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function NewDriverPage() {
  const [pricingMode, setPricingMode] = useState<'PER_DAY' | 'FLAT'>('PER_DAY');

  return (
    <div className="p-6 max-w-[1200px] mx-auto text-gray-200">
      
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Nouveau Chauffeur</h1>
          
          <div className="ml-4 flex items-center gap-3">
            <Link href="/chauffeurs/liste" className="px-4 py-2 bg-[#1e2536] hover:bg-gray-800 text-blue-400 text-sm font-medium rounded-lg transition-colors border border-blue-500/30 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Retour à la liste
            </Link>
            <button className="px-4 py-2 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 text-sm font-bold rounded-lg transition-colors border border-emerald-500/30 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Créer le Chauffeur
            </button>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg p-6">
        
        <h2 className="text-white font-semibold mb-6 flex items-center gap-2 text-lg">
          <User className="w-5 h-5 text-gray-400" /> Informations du Chauffeur
        </h2>

        {/* Top Inputs Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Nom *</label>
            <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors">
              <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input type="text" placeholder="ex: Alami, Benjelloun..." className="w-full bg-transparent pl-10 pr-4 py-2.5 text-white focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Prénom *</label>
            <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors">
              <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
              <input type="text" placeholder="ex: Mohammed, Ahmed..." className="w-full bg-transparent pl-10 pr-4 py-2.5 text-white focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Téléphone *</label>
            <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors">
              <span className="absolute left-3 top-3 text-gray-500 text-sm">📞</span>
              <input type="text" placeholder="ex: 0612345678" className="w-full bg-transparent pl-10 pr-4 py-2.5 text-white focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase text-gray-400 font-bold mb-1">Tarif *</label>
            <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors flex items-center pr-3">
              <input type="text" defaultValue="0,00" className="w-full bg-transparent pl-4 pr-2 py-2.5 text-white focus:outline-none text-right" />
              <span className="text-gray-400 text-sm font-medium border-l border-gray-700 pl-3">MAD</span>
            </div>
          </div>
        </div>

        {/* Interactive Radio Cards: Pricing Mode */}
        <div className="mb-8">
          <h3 className="text-yellow-500 font-medium mb-4 flex items-center gap-2 text-sm uppercase">
            <Zap className="w-4 h-4" /> Mode de Tarification
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: Tarif par Jour */}
            <div 
              onClick={() => setPricingMode('PER_DAY')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                pricingMode === 'PER_DAY' 
                  ? 'border-yellow-500 bg-yellow-500/5' 
                  : 'border-gray-800 bg-[#151b2b] hover:border-gray-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  pricingMode === 'PER_DAY' ? 'border-yellow-500' : 'border-gray-600'
                }`}>
                  {pricingMode === 'PER_DAY' && <div className="w-2 h-2 bg-yellow-500 rounded-full" />}
                </div>
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow-500" /> Tarif par Jour
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Le chauffeur sera facturé <strong className="text-white">0,00 MAD par jour</strong> de location.
                  </p>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Exemple: 5 jours = 0,00 MAD
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Forfait Unique */}
            <div 
              onClick={() => setPricingMode('FLAT')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                pricingMode === 'FLAT' 
                  ? 'border-emerald-500 bg-emerald-500/5' 
                  : 'border-gray-800 bg-[#151b2b] hover:border-gray-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  pricingMode === 'FLAT' ? 'border-emerald-500' : 'border-gray-600'
                }`}>
                  {pricingMode === 'FLAT' && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                </div>
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-500" /> Forfait Unique
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Le chauffeur sera facturé <strong className="text-white">0,00 MAD une seule fois</strong> pour toute la durée.
                  </p>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Exemple: 5 jours = 0,00 MAD (prix fixe)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-800">
           <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
             <span className="text-lg leading-none">💡</span>
             Vous pourrez compléter les autres détails sur la fiche du chauffeur.
           </div>
           
           <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-transparent hover:bg-white/5 border border-gray-600 text-white font-medium rounded-lg transition-colors">
                Annuler
              </button>
              <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                <UserPlus className="w-5 h-5" /> Créer le Chauffeur
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}