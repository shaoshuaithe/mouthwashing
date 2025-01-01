import Navigation from '@/components/Navigation';
import CharacterCard from '@/components/characters/CharacterCard';
import type { Metadata } from 'next';
import styles from './characters.module.css';

export const metadata: Metadata = {
  title: 'Characters | Mouthwashing Game - Meet Our Unique Heroes',
  description: 'Discover the diverse cast of characters in Mouthwashing Game. Meet Anya, Curly, Jimmy, Daisuke, and Swansea - each with their unique abilities and personalities.',
  openGraph: {
    title: 'Meet the Characters of Mouthwashing Game',
    description: 'Explore our diverse cast of unique characters, each bringing their special abilities and personalities to the Mouthwashing adventure.',
    images: ['/images/characters/characters-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/characters'
  }
};

const characters = [
  {
    name: 'Anya',
    image: '/images/characters/anya.png',
    description: 'Ship\'s Medical Officer aboard the Tulpar, responsible for crew health and medical research. Her dedication to medical ethics leads her to uncover disturbing truths.',
    traits: ['Medical Expert', 'Ethical', 'Determined'],
    role: 'Medical Officer'
  },
  {
    name: 'Curly',
    image: '/images/characters/curly.png',
    description: 'Captain of the Tulpar, a seasoned leader with a mysterious past and a complex web of loyalties. His decisions will shape the fate of the crew.',
    traits: ['Leader', 'Strategic', 'Mysterious'],
    role: 'Ship Captain'
  },
  {
    name: 'Jimmy',
    image: '/images/characters/jimmy.png',
    description: 'Junior Engineer whose natural curiosity and technical aptitude place him at the center of unfolding mysteries aboard the Tulpar.',
    traits: ['Innovative', 'Curious', 'Technical'],
    role: 'Junior Engineer'
  },
  {
    name: 'Daisuke',
    image: '/images/characters/daisuke.png',
    description: 'Chief Engineer whose brilliant mind and growing paranoia about the ship\'s systems may reveal more than just mechanical anomalies.',
    traits: ['Brilliant', 'Obsessive', 'Technical'],
    role: 'Chief Engineer'
  },
  {
    name: 'Swansea',
    image: '/images/characters/swansea.png',
    description: 'Research Director whose dedication to scientific discovery may unlock dangerous secrets about the mission\'s true purpose.',
    traits: ['Scientific', 'Ambitious', 'Complex'],
    role: 'Research Director'
  }
];

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
            {characters.map((character) => (
              <CharacterCard
                key={character.name}
                name={character.name}
                image={character.image}
                description={character.description}
                traits={character.traits}
                role={character.role}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
} 