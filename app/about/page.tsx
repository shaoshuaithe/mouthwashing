import Layout from '@/components/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MouthWashing - Official Game Guide & Wiki',
  description: 'Learn about MouthWashing, the critically acclaimed horror game. Discover its unique features, system requirements, and latest updates.',
  keywords: 'mouthwashing game, horror game, game features, system requirements, game updates',
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">About MouthWashing</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Game Overview</h2>
            <p className="text-gray-300 mb-6">
              MouthWashing is a psychological horror game that blends narrative-driven gameplay with intense survival elements. Set in a mysterious world where reality and nightmare intertwine, players must uncover the truth behind the disappearance of several key characters while maintaining their own sanity.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Immersive psychological horror experience</li>
                <li>Multiple branching storylines and endings</li>
                <li>Complex character relationships and development</li>
                <li>Unique sanity management system</li>
                <li>Atmospheric sound design and visuals</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Latest Updates</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Version 1.2.0</h3>
                <p className="text-gray-300">New content update featuring additional storylines and improved graphics.</p>
                <p className="text-gray-400 text-sm mt-2">Released: December 25, 2024</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Version 1.1.5</h3>
                <p className="text-gray-300">Performance optimizations and bug fixes.</p>
                <p className="text-gray-400 text-sm mt-2">Released: November 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
