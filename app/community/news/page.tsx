import RelatedCommunity from '@/components/community/RelatedCommunity';
import Navigation from '@/components/Navigation';
import { Calendar, Download, Gamepad, MessageCircle, Star, Tag, Trophy } from 'lucide-react';
import styles from './news.module.css';

export const metadata = {
  title: 'News | MouthWashing Game - Latest Updates & Announcements',
  description: 'Stay up to date with the latest MouthWashing Game news, updates, and community announcements. Follow development progress and upcoming features.',
  openGraph: {
    title: 'MouthWashing Game News',
    description: 'Latest updates and announcements',
    images: ['/images/community/news-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/community/news'
  }
};

interface NewsPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: 'Update' | 'Announcement' | 'Community';
  icon: React.ReactNode;
  comments: number;
  likes: number;
  tags: string[];
}

export default function NewsPage() {
  const news: NewsPost[] = [
    {
      id: 'early-access-launch',
      date: 'September 26, 2024',
      title: 'MouthWashing Launches in Early Access',
      excerpt: "We're excited to announce that MouthWashing is now available in Early Access on Steam! Join us on this journey as we continue to develop and improve the game with your feedback.",
      category: 'Announcement',
      icon: <Star className={styles.newsIcon} />,
      comments: 156,
      likes: 423,
      tags: ['Launch', 'Early Access', 'Steam']
    },
    {
      id: 'beta-update-1-1',
      date: 'October 14, 2024',
      title: 'Beta Update 1.1 - Visual Enhancements & New Features',
      excerpt: 'The latest beta update brings significant visual improvements, new gameplay features, and various quality-of-life enhancements based on community feedback.',
      category: 'Update',
      icon: <Calendar className={styles.newsIcon} />,
      comments: 89,
      likes: 245,
      tags: ['Update', 'Beta', 'Features']
    },
    {
      id: 'community-event-1',
      date: 'October 21, 2024',
      title: 'Community Spotlight: Share Your Theories',
      excerpt: 'Join our first community event where players can share and discuss their theories about the game\'s story, mysteries, and hidden meanings.',
      category: 'Community',
      icon: <MessageCircle className={styles.newsIcon} />,
      comments: 234,
      likes: 567,
      tags: ['Event', 'Community', 'Story']
    },
    {
      id: 'halloween-event',
      date: 'October 31, 2024',
      title: 'Halloween Special Event & Steam Sale',
      excerpt: 'Celebrate Halloween with us! Special in-game events and Steam discount available from October 31st to November 7th.',
      category: 'Announcement',
      icon: <Star className={styles.newsIcon} />,
      comments: 178,
      likes: 389,
      tags: ['Event', 'Sale', 'Halloween']
    },
    {
      id: 'patch-1-1-2',
      date: 'November 5, 2024',
      title: 'Patch 1.1.2 - Performance Optimization',
      excerpt: 'This patch focuses on performance improvements, including better GPU utilization and reduced loading times.',
      category: 'Update',
      icon: <Calendar className={styles.newsIcon} />,
      comments: 67,
      likes: 195,
      tags: ['Patch', 'Performance', 'Technical']
    },
    {
      id: 'community-art',
      date: 'November 12, 2024',
      title: 'Community Art Showcase #1',
      excerpt: 'Check out the amazing fan art created by our talented community members! Featured artists will receive special in-game badges.',
      category: 'Community',
      icon: <MessageCircle className={styles.newsIcon} />,
      comments: 312,
      likes: 678,
      tags: ['Art', 'Community', 'Showcase']
    },
    {
      id: 'update-1-2',
      date: 'December 25, 2024',
      title: 'Major Update 1.2 Released',
      excerpt: "New storylines, improved graphics, and more await in our latest update.",
      category: 'Update',
      icon: <Download className={styles.postIcon} />,
      comments: 156,
      likes: 423,
      tags: ['Update', 'New Content', 'Graphics']
    },
    {
      id: 'console-release',
      date: 'December 20, 2024',
      title: 'Console Version Announcement',
      excerpt: "MouthWashing is coming to PS5 and Xbox Series X|S in 2024.",
      category: 'Announcement',
      icon: <Gamepad className={styles.postIcon} />,
      comments: 234,
      likes: 567,
      tags: ['Console', 'PlayStation 5', 'Xbox']
    },
    {
      id: 'awards',
      date: 'December 15, 2024',
      title: 'Game Awards Nomination',
      excerpt: "MouthWashing nominated for Best Horror Game of 2024.",
      category: 'Announcement',
      icon: <Trophy className={styles.postIcon} />,
      comments: 189,
      likes: 445,
      tags: ['Awards', 'Recognition']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Latest News</h1>
          <p className={styles.subtitle}>
            Stay updated with the latest announcements, updates, and community events
            for MouthWashing Game. Follow our development progress and upcoming features.
          </p>
        </section>

        <section className={styles.newsSection}>
          {news.map((post) => (
            <article key={post.id} className={styles.newsCard}>
              <div className={styles.cardHeader}>
                {post.icon}
                <div className={styles.headerInfo}>
                  <div className={styles.headerMeta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={`${styles.category} ${styles[post.category.toLowerCase()]}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className={styles.newsTitle}>{post.title}</h2>
                </div>
              </div>

              <p className={styles.newsExcerpt}>{post.excerpt}</p>

              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  <Tag className={styles.tagIcon} />
                  {post.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.interactions}>
                  <span className={styles.interaction}>
                    <MessageCircle className={styles.interactionIcon} />
                    {post.comments}
                  </span>
                  <span className={styles.interaction}>
                    <Star className={styles.interactionIcon} />
                    {post.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.communitySection}>
          <h2>Join the Discussion</h2>
          <p>
            Want to be part of the conversation? Join our Steam community to discuss
            the latest news and updates with other players.
          </p>
          <div className={styles.communityLinks}>
            <a 
              href="https://steamcommunity.com/app/2475490/discussions/" 
              className={styles.communityLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam Community
            </a>
          </div>
        </section>

        <RelatedCommunity currentPath="/community/news" />
      </main>
    </>
  );
} 