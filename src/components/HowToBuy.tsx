import React from 'react';
import { Wallet, ArrowRightCircle, Coins } from 'lucide-react';

const HowToBuy = () => {
  const steps = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Step 1",
      description: "Download Phantom wallet or your wallet of choice from the app store for free. Desktop users, download the Google Chrome extension by going to the Phantom app"
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Step 2",
      description: "Have SOL in your wallet to switch to $DRKS. If you don't have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and add it to your wallet."
    },
    {
      icon: <ArrowRightCircle className="w-12 h-12" />,
      title: "Step 3",
      description: "Go to moonshot inside your Phantom app. Connect your wallet. Paste the $DRKS, token address into moonshot, and confirm"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20">
      <h2 className="text-4xl font-horror text-center mb-12">How to Buy</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-red-500">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuy;