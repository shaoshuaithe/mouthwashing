import Navigation from '@/components/Navigation';
import {
  ArrowRight,
  Download,
  FileText,
  Gamepad,
  Heart,
  Info,
  Map,
  MessageSquare,
  Play,
  Star,
  Users,
  Users2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

interface ReviewCardProps {
  rating: number;
  author: string;
  review: string;
}

interface CommunityCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

export default function HomePage(): ReactElement {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900 z-10" />
          <Image
            src="/bd.jpg"
            alt="MouthWashing Hero"
            className="object-cover"
            fill
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            MouthWashing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Uncover the truth aboard the Tulpar in this psychological horror adventure
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/resources/download"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Download size={24} />
              Get the Game
            </Link>
            <Link 
              href="https://www.youtube.com/watch?v=xbhqUDzjFaQ&t=7s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Play size={24} />
              Watch Trailer
            </Link>
          </div>
        </div>
      </section>

      {/* Main Sections Navigation */}
      <section className="w-full py-20 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Explore the Game</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <Link href="/about" className="group h-full">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 h-full flex flex-col">
                <div className="text-purple-400 mb-4">
                  <Info className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">About Mouthwashing Game</h3>
                <p className="text-gray-300 mb-4 text-left">Discover features, requirements, and latest updates</p>
                <ul className="text-gray-400 space-y-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Mouthwashing Overview
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    System Requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Changelog
                  </li>
                </ul>
              </div>
            </Link>

            {/* Characters Section */}
            <Link href="/characters" className="group h-full">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 h-full flex flex-col">
                <div className="text-purple-400 mb-4">
                  <Users2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Characters</h3>
                <p className="text-gray-300 mb-4 text-left">Meet the key characters in the mouthwashing</p>
                <ul className="text-gray-400 space-y-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Anya
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Curly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Jimmy
                  </li>
                </ul>
              </div>
            </Link>

            {/* Story Section */}
            <Link href="/story" className="group h-full">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 h-full flex flex-col">
                <div className="text-purple-400 mb-4">
                  <FileText className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Story</h3>
                <p className="text-gray-300 mb-4 text-left">Explore the narrative and character relationships</p>
                <ul className="text-gray-400 space-y-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Main Plot
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Character Relations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Story Theories
                  </li>
                </ul>
              </div>
            </Link>

            {/* Community Section */}
            <Link href="/community" className="group h-full">
              <div className="bg-gray-800 p-8 rounded-lg transition-all duration-300 hover:bg-gray-700 h-full flex flex-col">
                <div className="text-purple-400 mb-4">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300 mb-4 text-left">Join the community and share experiences</p>
                <ul className="text-gray-400 space-y-2 mt-auto">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    News
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Discussions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    Fan Works
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-20 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Gamepad />}
              title="Immersive Gameplay"
              description="Experience a unique blend of narrative exploration and psychological horror aboard the Tulpar."
            />
            <FeatureCard
              icon={<Users2 />}
              title="Multiple Perspectives"
              description="Play through the mouthwashing from different crew members' viewpoints, each with their own secrets."
            />
            <FeatureCard
              icon={<FileText />}
              title="Rich Narrative"
              description="Uncover a deep, branching story where your choices shape the fate of the crew."
            />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="w-full py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              image="/1-440-225.jpg"
              title="Major Update 1.2 Released"
              date="December 25, 2024"
              description="MouthWashing storylines, improved graphics, and more await in our latest update."
            />
            <NewsCard
              image="/2-440-225.jpg"
              title="Console Version Announcement"
              date="December 20, 2024"
              description="MouthWashing is coming to PS5 and Xbox Series X|S in 2024."
            />
            <NewsCard
              image="/3-440-225.jpg"
              title="Game Awards Nomination"
              date="December 15, 2024"
              description="MouthWashing nominated for Best Horror Game of 2024."
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/community/news" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Player Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              rating={5}
              author="GameSpot"
              review="A masterpiece of psychological horror that will keep you on the edge of your seat."
            />
            <ReviewCard
              rating={5}
              author="IGN"
              review="Innovative gameplay mechanics combined with a haunting narrative."
            />
            <ReviewCard
              rating={4.5}
              author="PC Gamer"
              review="Sets a new standard for horror gaming with its unique approach."
            />
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="w-full py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/community/discussion" className="group">
              <CommunityCard
                icon={<MessageSquare className="w-12 h-12" />}
                title="Discussion Forums"
                description="Share theories and strategies with other players."
              />
            </Link>
            <Link href="/community/fanworks" className="group">
              <CommunityCard
                icon={<Heart className="w-12 h-12" />}
                title="Fan Creations"
                description="Explore amazing fan art and stories."
              />
            </Link>
            <Link href="/guide" className="group">
              <CommunityCard
                icon={<Map className="w-12 h-12" />}
                title="Guides & Wikis"
                description="Find comprehensive guides and hidden secrets."
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-20 bg-gray-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Begin Your MouthWashing Adventure with Anya and Curly
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Anya, Curly, Jimmy and the crew aboard the Tulpar in this psychological horror adventure. 
            Experience MouthWashing's unique blend of mystery and survival.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources/download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors download-button">
              <Download className="w-5 h-5" />
              <span className="button-text"></span>
            </Link>
            <Link href="/guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors guide-button">
              <Play className="w-5 h-5" />
              <span className="button-text"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="text-purple-400 mb-4">
        {React.cloneElement(icon, { size: 48 })}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function NewsCard({ image, title, date, description }: NewsCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 group">
      <div className="relative">
        <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600 text-white text-sm rounded news-tag">
          <span className="tag-text"></span>
        </div>
        <Image
          src={image}
          alt={title}
          width={440}
          height={225}
          className="w-full h-[225px] object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{date}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function ReviewCard({ rating, author, review }: ReviewCardProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex items-center gap-2 text-yellow-400 mb-4">
        <Star size={24} />
        <span className="text-2xl font-bold">{rating}</span>
      </div>
      <p className="text-xl text-white mb-4 flex-grow">{review}</p>
      <p className="text-gray-400">- {author}</p>
    </div>
  );
}

function CommunityCard({ icon, title, description }: CommunityCardProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-1 h-full flex flex-col">
      <div className="text-purple-400 mb-4">
        {React.cloneElement(icon, { size: 48 })}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
    </div>
  );
}
