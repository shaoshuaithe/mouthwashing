import Navigation from '@/components/Navigation';
import { Download, FileQuestion } from 'lucide-react';
import Link from 'next/link';
import styles from './resources.module.css';

export const metadata = {
  title: 'Resources | MouthWashing Game - Downloads & Support',
  description: 'Access MouthWashing Game resources including downloads, FAQs, and support materials. Find everything you need to enhance your gaming experience.',
  openGraph: {
    title: 'MouthWashing Game Resources',
    description: 'Downloads, FAQs and support materials',
    images: ['/images/resources/resources-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/resources'
  }
};

interface ResourceSection {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ResourcesPage() {
  const sections: ResourceSection[] = [
    {
      title: 'Game Downloads',
      description: 'Download MouthWashing Game and its latest updates from official sources.',
      href: '/resources/download',
      icon: <Download className={styles.sectionIcon} />,
      features: [
        'Full game installation',
        'Latest updates and patches',
        'Beta testing branch',
        'Multiple download mirrors'
      ]
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about gameplay, features, and technical support.',
      href: '/resources/faq',
      icon: <FileQuestion className={styles.sectionIcon} />,
      features: [
        'Gameplay mechanics',
        'Story and characters',
        'Technical requirements',
        'Troubleshooting help'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Resources</h1>
          <p className={styles.subtitle}>
            Access everything you need to enhance your MouthWashing experience.
            Find downloads, guides, and answers to common questions.
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

        <section className={styles.supportSection}>
          <h2>Need More Help?</h2>
          <p>
            Join our community on Steam for additional support and discussions.
            Our team and community members are here to help you.
          </p>
          <div className={styles.supportLinks}>
            <a 
              href="https://steamcommunity.com/app/2475490/discussions/" 
              className={styles.supportLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Steam Community
            </a>
          </div>
        </section>
      </main>
    </>
  );
} 