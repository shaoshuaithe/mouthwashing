import { Download, FileQuestion } from 'lucide-react';
import Link from 'next/link';
import styles from './RelatedResources.module.css';

interface Props {
  currentPath: string;
}

interface ResourceLink {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function RelatedResources({ currentPath }: Props) {
  const resourceLinks: ResourceLink[] = [
    {
      href: '/resources/download',
      title: 'Game Downloads',
      description: 'Download MouthWashing Game and its latest updates',
      icon: <Download className={styles.resourceIcon} />
    },
    {
      href: '/resources/faq',
      title: 'FAQ',
      description: 'Find answers to common questions about the game',
      icon: <FileQuestion className={styles.resourceIcon} />
    }
  ];

  const filteredLinks = resourceLinks.filter(link => link.href !== currentPath);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Other Resources</h2>
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