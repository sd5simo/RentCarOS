"use client";

import React, { useState, useRef } from 'react';
import { Lock, Check, PenTool, X, Search, ZoomIn, ZoomOut, Download, Printer } from 'lucide-react';

export default function ClientSignaturePage({ params }: { params: { id: string } }) {
  // State to manage the PIN code security gate
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [error, setError] = useState('');

  // Mock unlock function
  const handleUnlock = () => {
    if (pinCode === '3080') {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Code incorrect. Veuillez réessayer.');
    }
  };

  // --- VIEW 1: THE SECURITY GATE ---
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#151b2b] flex items-center justify-center p-4 font-sans text-gray-200">
        <div className="bg-[#1e2536] w-full max-w-md rounded-2xl p-8 border border-gray-800 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30">
              <Lock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white text-center mb-2">Signature électronique</h1>
          <p className="text-gray-400 text-center text-sm mb-8">
            Entrez le code d'accès à 4 chiffres fourni par l'agence.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-xs text-gray-400 mb-1 text-center">Code d'accès</label>
              <input 
                type="text" 
                maxLength={4}
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="• • • •"
                className="w-full bg-[#151b2b] border border-gray-700 rounded-lg py-4 text-center text-2xl tracking-[1em] font-bold text-white focus:outline-none focus:border-yellow-500 transition-colors"
              />
              {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
            </div>

            <button 
              onClick={handleUnlock}
              className="w-full py-3.5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" /> Vérifier le code
            </button>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-6">
            Conseil : sur mobile, tournez l'écran en mode paysage pour mieux lire le PDF.
          </p>
        </div>
      </div>
    );
  }

  // --- VIEW 2: THE SIGNATURE WORKSPACE ---
  return (
    <div className="min-h-screen bg-[#151b2b] flex flex-col font-sans text-gray-200">
      
      {/* Header */}
      <header className="bg-[#1e2536] border-b border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
             <PenTool className="w-5 h-5 text-emerald-400" />
           </div>
           <div>
             <h1 className="text-white font-bold leading-tight">Contrat de location</h1>
             <p className="text-xs text-gray-400">Vérifiez le document puis signez en bas.</p>
           </div>
        </div>
        <div className="px-3 py-1 bg-[#151b2b] border border-gray-700 rounded text-sm text-gray-300 font-mono">
          CTR-2026000001
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
        
        {/* Left: PDF Viewer */}
        <div className="lg:col-span-2 bg-[#1e2536] border border-gray-800 rounded-xl flex flex-col overflow-hidden h-[85vh]">
          {/* PDF Toolbar */}
          <div className="p-3 bg-[#1e2536] border-b border-gray-800 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
               <FileTextIcon className="w-4 h-4 text-gray-400"/> Aperçu du contrat
            </div>
            <div className="flex items-center gap-4 text-gray-400">
               <ZoomOut className="w-4 h-4 cursor-pointer hover:text-white" />
               <span className="text-sm">100 %</span>
               <ZoomIn className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>
          
          {/* PDF Mock Area - Scrollable */}
          <div className="flex-1 bg-gray-900 overflow-y-auto p-4 md:p-8 flex justify-center">
             {/* A4 Paper Mock */}
             <div className="bg-white w-full max-w-[800px] aspect-[1/1.414] shadow-2xl p-10 text-black">
                <div className="border-b-2 border-blue-800 pb-4 mb-4 flex justify-between items-end">
                   <div>
                     <h2 className="text-xl font-bold text-blue-900">CONTRAT N°: CTR-2026000001</h2>
                     <p className="text-xs text-gray-600">Le 14/04/2026 17:09 à Casablanca.</p>
                   </div>
                   <h1 className="text-2xl font-black text-blue-900 tracking-tighter">kharrazi</h1>
                </div>
                {/* Mock content representing the PDF */}
                <h3 className="font-bold text-blue-800 border-b border-blue-200 mb-2 uppercase text-sm">Véhicule de Location</h3>
                <div className="grid grid-cols-4 gap-4 text-xs mb-6">
                  <div><span className="font-bold">Libellé</span><br/>Toyota 2004</div>
                  <div><span className="font-bold">Matricule</span><br/>34547867g</div>
                  <div><span className="font-bold">Carburant</span><br/>Diesel</div>
                  <div><span className="font-bold">Transmission</span><br/>Manuelle</div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-blue-800 border-b border-blue-200 mb-2 uppercase text-sm">Locataire Principal</h3>
                    <p className="text-xs leading-relaxed">
                      <span className="font-bold">Nom & Prénom:</span> erty rtghj<br/>
                      <span className="font-bold">Téléphone:</span> +212676776655
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 border-b border-blue-200 mb-2 uppercase text-sm">Deuxième Conducteur</h3>
                    <p className="text-xs text-gray-500">Non renseigné</p>
                  </div>
                </div>

                <div className="mt-auto pt-20 grid grid-cols-2 gap-8 text-center">
                   <div>
                     <p className="font-bold text-xs mb-10">SIGNATURE DU CLIENT</p>
                     <div className="border-b border-gray-400 w-48 mx-auto"></div>
                   </div>
                   <div>
                     <p className="font-bold text-xs mb-10">SIGNATURE DE L'AGENCE</p>
                     <div className="border-b border-gray-400 w-48 mx-auto"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Actions & Signature Pad */}
        <div className="space-y-4">
           
           <div className="p-5 bg-[#1e2536] border border-gray-800 rounded-xl">
             <div className="flex justify-between items-center mb-3">
               <span className="text-sm text-gray-400">Client principal</span>
               <span className="text-sm text-white font-bold">erty rtghj</span>
             </div>
             <div className="flex justify-between items-center mb-3">
               <span className="text-sm text-gray-400">Deuxième conducteur</span>
               <span className="text-sm text-gray-500">Non renseigné</span>
             </div>
             <div className="flex justify-between items-center pt-3 border-t border-gray-800">
               <span className="text-sm text-gray-400">Expiration</span>
               <span className="text-sm text-red-400 font-bold">16/04/2026 à 16:09</span>
             </div>
           </div>

           {/* Signature Box */}
           <div className="p-5 bg-[#1e2536] border border-gray-800 rounded-xl">
             <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-white">Votre signature</h3>
               <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded border border-yellow-500/20">Signataire : erty rtghj</span>
             </div>
             
             <p className="text-sm text-gray-400 mb-3">Signez dans le cadre ci-dessous (doigt ou stylet).</p>
             
             {/* The actual canvas area (Mocked visually) */}
             <div className="w-full h-48 bg-[#151b2b] border border-gray-700 rounded-lg relative overflow-hidden mb-4 group">
               {/* Controls */}
               <div className="absolute top-2 left-2 flex gap-2">
                 <button className="p-1.5 bg-gray-800 hover:bg-gray-700 rounded text-yellow-500 transition-colors"><PenTool className="w-4 h-4"/></button>
                 <button className="p-1.5 bg-gray-800 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"><X className="w-4 h-4"/></button>
               </div>
               
               {/* Faux Signature (Just for visual demo) */}
               <div className="absolute inset-0 flex items-center justify-center opacity-50">
                 <svg viewBox="0 0 400 150" className="w-full h-full stroke-blue-500" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 50 100 C 80 50, 100 20, 150 80 S 200 130, 250 60 S 300 20, 350 100" />
                    <path d="M 120 40 L 140 120" />
                 </svg>
               </div>
               
               <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-600 font-mono">Zone de signature</div>
             </div>

             <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mb-3">
                <PenTool className="w-5 h-5" /> Signer le contrat
             </button>
             
             <button className="w-full py-3 bg-transparent border border-red-500/50 hover:bg-red-500/10 text-red-500 font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                <X className="w-5 h-5" /> Refuser
             </button>
           </div>

        </div>

      </div>
    </div>
  );
}

// Quick Icon Helper
function FileTextIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" x2="8" y1="13" y2="13"/>
      <line x1="16" x2="8" y1="17" y2="17"/>
      <line x1="10" x2="8" y1="9" y2="9"/>
    </svg>
  );
}