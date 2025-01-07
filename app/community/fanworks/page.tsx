import Navigation from '@/components/Navigation';
import { Heart, MessageCircle, Star } from 'lucide-react';
import styles from './fanworks.module.css';

export default function FanWorksPage() {
  const fanworks = [
    {
      id: 'tulpar-crew',
      title: 'The Tulpar Crew',
      artist: 'ArtisticDreamer',
      type: 'Art',
      likes: 567,
      comments: 89,
      featured: true,
      tags: ['Digital Art', 'Characters', 'Group Portrait']
    },
    {
      id: 'space-lullaby',
      title: 'Space Lullaby',
      artist: 'MusicMaker',
      type: 'Music',
      likes: 423,
      comments: 56,
      featured: true,
      tags: ['Original Score', 'Ambient', 'Electronic']
    },
    // ... 其他作品
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Fan Works Gallery</h1>
          <p className={styles.subtitle}>
            Explore and celebrate the incredible creative works made by our community.
            From stunning artwork to atmospheric music and engaging stories.
          </p>
        </section>

        <section className={styles.worksSection}>
          <h2>Featured Works</h2>
          <div className={styles.worksList}>
            {fanworks.filter(work => work.featured).map((work) => (
              <div key={work.id} className={styles.workItem}>
                <div className={styles.workHeader}>
                  <h3>{work.title}</h3>
                  <span className={styles.workType}>{work.type}</span>
                </div>
                
                <div className={styles.workDetails}>
                  <span className={styles.artist}>by {work.artist}</span>
                  <div className={styles.tags}>
                    {work.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.workStats}>
                  <span className={styles.stat}>
                    <Heart className={styles.statIcon} />
                    {work.likes}
                  </span>
                  <span className={styles.stat}>
                    <MessageCircle className={styles.statIcon} />
                    {work.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.submitSection}>
          <h2>Share Your Creation</h2>
          <p>Join our creative community and showcase your work to fellow fans.</p>
          <div className={styles.submitLinks}>
            <a 
              href="https://steamcommunity.com/app/2475490/images/" 
              className={styles.submitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className={styles.submitIcon} />
              Submit Your Work
            </a>
          </div>
        </section>
      </main>
    </>
  );
} 