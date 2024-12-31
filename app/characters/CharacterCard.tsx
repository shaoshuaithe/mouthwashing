import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  name: string;
  image: string;
  description: string;
  traits: string[];
  role: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  description,
  traits,
  role
}) => {
  const characterSlug = name.toLowerCase();
  
  return (
    <Link href={`/characters/${characterSlug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.traits}>
            {traits.map((trait, index) => (
              <span key={index} className={styles.trait}>
                {trait}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.readMore}>
          Learn More About {name} →
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard; 