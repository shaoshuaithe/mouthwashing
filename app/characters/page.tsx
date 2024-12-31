import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';
import styles from './characters.module.css';

export const metadata: Metadata = {
  title: 'Characters | Mouthwashing Game - Meet Our Unique Heroes',
  description: 'Discover the diverse cast of characters in Mouthwashing Game. Meet Anya, Curly, Jimmy, Daisuke, and Swansea - each with their unique abilities and personalities.',
  openGraph: {
    title: 'Meet the Characters of Mouthwashing Game',
    description: 'Explore our diverse cast of unique characters, each bringing their special abilities and personalities to the Mouthwashing adventure.',
    images: ['/images/characters/characters-banner.jpg'],
  }
};

export default function CharactersPage() {
  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Meet Our Characters</h1>
          <p className={styles.subtitle}>
            Discover the extraordinary team that makes Mouthwashing adventures possible.
            Each character brings unique abilities and personalities to create an
            unstoppable force in their quest for excellence.
          </p>
        </section>
        
        <section className={styles.charactersSection}>
          <div className={styles.charactersGrid}>
          </div>
        </section>
      </main>
    </>
  );
} 