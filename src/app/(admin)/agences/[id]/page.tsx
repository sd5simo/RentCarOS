"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, Building2, MapPin, Phone, Mail, 
  Link as LinkIcon, QrCode, Car, Users, 
  CreditCard, CheckCircle2, Edit2, ChevronDown, ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function AgencyDetailsPage({ params }: { params: { id: string } }) {
  const [openSection, setOpenSection] = useState<string | null>('employes');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <Building2 className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              Fiche d'Agence : kharrazi
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3"/> Active
              </span>
            </h1>
            <p className="text-sm text-gray-400 mt-1">Créée le 14/04/2026</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-700 bg-[#1e2536] hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
            <Edit2 className="w-4 h-4" /> Modifier l'agence
          </button>
          <Link href="/agences/liste" className="px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Retour à la liste
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Core Info & Visuals */}
        <div className="xl:col-span-2 space-y-6">
          
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
              <Building2 className="w-5 h-5 text-gray-400" /> Informations Générales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               {/* Contact Info */}
               <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Nom de l'agence</label>
                    <p className="text-white text-base py-1 border-b border-gray-700">kharrazi</p>
                  </div>
                  <div>
                    {/* FIXED: Closed with </label> */}
                    <label className="block text-xs uppercase text-gray-500 font-bold mb-1 flex items-center gap-1"><Phone className="w-3 h-3"/> Téléphone</label>
                    <p className="text-white text-base py-1 border-b border-gray-700">+212 600 000 000</p>
                  </div>
                  <div>
                    {/* FIXED: Closed with </label> */}
                    <label className="block text-xs uppercase text-gray-500 font-bold mb-1 flex items-center gap-1"><Mail className="w-3 h-3"/> Email</label>
                    <p className="text-white text-base py-1 border-b border-gray-700">contact@kharrazi-rent.ma</p>
                  </div>
                  <div>
                    {/* FIXED: Closed with </label> */}
                    <label className="block text-xs uppercase text-gray-500 font-bold mb-1 flex items-center gap-1"><MapPin className="w-3 h-3"/> Ville</label>
                    <p className="text-white text-base py-1 border-b border-gray-700">Casablanca</p>
                  </div>
               </div>

               {/* Right Side Info & QR Code */}
               <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase text-gray-500 font-bold mb-1">Adresse complète</label>
                    <p className="text-white text-sm py-1 border-b border-gray-700 leading-relaxed">
                      123 Boulevard d'Anfa,<br />Quartier Gauthier,<br />Casablanca 20000, Maroc
                    </p>
                  </div>

                  {/* QR Code Mock */}
                  <div className="mt-6 p-4 border border-gray-700 rounded-xl bg-[#151b2b] flex items-center gap-4">
                     <div className="p-2 bg-white rounded-lg shrink-0">
                       <QrCode className="w-16 h-16 text-black" />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-white mb-1">QR Code de l'agence</p>
                       <p className="text-xs text-gray-400 mb-2">Scannez pour obtenir l'adresse et le contact.</p>
                       <button className="text-xs text-yellow-500 hover:text-yellow-400 font-medium flex items-center gap-1">
                         <LinkIcon className="w-3 h-3"/> Copier le lien
                       </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Google Maps Placeholder */}
            <h3 className="text-yellow-500 font-medium mb-4 flex items-center gap-2 text-sm uppercase border-t border-gray-800 pt-6">
              <MapPin className="w-4 h-4" /> Localisation
            </h3>
            <div className="w-full h-64 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden relative group">
               {/* Faux Map Background */}
               <div className="absolute inset-0 opacity-30" style={{
                 backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                 backgroundSize: '24px 24px'
               }}></div>
               <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,197,66,0.5)]">
                     <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="bg-[#151b2b] px-3 py-1 text-xs text-white rounded shadow-lg border border-gray-700">kharrazi - Casablanca</span>
               </div>
               <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-gray-900 text-xs font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                 Ouvrir dans Google Maps
               </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stats & Accordions */}
        <div className="space-y-4">
          
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Car className="w-4 h-4" />
                <span className="text-xs uppercase font-bold">Flotte</span>
              </div>
              <p className="text-2xl font-bold text-white">24</p>
              <p className="text-[10px] text-emerald-500 mt-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> 18 Disponibles</p>
            </div>
            
            <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <CreditCard className="w-4 h-4" />
                <span className="text-xs uppercase font-bold">CA du mois</span>
              </div>
              <p className="text-xl font-bold text-white">45K <span className="text-xs text-gray-500">MAD</span></p>
              <p className="text-[10px] text-emerald-500 mt-1">↑ +12% vs mois dernier</p>
            </div>
          </div>

          {/* Accordions */}
          {[
            { 
              id: 'employes', 
              title: 'Employés rattachés', 
              icon: Users, 
              badge: <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">3</span> 
            },
            { 
              id: 'voitures', 
              title: 'Véhicules de l\'agence', 
              icon: Car, 
              badge: <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">24</span> 
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
              
              {/* Employee List Mock */}
              {openSection === 'employes' && section.id === 'employes' && (
                <div className="border-t border-gray-800 bg-[#151b2b]/50">
                   <div className="p-3 border-b border-gray-800 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold">AM</div>
                        <div>
                          <p className="text-sm font-medium text-white">Ahmed Manager</p>
                          <p className="text-[10px] text-yellow-500">Gérant</p>
                        </div>
                      </div>
                   </div>
                   <div className="p-3 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold">SA</div>
                        <div>
                          <p className="text-sm font-medium text-white">Sara Agent</p>
                          <p className="text-[10px] text-gray-400">Agent de location</p>
                        </div>
                      </div>
                   </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}