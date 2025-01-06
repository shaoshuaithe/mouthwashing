import Navigation from '@/components/Navigation';
import RelatedResources from '@/components/resources/RelatedResources';
import { Download, HardDrive, Shield } from 'lucide-react';
import Link from 'next/link';
import styles from './download.module.css';

export const metadata = {
  title: 'Download | MouthWashing Game - Official Game Downloads',
  description: 'Download MouthWashing Game and its updates. Access all versions, patches, and additional content from official sources.',
  openGraph: {
    title: 'MouthWashing Game Downloads',
    description: 'Official game downloads and updates',
    images: ['/images/resources/download-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/resources/download'
  }
};

interface DownloadItem {
  version: string;
  date: string;
  size: string;
  type: 'Game' | 'Update' | 'Patch';
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  mirrors: Array<{
    name: string;
    url: string;
    speed: string;
  }>;
}

export default function DownloadPage() {
  const downloads: DownloadItem[] = [
    {
      version: '1.1.1',
      date: 'October 14, 2024',
      size: '3 GB',
      type: 'Game',
      icon: <HardDrive className={styles.downloadIcon} />,
      title: 'Full Game + Latest Update',
      description: 'Complete game installation with all current updates and improvements.',
      features: [
        'All game content and features',
        'Latest patches and fixes included',
        'Windows 10/11 64-bit support',
        'All language packs'
      ],
      mirrors: [
        {
          name: 'Steam',
          url: 'https://store.steampowered.com/app/2475490/Mouthwashing',
          speed: 'Fast'
        },
        {
          name: 'Steam Community',
          url: 'https://steamcommunity.com/app/2475490',
          speed: 'Fast'
        }
      ]
    },
    {
      version: '1.1.1',
      date: 'October 14, 2024',
      size: '2.1 GB',
      type: 'Update',
      icon: <Download className={styles.downloadIcon} />,
      title: 'Latest Update Package',
      description: 'Update package for existing installations (v1.0.0 → v1.1.1).',
      features: [
        'Visual enhancements',
        'Performance improvements',
        'Bug fixes',
        'New configuration options'
      ],
      mirrors: [
        {
          name: 'Steam Auto-Update',
          url: 'https://store.steampowered.com/app/2475490/Mouthwashing',
          speed: 'Fast'
        }
      ]
    },
    {
      version: '1.1.1',
      date: 'October 14, 2024',
      size: '45 MB',
      type: 'Update',
      icon: <Shield className={styles.downloadIcon} />,
      title: 'Beta Update Branch',
      description: 'Access the latest beta features and testing builds.',
      features: [
        'Early access to new features',
        'Testing builds',
        'Community feedback',
        'Frequent updates'
      ],
      mirrors: [
        {
          name: 'Steam Beta Branch',
          url: 'https://store.steampowered.com/app/2475490/Mouthwashing',
          speed: 'Fast'
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Downloads</h1>
          <p className={styles.subtitle}>
            Download MouthWashing Game and its updates from official sources.
            Choose your preferred download method and keep your game up to date.
          </p>
        </section>

        <section className={styles.downloadsSection}>
          {downloads.map((item, index) => (
            <div key={index} className={styles.downloadCard}>
              <div className={styles.cardHeader}>
                {item.icon}
                <div className={styles.headerInfo}>
                  <div className={styles.headerMeta}>
                    <span className={styles.version}>v{item.version}</span>
                    <span className={styles.date}>{item.date}</span>
                    <span className={styles.size}>{item.size}</span>
                    <span className={`${styles.type} ${styles[item.type.toLowerCase()]}`}>
                      {item.type}
                    </span>
                  </div>
                  <h2 className={styles.downloadTitle}>{item.title}</h2>
                  <p className={styles.downloadDescription}>{item.description}</p>
                </div>
              </div>

              <div className={styles.featuresList}>
                <h3>What's Included:</h3>
                <ul>
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.mirrors}>
                <h3>Download Mirrors:</h3>
                <div className={styles.mirrorGrid}>
                  {item.mirrors.map((mirror, idx) => (
                    <Link 
                      key={idx}
                      href={mirror.url}
                      className={styles.mirrorLink}
                    >
                      <span className={styles.mirrorName}>{mirror.name}</span>
                      <span className={styles.mirrorSpeed}>{mirror.speed}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.notesSection}>
          <h2>Download Notes</h2>
          <ul>
            <li>Always download from official sources to ensure security</li>
            <li>Verify file integrity after downloading using provided checksums</li>
            <li>Minimum System Requirements:
              <ul>
                <li>OS: Windows 10 64-bit</li>
                <li>Processor: Intel i5-6300HQ or equivalent</li>
                <li>Memory: 8 GB RAM</li>
                <li>Graphics: NVIDIA GTX 560 or equivalent</li>
                <li>Storage: 3 GB available space</li>
              </ul>
            </li>
            <li>Back up your save files before applying major updates</li>
          </ul>
        </section>

        <RelatedResources currentPath="/resources/download" />
      </main>
    </>
  );
} 