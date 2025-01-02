import Navigation from '@/components/Navigation';
import RelatedGuides from '@/components/RelatedGuides';
import { Lightbulb } from 'lucide-react';
import styles from './puzzles.module.css';

export const metadata = {
  title: 'Puzzles Guide | MouthWashing Game - Complete Puzzle Solutions',
  description: 'Complete guide to all puzzles in MouthWashing Game. Find solutions to engineering challenges, medical mysteries, and security systems.',
  openGraph: {
    title: 'MouthWashing Game Puzzle Guide',
    description: 'Solutions and walkthroughs for all puzzles in the game',
    images: ['/images/guide/puzzles-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide/puzzles'
  }
};

interface Puzzle {
  id: string;
  name: string;
  type: 'Engineering' | 'Medical' | 'Security' | 'Research' | 'Story';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  location: string;
  description: string;
  solution: string[];
  hints: string[];
  relatedCharacters?: string[];
}

export default function PuzzlesGuidePage() {
  const puzzles: Puzzle[] = [
    {
      id: 'PUZ_001',
      name: 'Engine Core Calibration',
      type: 'Engineering',
      difficulty: 'Hard',
      location: 'Engineering Bay - Level 2',
      description: 'A complex puzzle involving the calibration of the ship\'s engine core. Players must balance power distribution while maintaining system stability.',
      solution: [
        'Set primary power coupling to 75%',
        'Align secondary manifolds to match frequency',
        'Adjust coolant flow rate to compensate for heat increase',
        'Lock in settings when stability reaches optimal range'
      ],
      hints: [
        'Watch the temperature gauge carefully',
        'The frequency patterns follow a specific sequence',
        'Use Jimmy\'s engineering manual for reference'
      ],
      relatedCharacters: ['Daisuke', 'Jimmy']
    },
    {
      id: 'PUZ_002',
      name: 'Medical Bay Access',
      type: 'Medical',
      difficulty: 'Medium',
      location: 'Medical Bay',
      description: 'A security puzzle protecting sensitive medical data. Players must correctly sequence genetic codes to gain access.',
      solution: [
        'Match DNA sequence patterns',
        'Input correct medical authorization codes',
        'Verify biometric data',
        'Complete system authentication'
      ],
      hints: [
        'Look for patterns in the genetic sequences',
        'Anya\'s medical logs contain crucial information',
        'Pay attention to color-coded markers'
      ],
      relatedCharacters: ['Anya']
    },
    {
      id: 'PUZ_003',
      name: 'Bridge Security Override',
      type: 'Security',
      difficulty: 'Hard',
      location: 'Ship\'s Bridge',
      description: 'A high-security puzzle requiring players to bypass the bridge\'s lockdown protocols.',
      solution: [
        'Decrypt emergency override codes',
        'Bypass secondary security systems',
        'Reroute power to auxiliary controls',
        'Execute captain\'s override sequence'
      ],
      hints: [
        'Captain\'s personal logs contain vital clues',
        'Security patterns change based on ship\'s status',
        'Time your override attempts carefully'
      ],
      relatedCharacters: ['Curly']
    },
    {
      id: 'PUZ_004',
      name: 'Research Data Recovery',
      type: 'Research',
      difficulty: 'Hard',
      location: 'Research Lab',
      description: 'Players must reconstruct corrupted research data through a series of logical deductions.',
      solution: [
        'Identify data corruption patterns',
        'Cross-reference experiment logs',
        'Reconstruct missing sequences',
        'Validate recovered data integrity'
      ],
      hints: [
        'Swansea\'s research notes provide context',
        'Look for recurring patterns in the data',
        'Pay attention to timestamp sequences'
      ],
      relatedCharacters: ['Swansea']
    },
    {
      id: 'PUZ_005',
      name: 'Life Support Restoration',
      type: 'Engineering',
      difficulty: 'Medium',
      location: 'Maintenance Level',
      description: 'A critical puzzle where players must restore the ship\'s failing life support systems.',
      solution: [
        'Diagnose system failures',
        'Reroute emergency power',
        'Repair damaged components',
        'Reboot life support sequence'
      ],
      hints: [
        'Monitor oxygen levels carefully',
        'System diagnostic tools are essential',
        'Check emergency protocols manual'
      ],
      relatedCharacters: ['Jimmy', 'Daisuke']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Puzzles Guide</h1>
          <p className={styles.subtitle}>
            Complete solutions to all puzzles in MouthWashing Game. Find detailed walkthroughs
            and hints for every challenge aboard the Tulpar.
          </p>
        </section>

        <section className={styles.puzzlesSection}>
          {puzzles.map((puzzle) => (
            <div key={puzzle.id} className={styles.puzzleCard}>
              <div className={styles.puzzleHeader}>
                <Lightbulb className={styles.puzzleIcon} />
                <div>
                  <h2 className={styles.puzzleName}>{puzzle.name}</h2>
                  <div className={styles.puzzleDetails}>
                    <span className={`${styles.puzzleType} ${styles[puzzle.type.toLowerCase()]}`}>
                      {puzzle.type}
                    </span>
                    <span className={`${styles.puzzleDifficulty} ${styles[puzzle.difficulty.toLowerCase()]}`}>
                      {puzzle.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={styles.locationSection}>
                <h3>Location</h3>
                <p>{puzzle.location}</p>
              </div>
              
              <p className={styles.puzzleDescription}>{puzzle.description}</p>
              
              <div className={styles.solutionSection}>
                <h3>Solution</h3>
                <ul>
                  {puzzle.solution.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.hintsSection}>
                <h3>Hints</h3>
                <ul>
                  {puzzle.hints.map((hint, index) => (
                    <li key={index}>{hint}</li>
                  ))}
                </ul>
              </div>
              
              {puzzle.relatedCharacters && (
                <div className={styles.charactersSection}>
                  <h3>Related Characters</h3>
                  <div className={styles.characterTags}>
                    {puzzle.relatedCharacters.map((character, index) => (
                      <span key={index} className={styles.characterTag}>{character}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <RelatedGuides currentPath="/guide/puzzles" />
      </main>
    </>
  );
} 