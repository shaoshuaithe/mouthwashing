import { BookOpen, Clock, Lock, Users } from 'lucide-react';
import Link from 'next/link';
import styles from './RelatedStories.module.css';

interface Props {
  currentPath: string;
}

interface StoryLink {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function RelatedStories({ currentPath }: Props) {
  const stories: StoryLink[] = [
    {
      href: '/story/analysis',
      title: 'Story Analysis',
      description: 'Deep dive into themes, symbolism, and hidden meanings',
      icon: <BookOpen className={styles.storyIcon} />
    },
    {
      href: '/story/main-plot',
      title: 'Main Plot',
      description: 'Follow the complete story from beginning to end',
      icon: <BookOpen className={styles.storyIcon} />
    },
    {
      href: '/story/relationships',
      title: 'Character Relationships',
      description: 'Explore the complex dynamics between crew members',
      icon: <Users className={styles.storyIcon} />
    },
    {
      href: '/story/secrets',
      title: 'Hidden Secrets',
      description: 'Uncover mysteries and hidden revelations',
      icon: <Lock className={styles.storyIcon} />
    },
    {
      href: '/story/timeline',
      title: 'Story Timeline',
      description: 'Track events in chronological order',
      icon: <Clock className={styles.storyIcon} />
    }
  ];

  const filteredStories = stories.filter(story => story.href !== currentPath);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Related Story Sections</h2>
      <div className={styles.stories}>
        {filteredStories.map((story) => (
          <Link 
            key={story.href} 
            href={story.href}
            className={styles.storyCard}
          >
            {story.icon}
            <div className={styles.storyContent}>
              <h3 className={styles.storyTitle}>{story.title}</h3>
              <p className={styles.storyDescription}>{story.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 