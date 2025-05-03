import React from 'react';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Developer Credit */}
        <div className="text-sm">
          Developed by{' '}
          <Button
            variant="link"
            className="text-orange-500 hover:text-orange-400 px-1"
            asChild
          >
            <a href="https://github.com/prathm107" target="_blank" rel="noopener noreferrer">
              @prathm107
            </a>
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/prathm107" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-orange-500 transition duration-300" size={20} />
          </a>
          <a href="https://linkedin.com/in/prathm107" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-orange-500 transition duration-300" size={20} />
          </a>
          <a href="https://twitter.com/prathm107" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-orange-500 transition duration-300" size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
