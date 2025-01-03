import Navigation from '@/components/Navigation';
import RelatedStories from '@/components/story/RelatedStories';
import { Users } from 'lucide-react';
import Link from 'next/link';
import styles from './relationships.module.css';

export const metadata = {
  title: 'Character Relationships | MouthWashing Game - Crew Dynamics Analysis',
  description: 'Explore the complex relationships and interactions between crew members in MouthWashing Game. Discover how their bonds evolve throughout the story.',
  openGraph: {
    title: 'MouthWashing Game Character Relationships',
    description: 'Deep dive into crew dynamics and character interactions',
    images: ['/images/story/relationships-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/story/relationships'
  }
};

interface Relationship {
  id: string;
  title: string;
  type: 'Core' | 'Complex' | 'Evolving' | 'Antagonistic' | 'Supportive';
  description: string;
  dynamics: string[];
  development: string[];
  characters: string[];
  impacts: string[];
}

export default function RelationshipsPage() {
  const relationships: Relationship[] = [
    {
      id: 'REL_001',
      title: 'Power and Authority',
      type: 'Core',
      description: 'The complex dynamic between Jimmy and Curly shapes the core narrative tension.',
      dynamics: [
        'Leadership transition following the accident',
        'Underlying professional rivalry',
        'Struggle for crew loyalty',
        'Psychological power plays'
      ],
      development: [
        'Initial professional respect deteriorates',
        'Power vacuum creates opportunities',
        'Personal ambitions surface',
        'Trust becomes a scarce resource'
      ],
      characters: ['Jimmy', 'Curly'],
      impacts: [
        'Influences crew morale and unity',
        'Drives key story decisions',
        'Affects ship operations',
        'Creates lasting consequences'
      ]
    },
    {
      id: 'REL_002',
      title: 'Medical Ethics',
      type: 'Complex',
      description: 'Anya\'s role as medical officer creates unique bonds and challenges with the crew.',
      dynamics: [
        'Professional boundaries tested',
        'Ethical responsibilities versus survival',
        'Personal safety concerns',
        'Healthcare under extreme conditions'
      ],
      development: [
        'Trust relationships evolve',
        'Professional duties become personal',
        'Moral compromises emerge',
        'Support systems change'
      ],
      characters: ['Anya', 'Curly', 'Jimmy'],
      impacts: [
        'Affects crew health decisions',
        'Influences trust dynamics',
        'Shapes moral choices',
        'Determines survival odds'
      ]
    },
    {
      id: 'REL_003',
      title: 'Mentorship Bond',
      type: 'Supportive',
      description: 'The protective relationship between Swansea and Daisuke offers hope amid chaos.',
      dynamics: [
        'Experience guiding innocence',
        'Shared technical expertise',
        'Protective instincts emerge',
        'Knowledge transfer under pressure'
      ],
      development: [
        'Mentor role strengthens',
        'Trust deepens through challenges',
        'Mutual support grows',
        'Protective bonds form'
      ],
      characters: ['Swansea', 'Daisuke'],
      impacts: [
        'Provides emotional stability',
        'Ensures technical solutions',
        'Creates team cohesion',
        'Offers hope for future'
      ]
    },
    {
      id: 'REL_004',
      title: 'Crew Unity',
      type: 'Evolving',
      description: 'The overall group dynamic shifts as survival becomes increasingly challenging.',
      dynamics: [
        'Resource management tensions',
        'Trust versus suspicion',
        'Group versus individual needs',
        'Survival priorities clash'
      ],
      development: [
        'Initial cooperation breaks down',
        'Alliances shift constantly',
        'Individual motives surface',
        'Group cohesion tested'
      ],
      characters: ['All Crew Members'],
      impacts: [
        'Determines survival chances',
        'Affects decision-making',
        'Influences story outcomes',
        'Shapes individual fates'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Character Relationships</h1>
          <p className={styles.subtitle}>
            Explore how the crew's relationships evolve through crisis, revealing deep
            connections and conflicts that shape their fate aboard the Tulpar.
          </p>
        </section>

        <section className={styles.relationshipsSection}>
          {relationships.map((relationship) => (
            <div key={relationship.id} className={styles.relationshipCard}>
              <div className={styles.relationshipHeader}>
                <Users className={styles.relationshipIcon} />
                <div>
                  <h2 className={styles.relationshipTitle}>{relationship.title}</h2>
                  <span className={`${styles.relationshipType} ${styles[relationship.type.toLowerCase()]}`}>
                    {relationship.type}
                  </span>
                </div>
              </div>
              
              <p className={styles.relationshipDescription}>{relationship.description}</p>
              
              <div className={styles.dynamicsSection}>
                <h3>Key Dynamics</h3>
                <ul>
                  {relationship.dynamics.map((dynamic, index) => (
                    <li key={index}>{dynamic}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.developmentSection}>
                <h3>Relationship Development</h3>
                <ul>
                  {relationship.development.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.charactersSection}>
                <h3>Key Characters</h3>
                <div className={styles.characterTags}>
                  {relationship.characters.map((character, index) => (
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
              
              <div className={styles.impactsSection}>
                <h3>Story Impacts</h3>
                <ul>
                  {relationship.impacts.map((impact, index) => (
                    <li key={index}>{impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <RelatedStories currentPath="/story/relationships" />
      </main>
    </>
  );
} 