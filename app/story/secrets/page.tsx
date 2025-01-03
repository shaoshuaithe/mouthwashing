import Navigation from '@/components/Navigation';
import RelatedStories from '@/components/story/RelatedStories';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import styles from './secrets.module.css';

export const metadata = {
  title: 'Hidden Secrets | MouthWashing Game - Mysteries and Revelations',
  description: 'Discover the hidden secrets and mysteries in MouthWashing Game. Uncover hidden lore, easter eggs, and deeper meanings behind the story.',
  openGraph: {
    title: 'MouthWashing Game Hidden Secrets',
    description: 'Uncover hidden mysteries and revelations',
    images: ['/images/story/secrets-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/story/secrets'
  }
};

interface Secret {
  id: string;
  title: string;
  type: 'Hidden' | 'Environmental' | 'Lore' | 'Easter Egg' | 'Theory';
  description: string;
  location: string;
  clues: string[];
  significance: string[];
  relatedCharacters?: string[];
}

export default function SecretsPage() {
  const secrets: Secret[] = [
    {
      id: 'SECRET_001',
      title: 'The Hidden Lab',
      type: 'Hidden',
      description: 'A concealed research facility reveals disturbing experiments.',
      location: 'Lower Deck - Behind Medical Bay',
      clues: [
        'Unusual power readings in the area',
        'Strange sounds during night shifts',
        'Missing medical supplies',
        'Encrypted access codes'
      ],
      significance: [
        'Reveals true purpose of the mission',
        'Connects to Swansea\'s research',
        'Explains crew selection criteria',
        'Links to ship modifications'
      ],
      relatedCharacters: ['Swansea', 'Anya']
    },
    {
      id: 'SECRET_002',
      title: 'Captain\'s True Orders',
      type: 'Lore',
      description: 'Hidden documents expose the real mission parameters.',
      location: 'Captain\'s Quarters - Hidden Safe',
      clues: [
        'Redacted mission briefings',
        'Private communications log',
        'Military grade encryption',
        'Classified personnel files'
      ],
      significance: [
        'Questions crew loyalty',
        'Reveals military involvement',
        'Explains unusual cargo',
        'Connects to larger conspiracy'
      ],
      relatedCharacters: ['Curly', 'Jimmy']
    },
    {
      id: 'SECRET_003',
      title: 'Engineering Anomalies',
      type: 'Environmental',
      description: 'Strange modifications throughout ship systems suggest hidden purposes.',
      location: 'Engineering Bay - Maintenance Tunnels',
      clues: [
        'Non-standard power routing',
        'Modified life support systems',
        'Unauthorized equipment installations',
        'Unusual material compositions'
      ],
      significance: [
        'Indicates premeditated changes',
        'Suggests advanced technology integration',
        'Points to hidden capabilities',
        'Reveals technical deceptions'
      ],
      relatedCharacters: ['Daisuke', 'Jimmy']
    },
    {
      id: 'SECRET_004',
      title: 'Medical Records Mystery',
      type: 'Theory',
      description: 'Discrepancies in crew medical data hint at experimental procedures.',
      location: 'Medical Bay - Secure Archives',
      clues: [
        'Altered baseline readings',
        'Missing psychological evaluations',
        'Unauthorized treatments',
        'Pattern of data manipulation'
      ],
      significance: [
        'Questions crew selection process',
        'Suggests ongoing experiments',
        'Reveals medical ethics violations',
        'Connects to crew behavior changes'
      ],
      relatedCharacters: ['Anya', 'Swansea']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Hidden Secrets</h1>
          <p className={styles.subtitle}>
            Uncover the mysteries lurking in the shadows of the Tulpar. Each discovery
            reveals new layers of truth about the mission and its crew.
          </p>
        </section>

        <section className={styles.secretsSection}>
          {secrets.map((secret) => (
            <div key={secret.id} className={styles.secretCard}>
              <div className={styles.secretHeader}>
                <Lock className={styles.secretIcon} />
                <div>
                  <h2 className={styles.secretTitle}>{secret.title}</h2>
                  <span className={`${styles.secretType} ${styles[secret.type.toLowerCase()]}`}>
                    {secret.type}
                  </span>
                </div>
              </div>
              
              <p className={styles.secretDescription}>{secret.description}</p>
              
              <div className={styles.locationSection}>
                <h3>Location</h3>
                <p>{secret.location}</p>
              </div>
              
              <div className={styles.cluesSection}>
                <h3>Discovery Clues</h3>
                <ul>
                  {secret.clues.map((clue, index) => (
                    <li key={index}>{clue}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.significanceSection}>
                <h3>Story Significance</h3>
                <ul>
                  {secret.significance.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              {secret.relatedCharacters && (
                <div className={styles.charactersSection}>
                  <h3>Related Characters</h3>
                  <div className={styles.characterTags}>
                    {secret.relatedCharacters.map((character, index) => (
                      <Link 
                        key={index}
                        href={`/characters/${character.toLowerCase()}`}
                        className={`${styles.characterTag} ${styles.characterLink}`}
                      >
                        {character}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
        <RelatedStories currentPath="/story/secrets" />
      </main>
    </>
  );
} 