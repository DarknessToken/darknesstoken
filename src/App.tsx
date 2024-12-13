import React, { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';
import Header from './components/Header';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Socials from './components/Socials';
import MouseLight from './components/MouseLight';
import FloatingParticles from './components/FloatingParticles';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contractAddress = "soon";

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Contract address copied!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-100">
      <FloatingParticles />
      
      {/* Content Container */}
      <div className="relative">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-[8rem] font-bold mb-6 font-horror tracking-wider text-red-600 animate-pulse select-none">
              Darkness
            </h1>
            <p className="text-1.6xl md:text-4xl mb-12 font-horror select-none">
              Can you see anything?
            </p>
            <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-2.5x1 mb-4 font-gothic">Contract Address</p>
              <div className="flex items-center justify-center gap-2">
                <p className="font-mono text-sm">{contractAddress}</p>
                <button
                  onClick={() => copyToClipboard(contractAddress)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors"
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