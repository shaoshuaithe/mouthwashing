import { siteConfig } from "@/config/site";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Game Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo-vertical.png"
              alt="MouthWashing Logo"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              Experience the psychological horror aboard the Tulpar. Uncover dark secrets, face your fears, and survive the nightmare in MouthWashing.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/mouthwashing" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://discord.gg/mouthwashing" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://youtube.com/mouthwashing" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="https://instagram.com/mouthwashing" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://github.com/mouthwashing" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About the Game
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/eula" className="text-gray-400 hover:text-white transition-colors">
                  EULA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-2">
              <span>Developed by</span>
              <Link href={siteConfig.url} className="text-purple-400 hover:text-purple-300">
                {siteConfig.creator}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
