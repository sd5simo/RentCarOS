"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, RotateCcw, User, Car, Calendar, 
  MapPin, CreditCard, Shield, FileText, Search, Settings 
} from 'lucide-react';
import Link from 'next/link';

export default function NewRentalPage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Nouvelle Location</h1>
          <Link href="/locations/liste" className="ml-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 border border-gray-700">
            <ArrowLeft className="w-4 h-4" /> Retour à la liste
          </Link>
          <button className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Réinitialiser
          </button>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-center gap-3 text-yellow-500 text-sm font-medium">
        <span className="text-lg">⚠️</span>
        Aucun client n'est disponible pour le moment. Vous pouvez tout de même créer une sous-location sans clients.
        <button className="ml-auto px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-xs font-bold transition-colors">
          + Nouveau client
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        
        {/* LEFT COLUMN: Complex Form (Scrollable) */}
        <div className="xl:col-span-2 space-y-4">
          
          {/* Section: Informations de Location */}
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="p-4 border-b border-gray-800 bg-[#1e2536] flex justify-between items-center">
               <h2 className="text-white font-semibold flex items-center gap-2">
                 <FileText className="w-4 h-4 text-gray-400" /> Informations de Location
               </h2>
            </div>
            
            <div className="p-6 bg-[#151b2b] space-y-8">
              
              {/* Selectors: Driver & Car */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border border-gray-700 bg-[#1e2536]/50">
                  <h3 className="text-xs text-gray-400 font-bold uppercase mb-4 flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-500"/> Conducteur Principal<span className="text-red-500">*</span>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Aucun sélectionné</span>
                    <button className="px-3 py-1.5 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-xs font-medium transition-colors flex items-center gap-2">
                      <Search className="w-3 h-3" /> Sélectionner
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gray-700 bg-[#1e2536]/50">
                  <h3 className="text-xs text-gray-400 font-bold uppercase mb-4 flex items-center gap-2">
                    <Car className="w-4 h-4 text-yellow-500"/> Voiture<span className="text-red-500">*</span>
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Aucune sélectionnée</span>
                    <button className="px-3 py-1.5 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-xs font-medium transition-colors flex items-center gap-2">
                      <Search className="w-3 h-3" /> Sélectionner
                    </button>
                  </div>
                </div>
              </div>

              {/* Secondary Driver */}
              <div className="p-4 rounded-xl border border-gray-700 bg-[#1e2536]/50">
                <h3 className="text-xs text-gray-400 font-bold uppercase mb-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-yellow-500"/> Deuxième Conducteur
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Aucun sélectionné</span>
                  <button className="px-3 py-1.5 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-xs font-medium transition-colors flex items-center gap-2">
                    <Search className="w-3 h-3" /> Sélectionner
                  </button>
                </div>
              </div>

              {/* Type & Agence */}
              <h3 className="text-yellow-500 font-medium text-sm flex items-center gap-2 border-b border-gray-800 pb-2">
                 <MapPin className="w-4 h-4" /> Type & Agence
              </h3>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Type de Location</label>
                    <select className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500 appearance-none">
                      <option className="bg-gray-800">Classique</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Agence</label>
                    <div className="w-full bg-transparent border-b border-gray-700 pb-2 text-white">
                      RentCar, Casablanca
                    </div>
                 </div>
              </div>

              {/* Dates & Times */}
              <h3 className="text-yellow-500 font-medium text-sm flex items-center gap-2 border-b border-gray-800 pb-2">
                 <Calendar className="w-4 h-4" /> Période & Horaires
              </h3>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Période de location</label>
                    <div className="flex items-center gap-2 text-white border-b border-gray-700 pb-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      14-04-2026 <span className="text-gray-500">→</span> 21-04-2026
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Durée (jours)</label>
                    <input type="number" defaultValue="7" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
                 </div>
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Heure de départ</label>
                    <input type="time" defaultValue="17:04" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
                 </div>
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Heure de retour</label>
                    <input type="time" defaultValue="17:04" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
                 </div>
              </div>

              {/* Tarification */}
              <h3 className="text-yellow-500 font-medium text-sm flex items-center gap-2 border-b border-gray-800 pb-2">
                 <CreditCard className="w-4 h-4" /> Tarification
              </h3>
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Prix par jour</label>
                    <div className="relative">
                      <input type="text" defaultValue="0,00" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
                      <span className="absolute right-0 top-0 text-xs text-gray-500">MAD</span>
                    </div>
                 </div>
                 <div>
                    <label className="block text-xs text-gray-400 mb-1">Réduction</label>
                    <div className="relative">
                      <input type="text" defaultValue="0,00" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
                      <span className="absolute right-0 top-0 text-xs text-gray-500">MAD</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Montant fixe déduit du total</p>
                 </div>
              </div>

            </div>
          </div>

          {/* Section: Options & Chauffeurs (Collapsed) */}
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg p-4 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-colors">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <Settings className="w-4 h-4 text-gray-400" /> Options & Chauffeurs
            </h2>
            <ArrowLeft className="w-4 h-4 text-gray-500 -rotate-90" />
          </div>

        </div>

        {/* RIGHT COLUMN: Sticky Summary Box (Récapitulatif) */}
        <div className="xl:sticky xl:top-6 space-y-4">
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-gray-800 bg-[#1e2536] flex justify-between items-center">
              <h2 className="text-white font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" /> Récapitulatif
              </h2>
              <ArrowLeft className="w-4 h-4 text-gray-500 rotate-90" />
            </div>
            
            <div className="p-5 bg-[#151b2b] space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Type de location</span>
                <span className="text-white">Classique</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Véhicule</span>
                <span className="text-white font-medium">0,00 MAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Options</span>
                <span className="text-white font-medium">0,00 MAD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Chauffeurs</span>
                <span className="text-white font-medium">0,00 MAD</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-800 pt-3">
                <span className="text-gray-400">Sous-total</span>
                <span className="text-white font-medium">0,00 MAD</span>
              </div>
              
              <div className="flex justify-between items-center border-t border-gray-800 pt-4 pb-2">
                <span className="text-white font-bold text-lg">Total</span>
                <span className="text-yellow-500 font-bold text-xl">0,00 MAD</span>
              </div>

              {/* Create Button (Disabled state mock) */}
              <button className="w-full py-3 bg-gray-800 text-gray-500 font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Créer la Location
              </button>

              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 text-xs text-blue-400">
                 <span className="text-lg leading-none">ℹ️</span>
                 Sélectionnez un conducteur principal et une voiture pour finaliser la création.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}