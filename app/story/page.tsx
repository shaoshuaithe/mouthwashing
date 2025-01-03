import Navigation from '@/components/Navigation';
import { BookOpen, Clock, Lock, Users } from 'lucide-react';
import Link from 'next/link';
import styles from './story.module.css';

export const metadata = {
  title: 'Story Hub | MouthWashing Game - Complete Narrative Guide',
  description: 'Explore every aspect of MouthWashing Game\'s story - from plot analysis to character relationships, hidden secrets, and complete timeline.',
  openGraph: {
    title: 'MouthWashing Game Story Hub',
    description: 'Your complete guide to the game\'s narrative',
    images: ['/images/story/story-hub-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/story'
  }
};

interface StorySection {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

export default function StoryPage() {
  const sections: StorySection[] = [
    {
      title: 'Story Analysis',
      description: 'Deep dive into themes, symbolism, and hidden meanings throughout the narrative.',
      href: '/story/analysis',
      icon: <BookOpen className={styles.sectionIcon} />,
      features: [
        'Thematic exploration',
        'Character motivations',
        'Symbolic interpretations',
        'Plot structure analysis'
      ],
      color: 'blue'
    },
    {
      title: 'Main Plot',
      description: 'Follow the complete story from the initial mission to its dramatic conclusion.',
      href: '/story/main-plot',
      icon: <BookOpen className={styles.sectionIcon} />,
      features: [
        'Key story events',
        'Major plot points',
        'Character arcs',
        'Critical decisions'
      ],
      color: 'purple'
    },
    {
      title: 'Character Relationships',
      description: 'Explore the complex dynamics and evolving bonds between crew members.',
      href: '/story/relationships',
      icon: <Users className={styles.sectionIcon} />,
      features: [
        'Crew dynamics',
        'Relationship development',
        'Conflict analysis',
        'Alliance patterns'
      ],
      color: 'green'
    },
    {
      title: 'Hidden Secrets',
      description: 'Uncover the mysteries and revelations hidden throughout the game.',
      href: '/story/secrets',
      icon: <Lock className={styles.sectionIcon} />,
      features: [
        'Hidden locations',
        'Secret documents',
        'Environmental clues',
        'Mystery solutions'
      ],
      color: 'amber'
    },
    {
      title: 'Story Timeline',
      description: 'Track the chronological progression of events throughout the narrative.',
      href: '/story/timeline',
      icon: <Clock className={styles.sectionIcon} />,
      features: [
        'Event chronology',
        'Time-based revelations',
        'Cause and effect chains',
        'Parallel storylines'
      ],
      color: 'red'
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Story Guide</h1>
          <p className={styles.subtitle}>
            Dive deep into every aspect of MouthWashing Game's narrative. Explore plot details,
            character relationships, hidden secrets, and the complete timeline of events.
          </p>
        </section>

        <section className={styles.sectionsGrid}>
          {sections.map((section) => (
            <Link 
              key={section.href}
              href={section.href}
              className={`${styles.sectionCard} ${styles[section.color]}`}
            >
              <div className={styles.cardHeader}>
                {section.icon}
                <h2 className={styles.cardTitle}>{section.title}</h2>
              </div>
              
              <p className={styles.cardDescription}>{section.description}</p>
              
              <ul className={styles.featureList}>
                {section.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
} 