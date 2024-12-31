import { AlertTriangle, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import styles from './CharacterDetail.module.css';

interface CharacterDetailProps {
  character: {
    name: string;
    image: string;
    description: string;
    traits: string[];
    role: string;
    background: string;
    quote?: string;
    info?: {
      age?: string;
      status?: string;
      id?: string;
    };
    relationships: Array<{
      character: string;
      type: string;
      description: string;
    }>;
    storyPhases: Array<{
      phase: string;
      content: string;
    }>;
    keyScenes: Array<{
      title: string;
      description: string;
    }>;
    analysis: Array<{
      title: string;
      content: string;
    }>;
    voiceActor?: {
      name: string;
      image: string;
      description: string;
    };
  }
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const [showSpoilers, setShowSpoilers] = useState(false);

  return (
    <div className={styles.characterDetail}>
      {/* Character Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={character.image}
              alt={character.name}
              fill
              priority
              className={styles.characterImage}
            />
          </div>
          
          <div className={styles.info}>
            <h1>{character.name}</h1>
            <div className={styles.role}>{character.role}</div>
            
            {character.info && (
              <div className={styles.quickInfo}>
                {character.info.age && (
                  <InfoItem label="Age" value={character.info.age} />
                )}
                {character.info.status && (
                  <InfoItem label="Status" value={character.info.status} />
                )}
                {character.info.id && (
                  <InfoItem label="ID" value={character.info.id} />
                )}
              </div>
            )}

            {character.quote && (
              <div className={styles.quote}>
                <Quote className={styles.quoteIcon} />
                <p>{character.quote}</p>
              </div>
            )}

            {!showSpoilers && (
              <div className={styles.spoilerWarning}>
                <AlertTriangle />
                <div>
                  <h3>Spoiler Warning</h3>
                  <p>This page contains major story spoilers.</p>
                  <button onClick={() => setShowSpoilers(true)}>
                    Show Full Content
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSpoilers && (
        <div className={styles.content}>
          <Section title="Background">
            <p>{character.background}</p>
          </Section>

          <Section title="Key Relationships">
            <div className={styles.relationships}>
              {character.relationships.map((rel, index) => (
                <RelationshipCard key={index} {...rel} />
              ))}
            </div>
          </Section>

          <Section title="Story Arc">
            {character.storyPhases.map((phase, index) => (
              <StoryPhase key={index} {...phase} />
            ))}
          </Section>

          <Section title="Key Scenes">
            <div className={styles.scenes}>
              {character.keyScenes.map((scene, index) => (
                <SceneCard key={index} {...scene} />
              ))}
            </div>
          </Section>

          <Section title="Character Analysis">
            <div className={styles.analysis}>
              {character.analysis.map((point, index) => (
                <AnalysisPoint key={index} {...point} />
              ))}
            </div>
          </Section>

          {character.voiceActor && (
            <Section title="Voice Actor">
              <div className={styles.voiceActor}>
                <div className={styles.voiceActorImage}>
                  <Image
                    src={character.voiceActor.image}
                    alt={character.voiceActor.name}
                    width={96}
                    height={96}
                  />
                </div>
                <div className={styles.voiceActorInfo}>
                  <h3>{character.voiceActor.name}</h3>
                  <p>{character.voiceActor.description}</p>
                </div>
              </div>
            </Section>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className={styles.infoItem}>
      <span>{label}:</span>
      <span>{value}</span>
    </div>
  );
}

// ... 其他子组件 