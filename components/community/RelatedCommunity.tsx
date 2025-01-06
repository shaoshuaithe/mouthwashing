import { Newspaper, Palette } from 'lucide-react';
import Link from 'next/link';
import styles from './RelatedCommunity.module.css';

interface Props {
  currentPath: string;
}

interface CommunityLink {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function RelatedCommunity({ currentPath }: Props) {
  const communityLinks: CommunityLink[] = [
    {
      href: '/community/news',
      title: 'Latest News',
      description: 'Stay updated with announcements and game updates',
      icon: <Newspaper className={styles.communityIcon} />
    },
    {
      href: '/community/fanworks',
      title: 'Fan Works',
      description: 'Explore creative works from our community',
      icon: <Palette className={styles.communityIcon} />
    }
  ];

  const filteredLinks = communityLinks.filter(link => link.href !== currentPath);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>More Community Content</h2>
      <div className={styles.links}>
        {filteredLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={styles.linkCard}
          >
            {link.icon}
            <div className={styles.linkContent}>
              <h3 className={styles.linkTitle}>{link.title}</h3>
              <p className={styles.linkDescription}>{link.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 