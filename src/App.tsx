import React from 'react';
import { Copy } from 'lucide-react';
import Header from './components/Header';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Socials from './components/Socials';
import MouseLight from './components/MouseLight';
import FloatingParticles from './components/FloatingParticles';
import { useMousePosition } from './hooks/useMousePosition';
import { copyToClipboard } from './utils/clipboard';

function App() {
  const mousePosition = useMousePosition();
  const contractAddress = "soon";

  return (
    <div className="relative min-h-screen bg-black text-gray-100">
      <FloatingParticles />
      
      {/* Content Container */}
      <div className="relative">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] font-bold mb-6 font-horror tracking-wider text-red-600 animate-pulse select-none px-2">
              Darkness
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-12 font-horror select-none px-2">
              Can you see anything?
            </p>
            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg backdrop-blur-sm w-full max-w-md mx-auto">
              <p className="text-xl sm:text-1xl md:text-1xl mb-3 font-gothic">Contract Address</p>
              <div className="flex items-center justify-center gap-2 px-2">
                <p className="font-mono text-xs sm:text-sm break-all">{contractAddress}</p>
                <button
                  onClick={() => copyToClipboard(contractAddress)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors flex-shrink-0"
                >
                  <Copy size={20} />
                </button>
              </div>
            </div>
          </section>

          <HowToBuy />
          <Tokenomics />
          <Socials />
        </main>
      </div>
      
      <MouseLight position={mousePosition} />
    </div>
  );
}

export default App;