import Navigation from '@/components/Navigation';
import RelatedGuides from '@/components/RelatedGuides';
import { Trophy } from 'lucide-react';
import styles from './achievements.module.css';

export const metadata = {
  title: 'Achievements Guide | MouthWashing Game - Complete Trophy List',
  description: 'Complete guide to unlocking all achievements and trophies in MouthWashing Game. Includes story achievements, secret challenges, and character-specific goals.',
  openGraph: {
    title: 'MouthWashing Game Achievement Guide',
    description: 'Master guide for unlocking all achievements in MouthWashing Game',
    images: ['/images/guide/achievements-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide/achievements'
  }
};

interface Achievement {
  id: string;
  name: string;
  description: string;
  type: 'Story' | 'Challenge' | 'Secret' | 'Character';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  howTo: string;
}

export default function AchievementsGuidePage() {
  const achievements: Achievement[] = [
    {
      id: 'ACH_001',
      name: 'First Steps',
      description: 'Complete the tutorial section',
      type: 'Story',
      difficulty: 'Easy',
      points: 10,
      howTo: 'Automatically unlocked after completing the tutorial sequence in Chapter 1.'
    },
    {
      id: 'ACH_002',
      name: 'Medical Mystery',
      description: 'Complete Anya\'s story arc',
      type: 'Character',
      difficulty: 'Medium',
      points: 50,
      howTo: 'Follow all of Anya\'s storyline choices and complete her personal investigation.'
    },
    {
      id: 'ACH_003',
      name: 'Captain\'s Burden',
      description: 'Make all critical decisions as Captain Curly',
      type: 'Character',
      difficulty: 'Hard',
      points: 100,
      howTo: 'Complete all major decision points in Curly\'s storyline without delegating choices.'
    },
    {
      id: 'ACH_004',
      name: 'System Override',
      description: 'Successfully hack the main computer',
      type: 'Challenge',
      difficulty: 'Hard',
      points: 75,
      howTo: 'Complete the hacking minigame in under 3 minutes without any failed attempts.'
    },
    {
      id: 'ACH_005',
      name: 'Hidden Truth',
      description: 'Discover the ship\'s secret',
      type: 'Secret',
      difficulty: 'Hard',
      points: 150,
      howTo: 'Find all hidden documents and piece together the truth about the Tulpar\'s mission.'
    },
    {
      id: 'ACH_006',
      name: 'Perfect Engineer',
      description: 'Complete all engineering tasks without errors',
      type: 'Challenge',
      difficulty: 'Hard',
      points: 100,
      howTo: 'Successfully complete all engineering minigames and maintenance tasks with perfect scores.'
    },
    {
      id: 'ACH_007',
      name: 'Trust No One',
      description: 'Complete the game without trusting any crew member',
      type: 'Secret',
      difficulty: 'Hard',
      points: 200,
      howTo: 'Make all suspicious choices and maintain distance from crew members throughout the story.'
    },
    {
      id: 'ACH_008',
      name: 'Medical Expert',
      description: 'Successfully diagnose all crew conditions',
      type: 'Challenge',
      difficulty: 'Medium',
      points: 50,
      howTo: 'Correctly identify and treat all medical conditions in the medical bay.'
    },
    {
      id: 'ACH_009',
      name: 'Ship\'s Best Friend',
      description: 'Max out relationships with all crew members',
      type: 'Character',
      difficulty: 'Hard',
      points: 150,
      howTo: 'Achieve maximum relationship status with every major character through dialogue choices and actions.'
    },
    {
      id: 'ACH_010',
      name: 'Speed Runner',
      description: 'Complete the game in under 4 hours',
      type: 'Challenge',
      difficulty: 'Hard',
      points: 100,
      howTo: 'Complete the main story in less than 4 hours of playtime. Cutscenes count towards the time.'
    },
    {
      id: 'ACH_011',
      name: 'Lore Master',
      description: 'Find all collectible documents',
      type: 'Secret',
      difficulty: 'Medium',
      points: 75,
      howTo: 'Locate and read all collectible documents scattered throughout the ship.'
    },
    {
      id: 'ACH_012',
      name: 'Perfect Ending',
      description: 'Achieve the best possible ending',
      type: 'Story',
      difficulty: 'Hard',
      points: 200,
      howTo: 'Make all the correct choices throughout the game to unlock the perfect ending scenario.'
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Achievements Guide</h1>
          <p className={styles.subtitle}>
            Complete guide to unlocking all achievements in MouthWashing Game. Track your progress
            and discover hidden challenges.
          </p>
        </section>

        <section className={styles.achievementsSection}>
          {achievements.map((achievement) => (
            <div key={achievement.id} className={styles.achievementCard}>
              <div className={styles.achievementHeader}>
                <Trophy className={styles.trophyIcon} />
                <div>
                  <h2 className={styles.achievementName}>{achievement.name}</h2>
                  <p className={styles.achievementPoints}>{achievement.points} Points</p>
                </div>
              </div>
              
              <p className={styles.achievementDescription}>{achievement.description}</p>
              
              <div className={styles.achievementDetails}>
                <span className={`${styles.achievementType} ${styles[achievement.type.toLowerCase()]}`}>
                  {achievement.type}
                </span>
                <span className={`${styles.achievementDifficulty} ${styles[achievement.difficulty.toLowerCase()]}`}>
                  {achievement.difficulty}
                </span>
              </div>
              
              <div className={styles.howToSection}>
                <h3>How to Unlock</h3>
                <p>{achievement.howTo}</p>
              </div>
            </div>
          ))}
        </section>
        <RelatedGuides currentPath="/guide/achievements" />
      </main>
    </>
  );
} 