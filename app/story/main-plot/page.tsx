import Navigation from '@/components/Navigation';
import RelatedStories from '@/components/story/RelatedStories';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import styles from './main-plot.module.css';

export const metadata = {
  title: 'Main Plot | MouthWashing Game - Complete Story Overview',
  description: 'Explore the main story of MouthWashing Game. Follow the mysterious events aboard the Tulpar and uncover the truth behind the mission.',
  openGraph: {
    title: 'MouthWashing Game Main Plot Overview',
    description: 'Complete story overview and plot analysis',
    images: ['/images/story/main-plot-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/story/main-plot'
  }
};

interface PlotSection {
  id: string;
  title: string;
  type: 'Chapter' | 'Revelation' | 'Twist' | 'Climax' | 'Subplot';
  description: string;
  content: string[];
  significance: string[];
  characters: string[];
  choices?: string[];
}

export default function MainPlotPage() {
  const plotSections: PlotSection[] = [
    {
      id: 'PLOT_001',
      title: 'Fateful Departure',
      type: 'Chapter',
      description: 'A routine space freight mission turns into something far more sinister as the Tulpar and its crew face their first challenge.',
      content: [
        'Captain Curly leads the crew on what appears to be a standard cargo transport',
        'Strange tension builds among crew members before departure',
        'Jimmy notices unusual modifications to ship systems',
        'Mysterious cargo manifests raise first suspicions'
      ],
      significance: [
        'Establishes the deceptively normal beginning',
        'Hints at underlying tensions between crew members',
        'Shows first signs of something amiss with the mission',
        'Introduces the psychological dynamics at play'
      ],
      characters: ['Jimmy', 'Curly', 'Anya']
    },
    {
      id: 'PLOT_002',
      title: 'The Catastrophic Turn',
      type: 'Revelation',
      description: 'A devastating accident changes everything, forcing the crew into impossible situations.',
      content: [
        'Critical system failure leads to a catastrophic crash',
        'Captain Curly sustains severe injuries',
        'Discovery of the true cargo contents',
        'Leadership vacuum creates power struggles'
      ],
      significance: [
        'Transforms the story from routine to survival',
        'Tests crew loyalty and relationships',
        'Reveals hidden character motivations',
        'Sets up central moral conflicts'
      ],
      characters: ['Jimmy', 'Curly'],
      choices: [
        'How to handle Captain Curly\'s condition',
        'Whether to reveal the truth about the cargo',
        'Who to trust among the remaining crew'
      ]
    },
    {
      id: 'PLOT_003',
      title: 'Descent into Madness',
      type: 'Twist',
      description: 'As supplies dwindle and tensions rise, the crew begins to unravel.',
      content: [
        'Psychological pressure takes its toll',
        'Alliances form and break',
        'Dark secrets come to light',
        'Crew members face impossible choices'
      ],
      significance: [
        'Explores human nature under extreme conditions',
        'Shows the breakdown of social order',
        'Questions morality in survival situations',
        'Reveals true character motivations'
      ],
      characters: ['Anya', 'Daisuke', 'Swansea'],
      choices: [
        'How to distribute limited resources',
        'Whether to maintain humanity or survive at any cost',
        'Who to save when not everyone can make it'
      ]
    },
    {
      id: 'PLOT_004',
      title: 'Final Reckoning',
      type: 'Climax',
      description: 'The truth behind the crash forces everyone to face their darkest moments.',
      content: [
        'Jimmy\'s role in the accident comes to light',
        'Crew members reach their breaking points',
        'Final desperate attempts at survival',
        'Tragic consequences unfold'
      ],
      significance: [
        'Confronts themes of guilt and responsibility',
        'Questions the nature of redemption',
        'Examines the cost of survival',
        'Brings character arcs to their conclusion'
      ],
      characters: ['All Crew Members'],
      choices: [
        'Face the truth or maintain denial',
        'Attempt redemption or embrace darkness',
        'Accept fate or fight against it'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Main Plot</h1>
          <p className={styles.subtitle}>
            Follow the mysterious events aboard the Tulpar as the crew uncovers dark secrets
            and faces impossible choices that will determine their fate.
          </p>
        </section>

        <section className={styles.plotSection}>
          {plotSections.map((section) => (
            <div key={section.id} className={styles.plotCard}>
              <div className={styles.plotHeader}>
                <BookOpen className={styles.plotIcon} />
                <div>
                  <h2 className={styles.plotTitle}>{section.title}</h2>
                  <span className={`${styles.plotType} ${styles[section.type.toLowerCase()]}`}>
                    {section.type}
                  </span>
                </div>
              </div>
              
              <p className={styles.plotDescription}>{section.description}</p>
              
              <div className={styles.contentSection}>
                <h3>Key Events</h3>
                <ul>
                  {section.content.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.significanceSection}>
                <h3>Story Significance</h3>
                <ul>
                  {section.significance.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.charactersSection}>
                <h3>Key Characters</h3>
                <div className={styles.characterTags}>
                  {section.characters.map((character, index) => (
                    character === 'All Crew Members' ? (
                      <Link 
                        key={index}
                        href="/characters"
                        className={`${styles.characterTag} ${styles.characterLink}`}
                      >
                        {character}
                      </Link>
                    ) : (
                      <Link 
                        key={index}
                        href={`/characters/${character.toLowerCase()}`}
                        className={`${styles.characterTag} ${styles.characterLink}`}
                      >
                        {character}
                      </Link>
                    )
                  ))}
                </div>
              </div>
              
              {section.choices && (
                <div className={styles.choicesSection}>
                  <h3>Player Choices</h3>
                  <ul>
                    {section.choices.map((choice, index) => (
                      <li key={index}>{choice}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>
        <RelatedStories currentPath="/story/main-plot" />
      </main>
    </>
  );
} 