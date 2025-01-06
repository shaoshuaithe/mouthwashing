import Navigation from '@/components/Navigation';
import { BookOpen, Cpu, FileText } from 'lucide-react';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
  title: 'About | MouthWashing Game - Game Information Hub',
  description: 'Learn everything about MouthWashing Game. Find game overview, system requirements, and latest updates.',
  openGraph: {
    title: 'About MouthWashing Game',
    description: 'Complete information hub for MouthWashing Game',
    images: ['/images/about/about-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/about'
  }
};

interface AboutSection {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
}

export default function AboutPage() {
  const sections: AboutSection[] = [
    {
      title: 'Game Overview',
      description: 'Discover the unique world and features of MouthWashing Game.',
      href: '/about/overview',
      icon: <BookOpen className={styles.sectionIcon} />,
      features: [
        'Story and setting details',
        'Core gameplay mechanics',
        'Key features and highlights',
        'Visual style and atmosphere'
      ]
    },
    {
      title: 'System Requirements',
      description: 'Check if your system can run MouthWashing Game.',
      href: '/about/requirements',
      icon: <Cpu className={styles.sectionIcon} />,
      features: [
        'Minimum specifications',
        'Recommended hardware',
        'Supported platforms',
        'Additional requirements'
      ]
    },
    {
      title: 'Changelog',
      description: 'Track all updates and improvements to the game.',
      href: '/about/changelog',
      icon: <FileText className={styles.sectionIcon} />,
      features: [
        'Version history',
        'Latest features',
        'Bug fixes and improvements',
        'Upcoming updates'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>About MouthWashing</h1>
          <p className={styles.subtitle}>
            Everything you need to know about MouthWashing Game. Explore game details,
            check system requirements, and stay updated with the latest changes.
          </p>
        </section>

        <section className={styles.sectionsGrid}>
          {sections.map((section) => (
            <Link 
              key={section.href}
              href={section.href}
              className={styles.sectionCard}
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
