"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function SlideUpFooter() {
  return (
    <div className="w-full bg-black border-t border-green-600/30">
      <div className="max-w-6xl mx-auto py-12 px-8">
        {/* Navigation, Reach Me, Stalk Me */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Navigate To Section */}
          <div>
            <h3 className="text-green-400 text-sm font-semibold mb-6 uppercase tracking-wider">
              /NAVIGATE_TO
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/home" className="text-gray-400 text-sm hover:text-green-400 transition-colors font-mono block py-1">
                  cd ./home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-green-400 transition-colors font-mono block py-1">
                  cd ./about
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 text-sm hover:text-green-400 transition-colors font-mono block py-1">
                  cd ./projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-green-400 transition-colors font-mono block py-1">
                  cd ./contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Me Section */}
          <div>
            <h3 className="text-green-400 text-sm font-semibold mb-6 uppercase tracking-wider">
              /REACH_ME
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} />
              lim.clark281@gmail.com
            </div>
          </div>

          {/* Stalk Me Section */}
          <div>
            <h3 className="text-green-400 text-sm font-semibold mb-6 uppercase tracking-wider">
              /STALK_ME :&gt;
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/clark.lim.7739" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-green-400 transition-colors flex items-center py-1">
                  <Facebook size={16} className="mr-3" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jorodotexe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-green-400 transition-colors flex items-center py-1">
                  <Instagram size={16} className="mr-3" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/clark-joross-lim-b45217374/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-green-400 transition-colors flex items-center py-1">
                  <Linkedin size={16} className="mr-3" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}