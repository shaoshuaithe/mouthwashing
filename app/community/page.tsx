import Navigation from '@/components/Navigation';
import { MessageCircle, Newspaper, Palette, Star } from 'lucide-react';
import Link from 'next/link';
import styles from './community.module.css';

export const metadata = {
  title: 'Community | MouthWashing Game - Join Our Community',
  description: 'Connect with MouthWashing Game community. Stay updated with news, share fan creations, and join discussions with fellow players.',
  openGraph: {
    title: 'MouthWashing Game Community',
    description: 'News, fan works, and community discussions',
    images: ['/images/community/community-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/community'
  }
};

interface CommunitySection {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
  stats: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
  }>;
}

export default function CommunityPage() {
  const sections: CommunitySection[] = [
    {
      title: 'Latest News',
      description: 'Stay updated with the latest announcements, updates, and community events.',
      href: '/community/news',
      icon: <Newspaper className={styles.sectionIcon} />,
      features: [
        'Game updates and patches',
        'Community events and contests',
        'Development insights',
        'Important announcements'
      ],
      stats: [
        {
          label: 'Recent Updates',
          value: '6',
          icon: <Star className={styles.statIcon} />
        },
        {
          label: 'Active Discussions',
          value: '24',
          icon: <MessageCircle className={styles.statIcon} />
        }
      ]
    },
    {
      title: 'Fan Works',
      description: 'Explore amazing fan art, music, stories, and other creative works made by our community.',
      href: '/community/fanworks',
      icon: <Palette className={styles.sectionIcon} />,
      features: [
        'Fan art gallery',
        'Community music',
        'Fan fiction stories',
        'Creative showcases'
      ],
      stats: [
        {
          label: 'Artworks',
          value: '150+',
          icon: <Star className={styles.statIcon} />
        },
        {
          label: 'Contributors',
          value: '45',
          icon: <MessageCircle className={styles.statIcon} />
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Join Our Community</h1>
          <p className={styles.subtitle}>
            Connect with fellow players, stay updated with the latest news,
            and share your creative works with the MouthWashing community.
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

              <div className={styles.statsGrid}>
                {section.stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    {stat.icon}
                    <div className={styles.statInfo}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </section>

        <section className={styles.joinSection}>
          <h2>Get Involved</h2>
          <p>
            Join our active Steam community to discuss the game, share your experiences,
            and connect with other players around the world.
          </p>
          <div className={styles.joinLinks}>
            <a 
              href="https://steamcommunity.com/app/2475490/discussions/" 
              className={styles.joinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className={styles.joinIcon} />
              Steam Community
            </a>
          </div>
        </section>
      </main>
    </>
  );
} 