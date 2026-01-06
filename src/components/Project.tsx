"use client"
import Image from 'next/image';
import React from 'react';
type ProjectProps = {
  title: string;
  description: string;
  websiteLink: string;
  sourceCodeLink: string;
  imageSrc: string;
  tags?: string[]; // The '?' means it is optional
  isLive?: boolean;
};
const Project = ({ 
  title, 
  description, 
  websiteLink, 
  sourceCodeLink, 
  imageSrc, 
  tags = [],
  isLive = false // Default to false if not provided
}: ProjectProps) => {
  
  const openLink = (url : string) => {
    if (url) window.open(url, "_blank");
  };

  return (

      <div
        // Logic: Only show pointer cursor and allow hover border if it's Live or has Source Code
        // (Adjusted to allow clicking specific buttons even if card click is disabled)
        className={`bg-primary rounded-xl overflow-hidden border border-gray-800 transition-colors block group   relative
          ${isLive ? 'hover:border-accent cursor-pointer' : 'border-gray-800 cursor-default'}
        `}
        // Logic: Only open website on card click if it is Live
        onClick={() => isLive && openLink(websiteLink)}
        tabIndex={isLive ? 0 : -1}
        role={isLive ? "button" : "article"}
        onKeyDown={(e) => {
          if (isLive && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            openLink(websiteLink);
          }
        }}
      >
        
        {/* IMAGE SECTION */}
        <div className="h-48 relative flex items-center justify-center bg-gradient-to-r from-secondary to-accent/30 overflow-hidden">
          
          {/* --- NEW: STATUS BADGE --- */}
          <div className={`absolute top-3 right-3 z-10 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-white shadow-sm
            ${isLive ? 'bg-green-600' : 'bg-orange-500'}
          `}>
            {isLive ? 'LIVE' : 'NOT LIVE'}
          </div>

          <Image
            src={imageSrc}
            alt={title}
            className={`h-full w-full object-cover transition-transform duration-200 
              ${isLive ? 'group-hover:scale-105' : ''} 
            `}
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
          
          <p className="mb-4 text-gray-300 flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links Footer */}
          <div className="flex justify-between mt-auto pt-2 border-t border-gray-800/50 items-center h-10">
            {/* Always show Source Code */}
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium text-sm cursor-pointer"
              // stopPropagation ensures clicking this doesn't trigger the card click
              onClick={(e) => e.stopPropagation()} 
            >
              SOURCE CODE
            </a>

            {/* --- NEW: Only show VIEW link if isLive is true --- */}
            {isLive ? (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors font-medium text-sm cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                VIEW
              </a>
            ) : (
              // Optional: You can put a placeholder text or leave it empty
              <span className="text-gray-500 text-xs italic">
                Development
              </span>
            )}
          </div>
        </div>
      </div>
      
  );
};

export default Project;