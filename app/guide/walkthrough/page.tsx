import Navigation from '@/components/Navigation';
import RelatedGuides from '@/components/RelatedGuides';
import { Map } from 'lucide-react';
import styles from './walkthrough.module.css';

export const metadata = {
  title: 'Walkthrough Guide | MouthWashing Game - Complete Story Guide',
  description: 'Complete walkthrough guide for MouthWashing Game. Chapter-by-chapter guide with detailed solutions and story choices.',
  openGraph: {
    title: 'MouthWashing Game Walkthrough Guide',
    description: 'Complete story walkthrough with all choices and outcomes',
    images: ['/images/guide/walkthrough-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide/walkthrough'
  }
};

interface Chapter {
  id: string;
  title: string;
  location: string;
  characters: string[];
  objectives: string[];
  keyChoices: Array<{
    situation: string;
    options: Array<{
      choice: string;
      outcome: string;
      impact: string;
    }>;
  }>;
  items: Array<{
    name: string;
    location: string;
    use: string;
  }>;
  tips: string[];
}

export default function WalkthroughPage() {
  const chapters: Chapter[] = [
    {
      id: 'CH_001',
      title: 'Chapter 1: Awakening',
      location: 'Medical Bay',
      characters: ['Anya', 'Jimmy'],
      objectives: [
        'Complete medical examination',
        'Meet Dr. Anya',
        'Learn basic controls',
        'Access personal terminal'
      ],
      keyChoices: [
        {
          situation: 'Medical Examination',
          options: [
            {
              choice: 'Cooperate fully',
              outcome: 'Gain Anya\'s trust',
              impact: 'Opens up early medical bay access'
            },
            {
              choice: 'Question procedures',
              outcome: 'Discover hidden medical records',
              impact: 'Early story revelations but delayed medical access'
            }
          ]
        },
        {
          situation: 'Jimmy\'s Request',
          options: [
            {
              choice: 'Help with maintenance',
              outcome: 'Learn engineering basics',
              impact: 'Engineering skill boost'
            },
            {
              choice: 'Focus on recovery',
              outcome: 'Better health stats',
              impact: 'Improved survival chances'
            }
          ]
        }
      ],
      items: [
        {
          name: 'Medical ID Card',
          location: 'Personal Locker',
          use: 'Access basic medical facilities'
        },
        {
          name: 'Personal Tablet',
          location: 'Bedside Table',
          use: 'Read crew messages and logs'
        }
      ],
      tips: [
        'Take time to read all medical logs',
        'Explore medical bay thoroughly',
        'Talk to Jimmy multiple times'
      ]
    },
    {
      id: 'CH_002',
      title: 'Chapter 2: Ship\'s Secrets',
      location: 'Engineering Deck',
      characters: ['Daisuke', 'Jimmy', 'Curly'],
      objectives: [
        'Investigate power fluctuations',
        'Meet Chief Engineer Daisuke',
        'Access maintenance tunnels',
        'Find missing crew logs'
      ],
      keyChoices: [
        {
          situation: 'Daisuke\'s Suspicions',
          options: [
            {
              choice: 'Share concerns',
              outcome: 'Gain valuable information',
              impact: 'Early access to restricted areas'
            },
            {
              choice: 'Remain neutral',
              outcome: 'Maintain professional relationship',
              impact: 'Balanced story progression'
            }
          ]
        },
        {
          situation: 'System Override',
          options: [
            {
              choice: 'Follow protocols',
              outcome: 'Safe but limited access',
              impact: 'Slower story progression'
            },
            {
              choice: 'Bypass security',
              outcome: 'Quick access but risks',
              impact: 'Potential system failures'
            }
          ]
        }
      ],
      items: [
        {
          name: 'Engineering Keycard',
          location: 'Daisuke\'s Office',
          use: 'Access maintenance areas'
        },
        {
          name: 'System Manual',
          location: 'Engineering Library',
          use: 'Solve technical puzzles'
        }
      ],
      tips: [
        'Document all power readings',
        'Pay attention to Daisuke\'s behavior',
        'Search maintenance tunnels thoroughly'
      ]
    },
    {
      id: 'CH_003',
      title: 'Chapter 3: Dark Revelations',
      location: 'Research Lab',
      characters: ['Swansea', 'Anya', 'Curly'],
      objectives: [
        'Investigate research data',
        'Access secure labs',
        'Confront Swansea',
        'Find missing samples'
      ],
      keyChoices: [
        {
          situation: 'Research Ethics',
          options: [
            {
              choice: 'Support research',
              outcome: 'Access to full data',
              impact: 'Moral consequences'
            },
            {
              choice: 'Oppose methods',
              outcome: 'Limited but ethical path',
              impact: 'Alternative story route'
            }
          ]
        },
        {
          situation: 'Crew Safety',
          options: [
            {
              choice: 'Alert Captain',
              outcome: 'Official investigation',
              impact: 'Delayed but thorough resolution'
            },
            {
              choice: 'Private investigation',
              outcome: 'Quick but risky progress',
              impact: 'Personal danger'
            }
          ]
        }
      ],
      items: [
        {
          name: 'Research Notes',
          location: 'Hidden Safe',
          use: 'Understand experiment purpose'
        },
        {
          name: 'Lab Access Card',
          location: 'Swansea\'s Office',
          use: 'Enter restricted labs'
        }
      ],
      tips: [
        'Record all experiment details',
        'Watch for character reactions',
        'Save frequently during confrontations'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Walkthrough Guide</h1>
          <p className={styles.subtitle}>
            Complete chapter-by-chapter guide for MouthWashing Game. Find detailed solutions,
            choice outcomes, and hidden secrets.
          </p>
        </section>

        <section className={styles.chaptersSection}>
          {chapters.map((chapter) => (
            <div key={chapter.id} className={styles.chapterCard}>
              <div className={styles.chapterHeader}>
                <Map className={styles.chapterIcon} />
                <div>
                  <h2 className={styles.chapterTitle}>{chapter.title}</h2>
                  <p className={styles.chapterLocation}>{chapter.location}</p>
                </div>
              </div>

              <div className={styles.charactersSection}>
                <h3>Key Characters</h3>
                <div className={styles.characterTags}>
                  {chapter.characters.map((character, index) => (
                    <span key={index} className={styles.characterTag}>{character}</span>
                  ))}
                </div>
              </div>

              <div className={styles.objectivesSection}>
                <h3>Objectives</h3>
                <ul>
                  {chapter.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.choicesSection}>
                <h3>Key Choices</h3>
                {chapter.keyChoices.map((choice, index) => (
                  <div key={index} className={styles.choiceGroup}>
                    <h4>{choice.situation}</h4>
                    <div className={styles.options}>
                      {choice.options.map((option, optIndex) => (
                        <div key={optIndex} className={styles.option}>
                          <p className={styles.optionChoice}>{option.choice}</p>
                          <p className={styles.optionOutcome}>Outcome: {option.outcome}</p>
                          <p className={styles.optionImpact}>Impact: {option.impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.itemsSection}>
                <h3>Important Items</h3>
                {chapter.items.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <h4>{item.name}</h4>
                    <p>Location: {item.location}</p>
                    <p>Use: {item.use}</p>
                  </div>
                ))}
              </div>

              <div className={styles.tipsSection}>
                <h3>Tips</h3>
                <ul>
                  {chapter.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <RelatedGuides currentPath="/guide/walkthrough" />
      </main>
    </>
  );
} 