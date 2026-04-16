"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, Car, Calendar, CreditCard, Droplets, 
  Settings, Users, DoorOpen, Palette, FileText, 
  AlertTriangle, Wrench, Shield, CheckCircle2, ChevronDown, ChevronUp 
} from 'lucide-react';
import Link from 'next/link';

export default function VehicleDetailsPage({ params }: { params: { id: string } }) {
  // Mock State for Accordions
  const [openSection, setOpenSection] = useState<string | null>('alertes');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gray-800 rounded-lg">
          <Car className="w-6 h-6 text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold text-white">Fiche de Voiture</h1>
        <Link href="/vehicules/liste" className="ml-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 border border-gray-700">
          <ArrowLeft className="w-4 h-4" /> Retour à la liste
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Core Information (Takes up 2/3 space on large screens) */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Informations Primaires */}
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-semibold text-white">Informations Primaires</h2>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Disponibilité:</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-medium text-xs">Disponible</span>
              </div>
            </div>

            <div className="p-4 bg-[#151b2b] rounded-lg border border-gray-800 flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="font-medium">État de la voiture</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30">Saline</span>
                <button className="px-4 py-2 border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-sm font-medium transition-colors">
                  Changer l'État
                </button>
              </div>
            </div>

            {/* Identification Form Mock */}
            <h3 className="text-yellow-500 font-medium mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Identification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Marque *</label>
                <input type="text" defaultValue="Toyota" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Modèle *</label>
                <input type="text" defaultValue="2004" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Matricule</label>
                <input type="text" defaultValue="34547867g" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Prix de Location par Jour *</label>
                <input type="text" defaultValue="480,00" className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-yellow-500" />
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
               <button className="px-4 py-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                 <Car className="w-4 h-4"/> Louer
               </button>
               <button className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                 <Calendar className="w-4 h-4"/> Réserver
               </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Accordions (Maintenance, Stats, Docs) */}
        <div className="space-y-4">
          
          {/* Alertes et Maintenance Accordion */}
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <button 
              onClick={() => toggleSection('alertes')}
              className="w-full p-4 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-gray-400" />
                <span className="font-semibold text-white">Alertes et Maintenance</span>
                <span className="px-2 py-0.5 bg-red-500/20 text-red-500 border border-red-500/30 rounded text-xs font-bold flex items-center gap-1">
                  <Car className="w-3 h-3"/> 5 Alertes
                </span>
              </div>
              {openSection === 'alertes' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {openSection === 'alertes' && (
              <div className="p-4 border-t border-gray-800 bg-[#151b2b]/50 space-y-6">
                
                {/* Dates Based */}
                <div>
                  <h4 className="text-xs text-yellow-500 uppercase font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4"/> Maintenance Basée sur Dates
                  </h4>
                  <div className="space-y-3">
                    {/* Insurance Card - Red Warning */}
                    <div className="bg-[#1e2536] p-3 rounded-lg border-t-2 border-red-500">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium flex items-center gap-2"><Shield className="w-4 h-4 text-red-500"/> Assurance</span>
                        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">Aujourd'hui!</span>
                      </div>
                      <div className="text-xs text-gray-400 border-b border-gray-700 pb-1">Prochaine Assurance</div>
                      <div className="text-sm mt-1">14-04-2026</div>
                    </div>
                  </div>
                </div>

                {/* Mileage Based */}
                <div>
                  <h4 className="text-xs text-yellow-500 uppercase font-semibold mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4"/> Maintenance Basée sur Kilométrage
                  </h4>
                  <div className="space-y-3">
                     {/* Oil Change Card - Red Warning */}
                     <div className="bg-[#1e2536] p-3 rounded-lg border-t-2 border-red-500">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium flex items-center gap-2"><Droplets className="w-4 h-4 text-red-500"/> Vidange</span>
                        <span className="text-xs bg-red-500/20 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">En retard!</span>
                      </div>
                      <div className="text-xs text-gray-400 border-b border-gray-700 pb-1">Prochain Vidange (Km)</div>
                      <div className="text-sm mt-1">0</div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Other Accordions (Collapsed by default) */}
          {[
            { id: 'finance', title: 'Finance et Traite', icon: CreditCard },
            { id: 'stats', title: 'Statistiques', icon: Settings },
            { id: 'docs', title: 'Documents', icon: FileText }
          ].map((section) => (
            <div key={section.id} className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <section.icon className="w-5 h-5 text-gray-400" />
                  <span className="font-semibold text-white">{section.title}</span>
                </div>
                {openSection === section.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-6 flex justify-end gap-3 bg-[#1e2536] p-4 rounded-xl shadow-lg border border-gray-800">
        <button className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-colors flex items-center gap-2 text-sm">
          Enregistrer
        </button>
        <button className="px-5 py-2 bg-transparent border border-gray-600 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm font-medium">
          Nouvelle Charge
        </button>
        <button className="px-5 py-2 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors text-sm font-medium">
          Signaler Dégât
        </button>
      </div>
    </div>
  );
}
