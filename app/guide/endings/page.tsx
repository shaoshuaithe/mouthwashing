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
      name: 'Truth Seeker',
      type: 'Good',
      difficulty: 'Hard',
      description: 'Uncover the full truth about the Tulpar\'s mission while keeping the crew alive.',
      requirements: [
        'Complete all major story investigations',
        'Keep all crew members alive',
        'Discover all hidden documents',
        'Maintain high trust with key characters'
      ],
      consequences: 'The truth about the Tulpar is revealed, and the crew works together to overcome the final challenge. Their bonds are strengthened through shared adversity.',
      characters: ['Anya', 'Curly', 'Daisuke', 'Jimmy', 'Swansea']
    },
    {
      id: 'END_002',
      name: 'Lone Survivor',
      type: 'Bad',
      difficulty: 'Medium',
      description: 'Escape the Tulpar alone, leaving the crew behind.',
      requirements: [
        'Choose self-preservation in key moments',
        'Maintain low trust with crew members',
        'Complete escape pod sequence'
      ],
      consequences: 'You survive but carry the guilt of abandoning your crew. The truth remains buried with the Tulpar.',
      characters: ['Player Character']
    },
    {
      id: 'END_003',
      name: 'Captain\'s Sacrifice',
      type: 'Neutral',
      difficulty: 'Hard',
      description: 'Captain Curly sacrifices himself to save the crew.',
      requirements: [
        'Build strong loyalty with Curly',
        'Complete Curly\'s personal storyline',
        'Choose sacrifice option in final decision'
      ],
      consequences: 'The crew survives thanks to Curly\'s sacrifice, but the emotional cost is high. His legacy lives on through the survivors.',
      characters: ['Curly', 'Anya', 'Jimmy']
    },
    {
      id: 'END_004',
      name: 'Scientific Revolution',
      type: 'Secret',
      difficulty: 'Hard',
      description: 'Discover and successfully implement Swansea\'s controversial research.',
      requirements: [
        'Complete all research sidequests',
        'Support Swansea\'s decisions',
        'Find all research documents',
        'Successfully complete final experiment'
      ],
      consequences: 'A groundbreaking discovery is made, but at a significant ethical cost. The crew must live with the implications of their choices.',
      characters: ['Swansea', 'Daisuke']
    },
    {
      id: 'END_005',
      name: 'Medical Breakthrough',
      type: 'Good',
      difficulty: 'Hard',
      description: 'Help Anya develop a cure for the mysterious condition affecting the crew.',
      requirements: [
        'Complete all medical bay events',
        'Support Anya\'s research',
        'Maintain high relationship with patients',
        'Find all medical documents'
      ],
      consequences: 'The crew is saved through medical innovation, and Anya\'s research becomes groundbreaking in the field.',
      characters: ['Anya', 'All Crew Members']
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