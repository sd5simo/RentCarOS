"use client";

import React, { useState } from 'react';
import { 
  Users, Search, Download, Plus, Filter, 
  Eye, Trash2, Check, X, AlertCircle 
} from 'lucide-react';
import Link from 'next/link';

export default function ClientsListPage() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Faux data to match the screenshot
  const clients = [
    {
      id: "1",
      name: "erty rtghj",
      phone: "+212676776655",
      type: "Particulier",
      agency: "kharrazi • Casablanca",
      debt: 3360,
      createdAt: "14-04-2026 à 16:06"
    },
    {
      id: "2",
      name: "rty dfg",
      phone: "+212634565344",
      type: "Particulier",
      agency: "kharrazi • Casablanca",
      debt: 0,
      createdAt: "14-04-2026 à 16:14"
    }
  ];

  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-gray-400" />
          <h1 className="text-2xl font-bold text-white">Liste des clients</h1>
        </div>
        <div className="flex gap-3">
          <Link href="/clients/nouveau" className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nouveau client
          </Link>
          <button 
            onClick={() => setIsExportModalOpen(true)}
            className="px-4 py-2 bg-transparent border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Exporter
          </button>
        </div>
      </div>

      {/* Advanced Filters Top Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="lg:col-span-2">
          <label className="block text-[10px] uppercase text-gray-500 font-bold mb-1">Rechercher...</label>
          <div className="relative border border-gray-700 rounded-lg bg-[#151b2b] focus-within:border-yellow-500 transition-colors">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Nom, Téléphone, CNIE, Passeport, Permis" className="w-full bg-transparent pl-9 pr-4 py-2 text-sm text-white focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-[10px] uppercase text-gray-500 font-bold mb-1">Filtrer par Agence</label>
          <select className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-yellow-500 appearance-none">
            <option>Tout</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase text-gray-500 font-bold mb-1">Filtrer par Disponibilité</label>
          <select className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-yellow-500 appearance-none">
            <option>Tout</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase text-gray-500 font-bold mb-1">Filtrer par Dettes</label>
          <select className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-yellow-500 appearance-none">
            <option>Tout</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase text-gray-500 font-bold mb-1">Filtrer par Type</label>
          <select className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-yellow-500 appearance-none">
            <option>Tout</option>
          </select>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-xs uppercase text-gray-500 bg-[#151b2b]/50">
                <th className="p-4 font-medium">Client</th>
                <th className="p-4 font-medium">Statut & Risque</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-yellow-500/10 rounded-lg mt-1">
                        <UserIcon className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base">{client.name}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mt-1 text-gray-400">
                           <span className="flex items-center gap-1">📞 {client.phone}</span>
                           <span className="flex items-center gap-1">📍 {client.agency}</span>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1">Créé le {client.createdAt}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                     <div className="flex flex-col gap-2 items-start">
                        <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">{client.type}</span>
                        {client.debt > 0 ? (
                          <span className="px-2 py-0.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded text-xs font-bold">Dette: {client.debt} MAD</span>
                        ) : (
                          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded text-xs font-medium flex items-center gap-1"><Check className="w-3 h-3"/> Sans dettes</span>
                        )}
                     </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- EXPORT MODAL --- */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1e2536] w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-800">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-gray-800 bg-[#151b2b]">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-bold text-white">Exporter</h2>
              </div>
              <button onClick={() => setIsExportModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Info Box */}
              <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center gap-3 text-blue-400 text-sm font-medium">
                <AlertCircle className="w-5 h-5" />
                Exportation des données des 2 client(s) affiché(s) dans le tableau.
              </div>

              {/* Select Toggles */}
              <div className="flex gap-3 mb-6">
                <button className="px-4 py-1.5 border border-white text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                  Tout sélectionner
                </button>
                <button className="px-4 py-1.5 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Tout désélectionner
                </button>
              </div>

              {/* Checkbox Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { id: 'id', label: 'Identification', desc: 'Nom complet / Entreprise • Téléphone • Type client • Sexe • Date de Naissance' },
                  { id: 'contact', label: 'Contact', desc: 'Email' },
                  { id: 'docs', label: 'Documents', desc: 'CNIE • Permis • Passeport • ICE' },
                  { id: 'legal', label: 'Légal', desc: 'RC • IF • Raison sociale' },
                  { id: 'address', label: 'Adresse', desc: 'Nationalité • Ville • Adresse' },
                  { id: 'agency', label: 'Agence', desc: 'Agence (Nom, Ville)' },
                  { id: 'risk', label: 'Risque & statut', desc: 'Blacklist • Infractions • Note moyenne' },
                  { id: 'behavior', label: 'Comportement', desc: 'Comportements • Cautions' },
                  { id: 'stats', label: 'Statistiques', desc: 'Locations • Réservations • Actif' },
                  { id: 'finance', label: 'Finance', desc: 'Chiffre d\'affaires • Impayés' },
                  { id: 'meta', label: 'Métadonnées', desc: 'Créé le' }
                ].map((item) => (
                  <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-1">
                      <input type="checkbox" defaultChecked className="w-4 h-4 border-gray-600 rounded bg-transparent focus:ring-emerald-500 text-emerald-500 appearance-none checked:bg-emerald-500 transition-colors peer" />
                      <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5 pointer-events-none opacity-0 peer-checked:opacity-100" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-800 bg-[#151b2b] flex justify-end gap-3">
              <button onClick={() => setIsExportModalOpen(false)} className="px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium">
                Annuler
              </button>
              <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                 <Download className="w-4 h-4" /> Exporter sur Excel
              </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

function UserIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}