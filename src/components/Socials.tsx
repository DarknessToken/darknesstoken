import React from 'react';
import { Twitter, MessageCircle, BarChart3, CircleDollarSign } from 'lucide-react';

const Socials = () => {
  const socials = [
    { icon: <Twitter />, name: 'Twitter', url: 'https://x.com/Darknesstokenn' },
    
  ];

  return (
    <section id="socials" className="py-20">
      <div className="text-center">
        <div className="flex justify-center gap-6 mb-12">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="p-3 bg-gray-900/50 rounded-full hover:bg-red-900/50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <p className="text-xl italic mb-8">
          "When you gaze into the abyss, the abyss gazes back at you."
        </p>
        
        <p className="text-sm text-gray-500">
          © 2024 | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Socials;