"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, FileText, File, Calendar, MapPin, 
  User, Car, CreditCard, ShieldAlert, ChevronDown, 
  ChevronUp, Edit2, ExternalLink, PenSquare, TriangleAlert
} from 'lucide-react';
import Link from 'next/link';

export default function RentalDetailsPage({ params }: { params: { id: string } }) {
  // Mock State for Accordions
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Fiche de Location</h1>
          <Link href="/locations/liste" className="ml-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 border border-gray-700">
            <ArrowLeft className="w-4 h-4" /> Retour à la liste
          </Link>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" /> Contrat
          </button>
          <button className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <File className="w-4 h-4" /> Facture
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Core Rental Info */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                 Informations de Location
                 <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs font-bold border border-emerald-500/30">Active</span>
               </h2>
               <span className="text-xs text-gray-500">Créée le 14-04-2026 à 16:07</span>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-gray-800 pb-6">
               <div>
                 <p className="text-xs text-yellow-500 uppercase font-semibold mb-1 flex items-center gap-1"><FileText className="w-3 h-3"/> Numéro de Location</p>
                 <p className="font-bold text-white text-lg">CTR-2026000001</p>
               </div>
               <div>
                 <p className="text-xs text-yellow-500 uppercase font-semibold mb-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Agence</p>
                 <p className="font-bold text-white">kharrazi</p>
                 <p className="text-xs text-gray-400">Casablanca</p>
               </div>
               <div>
                 <p className="text-xs text-yellow-500 uppercase font-semibold mb-1 flex items-center gap-1"><Calendar className="w-3 h-3"/> Réservation d'origine</p>
                 <p className="text-gray-400">Aucune</p>
               </div>
               <div>
                 <p className="text-xs text-yellow-500 uppercase font-semibold mb-1 flex items-center gap-1"><Car className="w-3 h-3"/> Type de Location</p>
                 <p className="font-bold text-white">Classique</p>
               </div>
            </div>

            {/* Drivers Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Primary Driver */}
              <div className="p-4 rounded-xl border border-yellow-500/50 bg-yellow-500/5 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xs text-yellow-500 font-bold uppercase flex items-center gap-2">
                    <User className="w-4 h-4"/> Conducteur Principal
                  </h3>
                  <button className="text-gray-400 hover:text-white"><Edit2 className="w-4 h-4"/></button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                    <User className="w-5 h-5 text-gray-400"/>
                  </div>
                  <div>
                    <p className="font-bold text-white">erty rtghj</p>
                    <p className="text-xs text-gray-400">+212676776655</p>
                  </div>
                </div>
              </div>

              {/* Secondary Driver */}
              <div className="p-4 rounded-xl border border-gray-800 bg-[#151b2b]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xs text-gray-400 font-bold uppercase flex items-center gap-2">
                    <User className="w-4 h-4"/> Deuxième Conducteur
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Aucun sélectionné</span>
                  <button className="px-3 py-1.5 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg text-xs font-medium transition-colors">
                    Sélectionner
                  </button>
                </div>
              </div>
            </div>

            {/* Time & Dates */}
            <h3 className="text-yellow-500 font-medium mb-4 flex items-center gap-2 text-sm uppercase">
              <Calendar className="w-4 h-4" /> Période & Horaires
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-6 border-b border-gray-800 pb-6">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Période de location</label>
                <div className="text-white text-sm py-2 border-b border-gray-700">14-04-2026 <span className="mx-2 text-gray-500">→</span> 21-04-2026</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Durée (jours)</label>
                <div className="text-white text-sm py-2 border-b border-gray-700">7</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Heure de départ</label>
                <div className="text-white text-sm py-2 border-b border-gray-700">17:04</div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Heure de retour</label>
                <div className="text-white text-sm py-2 border-b border-gray-700">17:04</div>
              </div>
            </div>

            {/* Pricing */}
            <h3 className="text-yellow-500 font-medium mb-4 flex items-center gap-2 text-sm uppercase">
              <CreditCard className="w-4 h-4" /> Tarification
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Prix par jour</label>
                <div className="text-white text-sm py-2 border-b border-gray-700 flex justify-between">
                  480,00 <span className="text-gray-500 text-xs">MAD</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Réduction</label>
                <div className="text-white text-sm py-2 border-b border-gray-700 flex justify-between">
                  0,00 <span className="text-gray-500 text-xs">MAD</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* RIGHT COLUMN: Action Accordions */}
        <div className="space-y-3">
          
          {[
            { 
              id: 'paiements', 
              title: 'Paiements', 
              icon: CreditCard, 
              badge: <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">0 / 3360 MAD</span> 
            },
            { 
              id: 'signature', 
              title: 'Demandes de Signature', 
              icon: PenSquare, 
              badge: <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-500 rounded text-xs border border-yellow-500/30">En attente</span> 
            },
            { 
              id: 'degats', 
              title: 'Dégâts', 
              icon: TriangleAlert, 
              badge: <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30">Aucun dommage</span> 
            },
            { 
              id: 'infractions', 
              title: 'Infractions', 
              icon: ShieldAlert, 
              badge: <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs border border-emerald-500/30">Aucune Infraction</span> 
            },
            { 
              id: 'client_risk', 
              title: 'Conducteur principal', 
              icon: User, 
              badge: <span className="px-2 py-0.5 bg-red-500/20 text-red-500 rounded text-xs border border-red-500/30 font-bold">TRÈS HAUT RISQUE</span> 
            },
            { 
              id: 'voiture_alerts', 
              title: 'Voiture', 
              icon: Car, 
              badge: <span className="px-2 py-0.5 bg-red-500/20 text-red-500 rounded text-xs border border-red-500/30">5 Alertes</span> 
            },
            { 
              id: 'docs', 
              title: 'Documents', 
              icon: File, 
              badge: null 
            }
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
                <div className="flex items-center gap-3">
                  {section.badge}
                  {openSection === section.id ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>
              </button>
              
              {/* Example of expanded content for Signature */}
              {openSection === 'signature' && section.id === 'signature' && (
                <div className="p-4 border-t border-gray-800 bg-[#151b2b]/50">
                  <button className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg text-sm transition-colors">
                    Créer une demande
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}