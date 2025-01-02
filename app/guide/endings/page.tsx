import Navigation from '@/components/Navigation';
import RelatedGuides from '@/components/RelatedGuides';
import { BookOpen } from 'lucide-react';
import styles from './endings.module.css';

export const metadata = {
  title: 'Endings Guide | MouthWashing Game - All Possible Endings',
  description: 'Complete guide to all possible endings in MouthWashing Game. Learn how to unlock each ending and the consequences of your choices.',
  openGraph: {
    title: 'MouthWashing Game Endings Guide',
    description: 'Discover all possible endings and how to achieve them',
    images: ['/images/guide/endings-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide/endings'
  }
};

interface Ending {
  id: string;
  name: string;
  type: 'Good' | 'Bad' | 'Neutral' | 'Secret';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  requirements: string[];
  consequences: string;
  characters: string[];
}

export default function EndingsGuidePage() {
  const endings: Ending[] = [
    {
      id: 'END_001',
      name: 'True Salvation',
      type: 'Good',
      difficulty: 'Hard',
      description: 'The perfect ending where you save both the crew and the ship.',
      requirements: [
        'Maximum relationship with all crew members',
        'Solve all major puzzles',
        'Find all critical documents',
        'Make the correct final choice'
      ],
      consequences: 'Everyone survives, the truth is revealed, and the mission is successfully completed.',
      characters: ['Anya', 'Curly', 'Jimmy', 'Daisuke', 'Swansea']
    },
    {
      id: 'END_002',
      name: 'Bitter Victory',
      type: 'Neutral',
      difficulty: 'Medium',
      description: 'Save the ship but at a great cost.',
      requirements: [
        'Complete main objectives',
        'Sacrifice at least one crew member',
        'Maintain ship integrity'
      ],
      consequences: 'The mission succeeds but with heavy casualties and lasting trauma.',
      characters: ['Curly', 'Daisuke']
    },
    {
      id: 'END_003',
      name: 'Into the Void',
      type: 'Bad',
      difficulty: 'Easy',
      description: 'Total mission failure.',
      requirements: [
        'Fail to maintain ship systems',
        'Low crew relationships',
        'Miss critical evidence'
      ],
      consequences: 'The ship is lost with all hands. The truth remains buried in space.',
      characters: ['All Crew']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Endings Guide</h1>
          <p className={styles.subtitle}>
            Discover all possible endings in MouthWashing Game and learn how your choices shape the story's conclusion.
          </p>
        </section>

        <section className={styles.endingsSection}>
          {endings.map((ending) => (
            <div key={ending.id} className={styles.endingCard}>
              <div className={styles.endingHeader}>
                <BookOpen className={styles.bookIcon} />
                <div>
                  <h2 className={styles.endingName}>{ending.name}</h2>
                  <div className={styles.endingDetails}>
                    <span className={`${styles.endingType} ${styles[ending.type.toLowerCase()]}`}>
                      {ending.type}
                    </span>
                    <span className={`${styles.endingDifficulty} ${styles[ending.difficulty.toLowerCase()]}`}>
                      {ending.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className={styles.endingDescription}>{ending.description}</p>
              
              <div className={styles.requirementsSection}>
                <h3>Requirements</h3>
                <ul>
                  {ending.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.consequencesSection}>
                <h3>Consequences</h3>
                <p>{ending.consequences}</p>
              </div>
              
              <div className={styles.charactersSection}>
                <h3>Key Characters</h3>
                <div className={styles.characterTags}>
                  {ending.characters.map((character, index) => (
                    <span key={index} className={styles.characterTag}>{character}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
        <RelatedGuides currentPath="/guide/endings" />
      </main>
    </>
  );
} 