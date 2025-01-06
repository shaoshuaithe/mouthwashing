import Navigation from '@/components/Navigation';
import RelatedCommunity from '@/components/community/RelatedCommunity';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import styles from './discussion.module.css';

export const metadata = {
  title: 'Community Discussion | MouthWashing Game - Player Feedback & Conversations',
  description: 'Join the MouthWashing Game community discussion. Share your experiences, discover player insights, and engage with fellow gamers about gameplay, story, and more.',
  openGraph: {
    title: 'MouthWashing Game Community Discussion',
    description: 'Player discussions and community feedback',
    images: ['/images/community/discussion-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/community/discussion'
  }
};

interface DiscussionTopic {
  id: string;
  title: string;
  category: 'Story' | 'Gameplay' | 'Technical' | 'Feedback';
  excerpt: string;
  engagement: {
    replies: number;
    likes: number;
  };
  tags: string[];
}

export default function DiscussionPage() {
  const topics: DiscussionTopic[] = [
    {
      id: 'narrative-depth',
      title: 'Story Elements and Character Development',
      category: 'Story',
      excerpt: 'Players discuss the intricate narrative and character arcs throughout their journey on the Tulpar.',
      engagement: {
        replies: 234,
        likes: 567
      },
      tags: ['Story', 'Characters', 'Plot']
    },
    {
      id: 'visual-atmosphere',
      title: 'Visual Design and Atmosphere',
      category: 'Gameplay',
      excerpt: 'Exploring the artistic direction and environmental storytelling in different ship locations.',
      engagement: {
        replies: 189,
        likes: 445
      },
      tags: ['Graphics', 'Design', 'Atmosphere']
    },
    {
      id: 'gameplay-mechanics',
      title: 'Gameplay Features Discussion',
      category: 'Gameplay',
      excerpt: 'Share your experiences with game mechanics and puzzle-solving elements.',
      engagement: {
        replies: 156,
        likes: 389
      },
      tags: ['Mechanics', 'Puzzles', 'Features']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Community Discussion</h1>
          <p className={styles.subtitle}>
            Join the conversation about MouthWashing Game. Share your thoughts,
            experiences, and connect with other players exploring the mysteries
            of the Tulpar.
          </p>
        </section>

        <section className={styles.topicsSection}>
          {topics.map((topic) => (
            <article key={topic.id} className={styles.topicCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.topicTitle}>{topic.title}</h2>
                <span className={styles.category}>{topic.category}</span>
              </div>
              
              <p className={styles.topicExcerpt}>{topic.excerpt}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {topic.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.engagement}>
                  <span className={styles.stat}>
                    <MessageCircle className={styles.statIcon} />
                    {topic.engagement.replies}
                  </span>
                  <span className={styles.stat}>
                    <ThumbsUp className={styles.statIcon} />
                    {topic.engagement.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.joinSection}>
          <h2>Join the Discussion</h2>
          <p>
            Want to share your thoughts or ask questions? Join our Steam community
            to participate in these discussions and more.
          </p>
          <div className={styles.joinLinks}>
            <a 
              href="https://steamcommunity.com/app/2475490/discussions/" 
              className={styles.joinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam Community
            </a>
          </div>
        </section>

        <RelatedCommunity currentPath="/community/discussion" />
      </main>
    </>
  );
} 