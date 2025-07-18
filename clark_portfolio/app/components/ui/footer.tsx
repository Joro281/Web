"use client";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-8 pb-6 flex flex-col items-center font-mono text-sm">
      <div className="text-green-400 mb-4">
        <span className="mr-1">$</span>
        <span className="text-green-300">user</span>
        <span className="text-green-400">@portfolio</span>
        <span className="text-green-400">:~$</span>
        <span className="ml-2 text-green-300">ls -l social_links/</span>
      </div>
      <div className="flex items-center gap-6 mb-2">
        <a
          href="https://www.facebook.com/clark.lim.7739"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-transform duration-200 transform hover:scale-110"
        >
          <Facebook size={18} /> facebook
        </a>
        <a
          href="https://www.instagram.com/jorodotexe/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-transform duration-200 transform hover:scale-110"
        >
          <Instagram size={18} /> instagram
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=clarkjorosslim@gmail.com"
          target="_blank"
          className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-transform duration-200 transform hover:scale-110"
        >
          <Mail size={18} /> email
        </a>
        <a
          href="https://www.linkedin.com/in/clark-joross-lim-b45217374/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-300 hover:text-green-400 transition-transform duration-200 transform hover:scale-110"
        >
          <Linkedin size={18} /> linkedin
        </a>
      </div>
      <div className="text-gray-500 text-xs mt-2">
        © 2025 Clark Lim. All rights reserved.
      </div>
    </footer>
  );
}