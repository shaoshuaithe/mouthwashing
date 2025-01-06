import RelatedCommunity from '@/components/community/RelatedCommunity';
import Navigation from '@/components/Navigation';
import { Heart, Image, MessageCircle, Music, Pencil, Star } from 'lucide-react';
import styles from './fanworks.module.css';

export const metadata = {
  title: 'Fan Works | MouthWashing Game - Community Creations',
  description: 'Explore amazing fan art, music, stories, and other creative works made by the MouthWashing Game community. Share and celebrate community talent.',
  openGraph: {
    title: 'MouthWashing Game Fan Works',
    description: 'Community art and creative works showcase',
    images: ['/images/community/fanworks-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/community/fanworks'
  }
};

interface FanWork {
  id: string;
  title: string;
  artist: string;
  type: 'Art' | 'Music' | 'Story' | 'Comic';
  thumbnail: string;
  icon: React.ReactNode;
  likes: number;
  comments: number;
  featured: boolean;
  tags: string[];
}

export default function FanWorksPage() {
  const fanworks: FanWork[] = [
    {
      id: 'tulpar-crew',
      title: 'The Tulpar Crew',
      artist: 'ArtisticDreamer',
      type: 'Art',
      thumbnail: '/images/fanworks/tulpar-crew.jpg',
      icon: <Image className={styles.workIcon} />,
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
      thumbnail: '/images/fanworks/space-lullaby.jpg',
      icon: <Music className={styles.workIcon} />,
      likes: 423,
      comments: 56,
      featured: true,
      tags: ['Original Score', 'Ambient', 'Electronic']
    },
    {
      id: 'lost-memories',
      title: 'Lost Memories',
      artist: 'StoryTeller',
      type: 'Story',
      thumbnail: '/images/fanworks/lost-memories.jpg',
      icon: <Pencil className={styles.workIcon} />,
      likes: 345,
      comments: 78,
      featured: false,
      tags: ['Fan Fiction', 'Mystery', 'Character Study']
    }
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

        <section className={styles.featuredSection}>
          <h2>Featured Works</h2>
          <div className={styles.featuredGrid}>
            {fanworks.filter(work => work.featured).map((work) => (
              <article key={work.id} className={styles.featuredCard}>
                <div className={styles.thumbnailContainer}>
                  <img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className={styles.thumbnail}
                  />
                  <div className={styles.thumbnailOverlay}>
                    <span className={`${styles.workType} ${styles[work.type.toLowerCase()]}`}>
                      {work.type}
                    </span>
                  </div>
                </div>
                <div className={styles.workInfo}>
                  <div className={styles.workHeader}>
                    {work.icon}
                    <h3 className={styles.workTitle}>{work.title}</h3>
                  </div>
                  <p className={styles.artistName}>by {work.artist}</p>
                  <div className={styles.workMeta}>
                    <div className={styles.tags}>
                      {work.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.interactions}>
                      <span className={styles.interaction}>
                        <Heart className={styles.interactionIcon} />
                        {work.likes}
                      </span>
                      <span className={styles.interaction}>
                        <MessageCircle className={styles.interactionIcon} />
                        {work.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gallerySection}>
          <h2>Recent Submissions</h2>
          <div className={styles.galleryGrid}>
            {fanworks.map((work) => (
              <article key={work.id} className={styles.galleryCard}>
                <div className={styles.thumbnailContainer}>
                  <img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className={styles.thumbnail}
                  />
                  <div className={styles.thumbnailOverlay}>
                    <span className={`${styles.workType} ${styles[work.type.toLowerCase()]}`}>
                      {work.type}
                    </span>
                  </div>
                </div>
                <div className={styles.workInfo}>
                  <div className={styles.workHeader}>
                    {work.icon}
                    <h3 className={styles.workTitle}>{work.title}</h3>
                  </div>
                  <p className={styles.artistName}>by {work.artist}</p>
                  <div className={styles.workMeta}>
                    <div className={styles.tags}>
                      {work.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.interactions}>
                      <span className={styles.interaction}>
                        <Heart className={styles.interactionIcon} />
                        {work.likes}
                      </span>
                      <span className={styles.interaction}>
                        <MessageCircle className={styles.interactionIcon} />
                        {work.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.submitSection}>
          <h2>Share Your Creation</h2>
          <p>
            Want to showcase your fan art, music, or story? Join our Steam community
            and share your creative works with fellow fans.
          </p>
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

        <RelatedCommunity currentPath="/community/fanworks" />
      </main>
    </>
  );
} 