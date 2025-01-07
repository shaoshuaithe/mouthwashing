import Navigation from '@/components/Navigation';
import { AlertCircle, BookOpen, Map, Package, Puzzle, Trophy } from 'lucide-react';
import Link from 'next/link';
import styles from './guide.module.css';

export const metadata = {
  title: 'Game Guides | MouthWashing Game - Complete Game Guide Collection',
  description: 'Comprehensive collection of guides for MouthWashing Game. Find walkthroughs, achievements, endings, items, puzzles solutions, and troubleshooting help.',
  openGraph: {
    title: 'MouthWashing Game Complete Guide Collection',
    description: 'All guides and walkthroughs in one place',
    images: ['/images/guide/guide-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide'
  }
};

interface GuideSection {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export default function GuidePage() {
  const guides: GuideSection[] = [
    {
      href: '/guide/walkthrough',
      title: 'Walkthrough Guide',
      description: 'Complete chapter-by-chapter walkthrough with all choices and outcomes.',
      icon: <Map className={styles.sectionIcon} />,
      features: [
        'Detailed story progression guide',
        'Key decision points and consequences',
        'Chapter objectives and requirements',
        'Important items and character interactions',
        'Tips for optimal story progression'
      ]
    },
    {
      href: '/guide/achievements',
      title: 'Achievements Guide',
      description: 'Master guide for unlocking all achievements and trophies.',
      icon: <Trophy className={styles.sectionIcon} />,
      features: [
        'Complete achievement list',
        'Detailed unlock requirements',
        'Secret achievement reveals',
        'Difficulty ratings and points',
        'Achievement hunting strategies'
      ]
    },
    {
      href: '/guide/endings',
      title: 'Endings Guide',
      description: 'Discover all possible endings and how to achieve them.',
      icon: <BookOpen className={styles.sectionIcon} />,
      features: [
        'All possible story endings',
        'Choice requirements for each ending',
        'Character relationship impacts',
        'Hidden ending requirements',
        'Consequences and aftermath details'
      ]
    },
    {
      href: '/guide/items',
      title: 'Items Guide',
      description: 'Complete catalog of all items and their uses in the game.',
      icon: <Package className={styles.sectionIcon} />,
      features: [
        'Item locations and acquisition methods',
        'Usage guides and combinations',
        'Rarity classifications',
        'Character-specific items',
        'Quest-related items'
      ]
    },
    {
      href: '/guide/puzzles',
      title: 'Puzzles Guide',
      description: 'Solutions and walkthroughs for all puzzles and challenges.',
      icon: <Puzzle className={styles.sectionIcon} />,
      features: [
        'Step-by-step puzzle solutions',
        'Engineering challenges',
        'Medical mysteries',
        'Security system bypasses',
        'Research puzzles'
      ]
    },
    {
      href: '/guide/troubleshooting',
      title: 'Troubleshooting Guide',
      description: 'Solutions for common issues and technical problems.',
      icon: <AlertCircle className={styles.sectionIcon} />,
      features: [
        'Common problem solutions',
        'Performance optimization tips',
        'Save game issues',
        'Control problems',
        'Bug workarounds'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Game Guides</h1>
          <p className={styles.subtitle}>
            Welcome to the complete collection of MouthWashing Game guides. Find everything you
            need to master the game, from story walkthroughs to technical troubleshooting.
          </p>
        </section>

        <section className={styles.guidesSection}>
          {guides.map((guide) => (
            <Link 
              key={guide.href}
              href={guide.href}
              className={styles.guideCard}
            >
              <div className={styles.guideHeader}>
                {guide.icon}
                <div>
                  <h2 className={styles.guideTitle}>{guide.title}</h2>
                  <p className={styles.guideDescription}>{guide.description}</p>
                </div>
              </div>
              
              <div className={styles.featuresList}>
                <h3>What You'll Find:</h3>
                <ul>
                  {guide.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
} 