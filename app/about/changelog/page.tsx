import RelatedAbout from '@/components/about/RelatedAbout';
import Navigation from '@/components/Navigation';
import { Calendar, CheckCircle2, Download, Wrench } from 'lucide-react';
import Link from 'next/link';
import styles from './changelog.module.css';

export const metadata = {
  title: 'Changelog | MouthWashing Game - Latest Updates & Improvements',
  description: 'Track all updates and improvements to MouthWashing Game. Find the latest features, bug fixes, and upcoming content.',
  openGraph: {
    title: 'MouthWashing Game Changelog',
    description: 'Latest updates and improvements',
    images: ['/images/about/changelog-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/about/changelog'
  }
};

interface UpdateEntry {
  version: string;
  date: string;
  type: 'Major' | 'Feature' | 'Fix' | 'Upcoming';
  icon: React.ReactNode;
  title: string;
  description: string;
  changes: string[];
  downloadUrl?: string;
}

export default function ChangelogPage() {
  const updates: UpdateEntry[] = [
    {
      version: '1.0.0',
      date: 'September 26, 2024',
      type: 'Major',
      icon: <Download className={styles.updateIcon} />,
      title: 'Initial Release',
      description: 'The first release of MouthWashing on Steam platform.',
      changes: [
        'Complete game experience with all core features',
        'Full story campaign with multiple endings',
        'Achievement system implementation',
        'Basic graphics customization options'
      ],
      downloadUrl: '/resources/download?version=1.0.0'
    },
    {
      version: '1.1.0',
      date: 'October 14, 2024',
      type: 'Feature',
      icon: <CheckCircle2 className={styles.updateIcon} />,
      title: 'Visual Enhancement Update',
      description: 'Major improvements to visual customization and gameplay mechanics.',
      changes: [
        'Adjustable Field of View (FOV) settings',
        'New dithering effect options',
        'Developer console access (L3 + R3)',
        'Enhanced visual effects system',
        'Additional graphics configuration options'
      ],
      downloadUrl: '/resources/download?version=1.1.0'
    },
    {
      version: '1.1.1',
      date: 'October 14, 2024',
      type: 'Fix',
      icon: <Wrench className={styles.updateIcon} />,
      title: 'Quality of Life Improvements',
      description: 'Various fixes and improvements based on community feedback.',
      changes: [
        'Achievement tracking system fixes',
        'Enemy AI behavior refinements',
        'Story timeline consistency improvements',
        'Updated localization for all languages',
        'Environmental interaction bug fixes'
      ],
      downloadUrl: '/resources/download?version=1.1.1'
    },
    {
      version: 'Coming Soon',
      date: 'TBA',
      type: 'Upcoming',
      icon: <Calendar className={styles.updateIcon} />,
      title: 'Content Expansion',
      description: 'New content and features planned for future updates.',
      changes: [
        'Original Soundtrack (OST) release',
        'Steam Trading Cards integration',
        'Additional language support',
        'New accessibility features',
        'Performance optimizations'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Changelog</h1>
          <p className={styles.subtitle}>
            Track all updates and improvements to MouthWashing. Stay informed about
            new features, fixes, and upcoming content.
          </p>
        </section>

        <section className={styles.updatesSection}>
          {updates.map((update, index) => (
            <div key={index} className={styles.updateCard}>
              <div className={styles.updateHeader}>
                {update.icon}
                <div className={styles.updateInfo}>
                  <div className={styles.updateMeta}>
                    {update.downloadUrl ? (
                      <Link 
                        href={update.downloadUrl}
                        className={styles.versionLink}
                      >
                        {update.version}
                      </Link>
                    ) : (
                      <span className={styles.version}>{update.version}</span>
                    )}
                    <span className={styles.date}>{update.date}</span>
                    <span className={`${styles.type} ${styles[update.type.toLowerCase()]}`}>
                      {update.type}
                    </span>
                  </div>
                  <h2 className={styles.updateTitle}>{update.title}</h2>
                  <p className={styles.updateDescription}>{update.description}</p>
                </div>
              </div>
              
              <div className={styles.changesList}>
                <h3>Changes</h3>
                <ul>
                  {update.changes.map((change, idx) => (
                    <li key={idx}>{change}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <RelatedAbout currentPath="/about/changelog" />
      </main>
    </>
  );
} 