import { ExternalLink } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  characters: [
    { name: 'Anya', href: '/characters/anya' },
    { name: 'Curly', href: '/characters/curly' },
    { name: 'Jimmy', href: '/characters/jimmy' },
    { name: 'Daisuke', href: '/characters/daisuke' },
    { name: 'Swansea', href: '/characters/swansea' },
  ],
  guides: [
    { name: 'Beginner Guide', href: '/guide/beginner' },
    { name: 'Main Story', href: '/guide/walkthrough' },
    { name: 'Achievements', href: '/guide/achievements' },
    { name: 'Endings', href: '/guide/endings' },
  ],
  community: [
    { 
      name: 'Steam Community', 
      href: 'https://steamcommunity.com/app/2475490',
      external: true 
    },
    { 
      name: 'Steam Workshop', 
      href: 'https://steamcommunity.com/app/2475490/workshop/',
      external: true 
    },
    { 
      name: 'Steam Discussions', 
      href: 'https://steamcommunity.com/app/2475490/discussions/',
      external: true 
    },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 py-12 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Characters */}
          <div>
            <h3 className="text-white font-bold mb-4">Characters</h3>
            <ul className="space-y-2">
              {footerLinks.characters.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-bold mb-4">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © 2024 MouthWashing Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
