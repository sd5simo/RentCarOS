"use client";

import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, 
  Search, Filter, Plus, Car, User
} from 'lucide-react';
import Link from 'next/link';

export default function GlobalCalendarPage() {
  // Generate faux dates for the top header (e.g., April 14 to April 30)
  const days = Array.from({ length: 17 }, (_, i) => i + 14);
  
  // Faux vehicles and their active rentals for the timeline
  const vehicles = [
    { id: 1, name: "Toyota 2004", plate: "34547867g", status: "rented" },
    { id: 2, name: "Dacia Logan", plate: "12345678a", status: "available" },
    { id: 3, name: "Renault Clio", plate: "98765432b", status: "rented" },
    { id: 4, name: "Hyundai Tucson", plate: "45678912c", status: "maintenance" },
  ];

  return (
    <div className="p-6 max-w-[1600px] mx-auto text-gray-200">
      
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <CalendarIcon className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Calendrier Global</h1>
            <p className="text-sm text-gray-400 mt-1">Disponibilité du parc automobile</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 border border-gray-700 bg-[#1e2536] rounded-lg hover:bg-gray-800 transition-colors">
            <Filter className="w-4 h-4 text-gray-400" />
          </button>
          <div className="flex items-center bg-[#1e2536] border border-gray-700 rounded-lg p-1">
             <button className="p-1.5 hover:bg-gray-700 rounded transition-colors"><ChevronLeft className="w-4 h-4 text-white"/></button>
             <span className="px-4 text-sm font-bold text-white">Avril 2026</span>
             <button className="p-1.5 hover:bg-gray-700 rounded transition-colors"><ChevronRight className="w-4 h-4 text-white"/></button>
          </div>
          <Link href="/locations/nouveau" className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nouvelle Location
          </Link>
        </div>
      </div>

      {/* Timeline/Gantt Container */}
      <div className="bg-[#1e2536] border border-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
        
        {/* Top Header: Dates */}
        <div className="flex border-b border-gray-800 bg-[#151b2b]">
           {/* Left Corner (Empty space above vehicle names) */}
           <div className="w-[280px] shrink-0 border-r border-gray-800 p-4 flex items-center">
             <div className="relative w-full border border-gray-700 rounded-lg bg-[#1e2536] focus-within:border-yellow-500 transition-colors">
                <Search className="absolute left-2.5 top-2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Chercher un véhicule..." className="w-full bg-transparent pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none" />
             </div>
           </div>
           
           {/* Date Columns */}
           <div className="flex-1 flex overflow-hidden">
             {days.map((day) => (
               <div key={day} className={`flex-1 min-w-[50px] border-r border-gray-800/50 flex flex-col items-center justify-center py-3 ${day === 16 ? 'bg-yellow-500/10' : ''}`}>
                 <span className="text-[10px] text-gray-500 font-bold uppercase mb-1">
                   {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"][day % 7]}
                 </span>
                 <span className={`text-sm font-bold ${day === 16 ? 'text-yellow-500 bg-yellow-500/20 w-7 h-7 flex items-center justify-center rounded-full' : 'text-white'}`}>
                   {day}
                 </span>
               </div>
             ))}
           </div>
        </div>

        {/* Timeline Rows: Vehicles */}
        <div className="flex flex-col bg-[#1e2536] overflow-y-auto max-h-[65vh]">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="flex border-b border-gray-800 group hover:bg-white/[0.02] transition-colors relative">
              
              {/* Vehicle Info Column */}
              <div className="w-[280px] shrink-0 border-r border-gray-800 p-4 flex items-center gap-3 bg-[#151b2b]/50">
                 <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                   <Car className="w-5 h-5 text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="font-bold text-white text-sm truncate">{vehicle.name}</p>
                   <p className="text-xs text-gray-400 font-mono mt-0.5">{vehicle.plate}</p>
                 </div>
              </div>
              
              {/* Timeline Grid Background */}
              <div className="flex-1 flex relative">
                 {/* Background Grid Lines */}
                 {days.map((day) => (
                   <div key={day} className={`flex-1 min-w-[50px] border-r border-gray-800/30 ${day === 16 ? 'bg-yellow-500/5' : ''}`}></div>
                 ))}
                 
                 {/* --- DYNAMIC RENTAL BLOCKS --- */}
                 
                 {/* Example 1: Active Rental Block */}
                 {vehicle.id === 1 && (
                   <div className="absolute top-2 bottom-2 left-[5%] right-[60%] bg-blue-500/20 border border-blue-500/50 rounded-md flex items-center px-3 cursor-pointer hover:bg-blue-500/30 transition-colors shadow-sm z-10 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                      <span className="text-xs font-bold text-blue-400 truncate flex items-center gap-1.5">
                        <User className="w-3 h-3" /> erty rtghj
                      </span>
                   </div>
                 )}

                 {/* Example 2: Maintenance Block */}
                 {vehicle.id === 4 && (
                   <div className="absolute top-2 bottom-2 left-[20%] right-[40%] bg-red-500/10 border border-red-500/30 rounded-md flex items-center px-3 cursor-pointer hover:bg-red-500/20 transition-colors shadow-sm z-10 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                      <span className="text-xs font-bold text-red-400 truncate flex items-center gap-1.5 text-center">
                        🚧 Vidange & Entretien
                      </span>
                   </div>
                 )}
                 
                 {/* Example 3: Reservation Block (Yellow) */}
                 {vehicle.id === 3 && (
                   <div className="absolute top-2 bottom-2 left-[45%] right-[10%] bg-yellow-500/10 border border-yellow-500/30 rounded-md flex items-center px-3 cursor-pointer hover:bg-yellow-500/20 transition-colors shadow-sm z-10 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
                      <span className="text-xs font-bold text-yellow-500 truncate flex items-center gap-1.5">
                        <CalendarIcon className="w-3 h-3" /> Réservation (En attente)
                      </span>
                   </div>
                 )}

              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex items-center gap-6 justify-center text-xs font-medium text-gray-400">
         <span className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> Location en cours</span>
         <span className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div> Réservation</span>
         <span className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Maintenance / Bloqué</span>
      </div>

    </div>
  );
}