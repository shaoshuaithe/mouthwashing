'use client';

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
    info: {
      role: string;
      age: string;
      id: string;
      status: string;
    };
    relationships: Array<{
      name: string;
      relationship: string;
      description: string;
    }>;
    storyArc: Array<{
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
    gallery: Array<{
      title: string;
      image: string;
    }>;
    guides: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  }
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const [showSpoilers, setShowSpoilers] = useState(false);

  return (
    <div className={styles.characterDetail}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={character.image}
              alt={character.name}
              fill
              className={styles.characterImage}
              priority
            />
          </div>
          
          <div className={styles.quickInfo}>
            <InfoItem label="Role" value={character.info.role} />
            <InfoItem label="Age" value={character.info.age} />
            <InfoItem label="ID Number" value={character.info.id} />
            <InfoItem label="Status" value={character.info.status} />
          </div>

          <div className={styles.content}>
            <h1>{character.name}</h1>
            <div className={styles.role}>{character.role}</div>
            <p className={styles.description}>{character.description}</p>
            
            {character.quote && (
              <div className={styles.quote}>
                <Quote className={styles.quoteIcon} size={24} />
                <p>{character.quote}</p>
              </div>
            )}

            {!showSpoilers && (
              <div className={styles.spoilerWarning}>
                <AlertTriangle size={24} />
                <div>
                  <h3>Spoiler Warning</h3>
                  <p>This page contains major story spoilers.</p>
                  <button className={styles.spoilerButton} onClick={() => setShowSpoilers(true)}>
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
          <Section title="Background Story">
            <p>{character.background}</p>
          </Section>

          <Section title="Key Relationships">
            {character.relationships.map((rel, index) => (
              <RelationshipCard key={index} {...rel} />
            ))}
          </Section>

          <Section title="Story Arc">
            {character.storyArc.map((phase, index) => (
              <StoryPhase key={index} {...phase} />
            ))}
          </Section>

          <Section title="Key Scenes">
            {character.keyScenes.map((scene, index) => (
              <SceneCard key={index} {...scene} />
            ))}
          </Section>

          <Section title="Character Analysis">
            <div className={styles.analysis}>
              {character.analysis.map((point, index) => (
                <AnalysisPoint key={index} {...point} />
              ))}
            </div>
          </Section>

          <Section title="Character Gallery">
            <div className={styles.gallery}>
              {character.gallery.map((item, index) => (
                <GalleryItem key={index} {...item} />
              ))}
            </div>
          </Section>

          <Section title="Related Guides">
            <div className={styles.guides}>
              {character.guides.map((guide, index) => (
                <GuideLink key={index} {...guide} />
              ))}
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}

function RelationshipCard({ name, relationship, description }: { name: string; relationship: string; description: string }) {
  return (
    <div className={styles.relationship}>
      <h3>{name}</h3>
      <p className={styles.relationshipType}>{relationship}</p>
      <p className={styles.relationshipDescription}>{description}</p>
    </div>
  );
}

function StoryPhase({ phase, content }: { phase: string; content: string }) {
  return (
    <div className={styles.storyPhase}>
      <h3>{phase}</h3>
      <p>{content}</p>
    </div>
  );
}

function SceneCard({ title, description }: { title: string; description: string }) {
  return (
    <div className={styles.scene}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function AnalysisPoint({ title, content }: { title: string; content: string }) {
  return (
    <div className={styles.analysisPoint}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.infoItem}>
      <span>{label}:</span>
      <span>{value}</span>
    </div>
  );
}

function GalleryItem({ title, image }: { title: string; image: string }) {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.galleryImageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.galleryImage}
        />
      </div>
      <p>{title}</p>
    </div>
  );
}

function GuideLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <a href={href} className={styles.guideLink}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
} 