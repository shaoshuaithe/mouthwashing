import Navigation from '@/components/Navigation';
import RelatedGuides from '@/components/RelatedGuides';
import { Package } from 'lucide-react';
import styles from './items.module.css';

export const metadata = {
  title: 'Items Guide | MouthWashing Game - Complete Items List',
  description: 'Complete guide to all items in MouthWashing Game. Learn about key items, their locations, and uses in solving the Tulpar\'s mysteries.',
  openGraph: {
    title: 'MouthWashing Game Items Guide',
    description: 'Discover all items and their uses in the game',
    images: ['/images/guide/items-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide/items'
  }
};

interface Item {
  id: string;
  name: string;
  type: 'Key' | 'Tool' | 'Document' | 'Medical' | 'Special';
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Unique';
  description: string;
  location: string;
  uses: string[];
  relatedCharacters?: string[];
}

export default function ItemsGuidePage() {
  const items: Item[] = [
    {
      id: 'ITEM_001',
      name: 'Captain\'s Keycard',
      type: 'Key',
      rarity: 'Unique',
      description: 'High-level security card with access to restricted areas of the ship.',
      location: 'Found in Captain Curly\'s quarters after completing his trust questline.',
      uses: [
        'Access to the bridge',
        'Open secure storage areas',
        'Activate emergency systems'
      ],
      relatedCharacters: ['Curly']
    },
    {
      id: 'ITEM_002',
      name: 'Medical Scanner',
      type: 'Medical',
      rarity: 'Uncommon',
      description: 'Advanced diagnostic tool used in the medical bay.',
      location: 'Medical Bay, requires Anya\'s permission to access.',
      uses: [
        'Diagnose crew conditions',
        'Analyze biological samples',
        'Track crew health status'
      ],
      relatedCharacters: ['Anya']
    },
    {
      id: 'ITEM_003',
      name: 'Engineering Toolkit',
      type: 'Tool',
      rarity: 'Common',
      description: 'Standard-issue toolkit for ship maintenance and repairs.',
      location: 'Engineering Bay, available after basic training.',
      uses: [
        'Basic repairs',
        'System maintenance',
        'Access maintenance panels'
      ],
      relatedCharacters: ['Daisuke', 'Jimmy']
    },
    {
      id: 'ITEM_004',
      name: 'Research Notes',
      type: 'Document',
      rarity: 'Rare',
      description: 'Encrypted notes detailing classified research experiments.',
      location: 'Hidden throughout the research lab areas.',
      uses: [
        'Unlock story revelations',
        'Understand ship\'s purpose',
        'Complete research quests'
      ],
      relatedCharacters: ['Swansea']
    },
    {
      id: 'ITEM_005',
      name: 'Emergency Beacon',
      type: 'Special',
      rarity: 'Unique',
      description: 'Last-resort distress signal device with unknown modifications.',
      location: 'Hidden in a secret compartment in the escape pod bay.',
      uses: [
        'Signal for help',
        'Trigger special events',
        'Required for certain endings'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Items Guide</h1>
          <p className={styles.subtitle}>
            Complete guide to all items in MouthWashing Game. Learn where to find them and how they
            can help you uncover the truth.
          </p>
        </section>

        <section className={styles.itemsSection}>
          {items.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <div className={styles.itemHeader}>
                <Package className={styles.itemIcon} />
                <div>
                  <h2 className={styles.itemName}>{item.name}</h2>
                  <div className={styles.itemDetails}>
                    <span className={`${styles.itemType} ${styles[item.type.toLowerCase()]}`}>
                      {item.type}
                    </span>
                    <span className={`${styles.itemRarity} ${styles[item.rarity.toLowerCase()]}`}>
                      {item.rarity}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className={styles.itemDescription}>{item.description}</p>
              
              <div className={styles.locationSection}>
                <h3>Location</h3>
                <p>{item.location}</p>
              </div>
              
              <div className={styles.usesSection}>
                <h3>Uses</h3>
                <ul>
                  {item.uses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
              
              {item.relatedCharacters && (
                <div className={styles.charactersSection}>
                  <h3>Related Characters</h3>
                  <div className={styles.characterTags}>
                    {item.relatedCharacters.map((character, index) => (
                      <span key={index} className={styles.characterTag}>{character}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
        <RelatedGuides currentPath="/guide/items" />
      </main>
    </>
  );
} 