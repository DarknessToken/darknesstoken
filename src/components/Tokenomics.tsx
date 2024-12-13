import React from 'react';
import { Flame, Ban, Lock, Coins } from 'lucide-react';

const Tokenomics = () => {
  const features = [
    {
      icon: <Coins className="w-12 h-12" />,
      title: "1 Billion Supply",
      description: "Total token supply"
    },
    {
      icon: <Ban className="w-12 h-12" />,
      title: "Zero Tax",
      description: "No hidden fees"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Contract Revoked",
      description: "Fully decentralized"
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "LP burned",
      description: "Forever locked liquidity"
    }
  ];

  return (
    <section id="tokenomics" className="py-20">
      <h2 className="text-4xl font-horror text-center mb-12">Darknomics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform"
            style={{
              transform: `rotate(${Math.random() * 6 - 3}deg)`
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-red-500">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;