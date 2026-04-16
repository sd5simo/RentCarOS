"use client";

import React, { useState } from 'react';
import { 
  X, Calendar, MapPin, Gauge, Droplets, 
  Car, Star, CreditCard, ChevronDown, CheckCircle2, AlertCircle
} from 'lucide-react';

interface ReturnRentalModalProps {
  isOpen: boolean;
  onClose: () => void;
  rentalRef: string;
  vehicleName: string;
  plate: string;
  clientName: string;
}

export default function ReturnRentalModal({ isOpen, onClose, rentalRef, vehicleName, plate, clientName }: ReturnRentalModalProps) {
  const [updateVehicleDB, setUpdateVehicleDB] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#151b2b] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-800 bg-[#1e2536]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Car className="w-5 h-5 text-yellow-500" />
            </div>
            <h2 className="text-xl font-bold text-white">Retour de location</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6">
          
          {/* Summary Banner */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-[#1e2536] rounded-xl border border-gray-800">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Location</p>
              <p className="font-bold text-yellow-500">{rentalRef}</p>
              <p className="text-sm text-gray-300">{clientName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Véhicule</p>
              <p className="font-bold text-white">{vehicleName}</p>
              <p className="text-sm text-gray-300">{plate}</p>
            </div>
          </div>

          {/* Core Return Info */}
          <div className="border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-4 bg-[#1e2536] flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-medium">
                <Calendar className="w-5 h-5 text-gray-400" />
                Informations de retour
              </div>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">21/04/2026</span>
            </div>
            
            <div className="p-5 bg-[#151b2b] space-y-5 border-t border-gray-800">
              
              {/* Yellow Warning Box */}
              <div className="p-4 border border-yellow-500/50 bg-yellow-500/10 rounded-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
                <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                   Date de retour prévue
                </h4>
                <p className="text-xl font-bold text-white mb-2">21/04/2026 à 17:04</p>
                <p className="text-sm text-yellow-500/90 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  La modification de la date entraîne une mise à jour de la durée et peut impacter le total de la location.
                </p>
                <button className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg text-sm transition-colors">
                  Modifier la date
                </button>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-xs text-gray-400 mb-1">Lieu retour effectif</label>
                <div className="relative border border-gray-700 rounded-lg bg-transparent focus-within:border-yellow-500 transition-colors">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="w-4 h-4 text-gray-500" />
                  </div>
                  <input type="text" defaultValue="Casablanca" className="w-full bg-transparent pl-10 pr-4 py-2.5 text-white focus:outline-none" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Lieu où le véhicule est effectivement restitué.</p>
              </div>

              {/* Mileage & Fuel Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Kilométrage de retour</label>
                  <div className="relative border border-gray-700 rounded-lg bg-transparent focus-within:border-yellow-500 transition-colors flex items-center">
                    <div className="pl-3">
                      <Gauge className="w-4 h-4 text-gray-500" />
                    </div>
                    <input type="number" defaultValue={0} className="w-full bg-transparent pl-2 pr-4 py-2.5 text-white focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Niveau de carburant au retour</label>
                  <div className="relative border border-gray-700 rounded-lg bg-transparent focus-within:border-yellow-500 transition-colors flex items-center">
                    <div className="pl-3">
                      <Droplets className="w-4 h-4 text-gray-500" />
                    </div>
                    <select className="w-full bg-transparent pl-2 pr-4 py-2.5 text-white focus:outline-none appearance-none">
                      <option value="25%" className="bg-gray-800">25%</option>
                      <option value="50%" className="bg-gray-800">50%</option>
                      <option value="75%" className="bg-gray-800">75%</option>
                      <option value="100%" className="bg-gray-800">Plein (100%)</option>
                    </select>
                    <div className="absolute right-3 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sync to DB Toggle */}
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-gray-800">
                <button 
                  onClick={() => setUpdateVehicleDB(!updateVehicleDB)}
                  className={`w-10 h-6 rounded-full shrink-0 transition-colors relative mt-0.5 ${updateVehicleDB ? 'bg-yellow-500' : 'bg-gray-600'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${updateVehicleDB ? 'left-5' : 'left-1'}`}></div>
                </button>
                <div>
                  <p className="text-sm font-medium text-white">Mettre à jour le kilométrage et le carburant actuels de la voiture</p>
                  <p className="text-xs text-gray-400 mt-1">Si activé, le kilométrage (doit être supérieur au départ) et le niveau de carburant de la voiture seront mis à jour.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Accordion Summaries */}
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-[#1e2536] border border-gray-800 rounded-xl cursor-pointer hover:bg-gray-800/80">
              <div className="flex items-center gap-3 text-white font-medium">
                <Car className="w-5 h-5 text-gray-400" /> État du véhicule
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-xs flex items-center gap-1">
                   <CheckCircle2 className="w-3 h-3" /> Bon état
                </span>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex justify-between items-center p-4 bg-[#1e2536] border border-gray-800 rounded-xl cursor-pointer hover:bg-gray-800/80">
              <div className="flex items-center gap-3 text-white font-medium">
                <Star className="w-5 h-5 text-gray-400" /> Évaluation de la location
                <span className="text-yellow-500 text-sm font-bold flex items-center">5/5 <Star className="w-3 h-3 ml-1 fill-yellow-500" /></span>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex justify-between items-center p-4 bg-[#1e2536] border border-gray-800 rounded-xl cursor-pointer hover:bg-gray-800/80">
              <div className="flex items-center gap-3 text-white font-medium">
                <CreditCard className="w-5 h-5 text-gray-400" /> Paiement (optionnel)
                <span className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded text-xs">Aucun à ajouter</span>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-gray-800 bg-[#1e2536] flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium">
            Annuler
          </button>
          <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
             <CheckCircle2 className="w-5 h-5" /> Confirmer le retour
          </button>
        </div>

      </div>
    </div>
  );
}