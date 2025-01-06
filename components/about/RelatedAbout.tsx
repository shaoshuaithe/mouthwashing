import { BookOpen, Cpu, FileText } from 'lucide-react';
import Link from 'next/link';
import styles from './RelatedAbout.module.css';

interface Props {
  currentPath: string;
}

interface AboutLink {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function RelatedAbout({ currentPath }: Props) {
  const aboutLinks: AboutLink[] = [
    {
      href: '/about/overview',
      title: 'Game Overview',
      description: 'Discover the unique world and features of MouthWashing Game',
      icon: <BookOpen className={styles.aboutIcon} />
    },
    {
      href: '/about/requirements',
      title: 'System Requirements',
      description: 'Check if your system can run MouthWashing Game',
      icon: <Cpu className={styles.aboutIcon} />
    },
    {
      href: '/about/changelog',
      title: 'Changelog',
      description: 'Track all updates and improvements to the game',
      icon: <FileText className={styles.aboutIcon} />
    }
  ];

  const filteredLinks = aboutLinks.filter(link => link.href !== currentPath);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Related Information</h2>
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