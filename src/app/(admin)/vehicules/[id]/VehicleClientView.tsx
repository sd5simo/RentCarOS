"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, Car, Calendar, CreditCard, Droplets, 
  Settings, Users, Shield, CheckCircle2, ChevronDown, ChevronUp, AlertTriangle, FileText
} from 'lucide-react';
import Link from 'next/link';

// We define the type based on your Prisma Schema
export default function VehicleClientView({ vehicle }: { vehicle: any }) {
  const [openSection, setOpenSection] = useState<string | null>('alertes');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // --- DYNAMIC ALERT LOGIC ---
  // Calculate if Insurance is expiring soon (less than 15 days)
  const daysToInsurance = vehicle.insuranceExpiry 
    ? Math.ceil((new Date(vehicle.insuranceExpiry).getTime() - new Date().getTime()) / (1000 * 3600 * 24))
    : 999;
  const isInsuranceAlert = daysToInsurance <= 15;

  // Calculate if Oil Change is due soon (less than 500 km)
  const kmToOilChange = vehicle.nextOilChangeMileage - vehicle.mileage;
  const isOilAlert = kmToOilChange <= 500;

  const totalAlerts = (isInsuranceAlert ? 1 : 0) + (isOilAlert ? 1 : 0);

  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gray-800 rounded-lg">
          <Car className="w-6 h-6 text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold text-white">Fiche de Voiture : {vehicle.brand} {vehicle.model}</h1>
        <Link href="/vehicules/liste" className="ml-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 border border-gray-700">
          <ArrowLeft className="w-4 h-4" /> Retour à la liste
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Core Information from Database */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl p-6 shadow-lg">
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-semibold text-white">Informations Primaires</h2>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Disponibilité:</span>
                {vehicle.status === 'AVAILABLE' ? (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-medium text-xs">Disponible</span>
                ) : (
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full font-medium text-xs">En Location</span>
                )}
              </div>
            </div>

            <h3 className="text-yellow-500 font-medium mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Identification
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Marque</label>
                <input type="text" readOnly defaultValue={vehicle.brand} className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Modèle & Année</label>
                <input type="text" readOnly defaultValue={`${vehicle.model} (${vehicle.year})`} className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Matricule</label>
                <input type="text" readOnly defaultValue={vehicle.plate} className="w-full bg-transparent border-b border-gray-700 pb-2 text-white font-mono focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Prix de Location par Jour</label>
                <input type="text" readOnly defaultValue={`${vehicle.dailyRate} MAD`} className="w-full bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none text-emerald-400 font-bold" />
              </div>
            </div>

            <h3 className="text-yellow-500 font-medium mb-4 mt-8 flex items-center gap-2">
              <Settings className="w-4 h-4" /> Caractéristiques
            </h3>
            <div className="grid grid-cols-3 gap-6">
               <div>
                  <label className="block text-xs text-gray-400 mb-1">Carburant</label>
                  <p className="text-white text-sm py-1 border-b border-gray-700">{vehicle.fuelType}</p>
               </div>
               <div>
                  <label className="block text-xs text-gray-400 mb-1">Transmission</label>
                  <p className="text-white text-sm py-1 border-b border-gray-700">{vehicle.transmission}</p>
               </div>
               <div>
                  <label className="block text-xs text-gray-400 mb-1">Kilométrage Actuel</label>
                  <p className="text-white text-sm py-1 border-b border-gray-700">{vehicle.mileage} Km</p>
               </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Dynamic Maintenance Alerts */}
        <div className="space-y-4">
          
          <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <button 
              onClick={() => toggleSection('alertes')}
              className="w-full p-4 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className={`w-5 h-5 ${totalAlerts > 0 ? 'text-red-500' : 'text-gray-400'}`} />
                <span className="font-semibold text-white">Alertes et Maintenance</span>
                {totalAlerts > 0 ? (
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-500 border border-red-500/30 rounded text-xs font-bold flex items-center gap-1">
                    <Car className="w-3 h-3"/> {totalAlerts} Alerte(s)
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 rounded text-xs font-bold">
                    Tout est OK
                  </span>
                )}
              </div>
              {openSection === 'alertes' ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            
            {openSection === 'alertes' && (
              <div className="p-4 border-t border-gray-800 bg-[#151b2b]/50 space-y-6">
                
                {/* Insurance Alerts */}
                <div>
                  <h4 className="text-xs text-yellow-500 uppercase font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4"/> Maintenance Basée sur Dates
                  </h4>
                  <div className={`p-3 rounded-lg border-t-2 ${isInsuranceAlert ? 'border-red-500 bg-[#1e2536]' : 'border-emerald-500 bg-[#1e2536]/50'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <Shield className={`w-4 h-4 ${isInsuranceAlert ? 'text-red-500' : 'text-emerald-500'}`}/> Assurance
                      </span>
                      {isInsuranceAlert && (
                        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">Expire dans {daysToInsurance} jours!</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 border-b border-gray-700 pb-1">Date d'expiration</div>
                    <div className="text-sm mt-1">{vehicle.insuranceExpiry ? new Date(vehicle.insuranceExpiry).toLocaleDateString('fr-FR') : 'Non définie'}</div>
                  </div>
                </div>

                {/* Oil Change Alerts */}
                <div>
                  <h4 className="text-xs text-yellow-500 uppercase font-semibold mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4"/> Maintenance Basée sur Kilométrage
                  </h4>
                  <div className={`p-3 rounded-lg border-t-2 ${isOilAlert ? 'border-red-500 bg-[#1e2536]' : 'border-emerald-500 bg-[#1e2536]/50'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <Droplets className={`w-4 h-4 ${isOilAlert ? 'text-red-500' : 'text-emerald-500'}`}/> Vidange
                      </span>
                      {isOilAlert && (
                        <span className="text-xs bg-red-500/20 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">
                          {kmToOilChange <= 0 ? 'En retard!' : `Dans ${kmToOilChange} Km`}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 border-b border-gray-700 pb-1">Prochain Vidange (Km)</div>
                    <div className="text-sm mt-1 font-mono">{vehicle.nextOilChangeMileage}</div>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}