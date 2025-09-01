import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id='footer' className="scroll-mt-24 py-8 bg-primary border-t border-gray-800 text-foreground">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
      
      <div className="flex space-x-6">
        <a href="#" className="text-accent hover:text-accent/80 transition-colors">Home</a>
        <a href="#" className="text-accent hover:text-accent/80 transition-colors">About</a>
        <a href="#" className="text-accent hover:text-accent/80 transition-colors">Projects</a>
        <a href="#" className="text-accent hover:text-accent/80 transition-colors">Contact</a>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;