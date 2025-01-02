import { AlertCircle, BookOpen, Map, Package, Puzzle, Trophy } from 'lucide-react';
import Link from 'next/link';
import styles from './RelatedGuides.module.css';

interface GuideLink {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  currentPath: string;
}

export default function RelatedGuides({ currentPath }: Props) {
  const guides: GuideLink[] = [
    {
      href: '/guide/walkthrough',
      title: 'Walkthrough Guide',
      description: 'Complete chapter-by-chapter walkthrough with all choices and outcomes',
      icon: <Map className={styles.guideIcon} />
    },
    {
      href: '/guide/achievements',
      title: 'Achievements Guide',
      description: 'Complete list of all achievements and how to unlock them',
      icon: <Trophy className={styles.guideIcon} />
    },
    {
      href: '/guide/endings',
      title: 'Endings Guide',
      description: 'All possible endings and how to achieve them',
      icon: <BookOpen className={styles.guideIcon} />
    },
    {
      href: '/guide/items',
      title: 'Items Guide',
      description: 'Detailed information about all items and their uses',
      icon: <Package className={styles.guideIcon} />
    },
    {
      href: '/guide/puzzles',
      title: 'Puzzles Guide',
      description: 'Solutions for all puzzles and challenges',
      icon: <Puzzle className={styles.guideIcon} />
    },
    {
      href: '/guide/troubleshooting',
      title: 'Troubleshooting Guide',
      description: 'Solutions for common issues and technical problems',
      icon: <AlertCircle className={styles.guideIcon} />
    }
  ];

  const filteredGuides = guides.filter(guide => guide.href !== currentPath);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Related Guides</h2>
      <div className={styles.guides}>
        {filteredGuides.map((guide) => (
          <Link 
            key={guide.href} 
            href={guide.href}
            className={styles.guideCard}
          >
            {guide.icon}
            <div className={styles.guideContent}>
              <h3 className={styles.guideTitle}>{guide.title}</h3>
              <p className={styles.guideDescription}>{guide.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 