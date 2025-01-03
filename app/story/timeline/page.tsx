import Navigation from '@/components/Navigation';
import RelatedStories from '@/components/story/RelatedStories';
import { Clock } from 'lucide-react';
import styles from './timeline.module.css';

export const metadata = {
  title: 'Story Timeline | MouthWashing Game - Complete Event Chronology',
  description: 'Complete chronological timeline of events in MouthWashing Game. Track the story from mission preparation to its dramatic conclusion.',
  openGraph: {
    title: 'MouthWashing Game Story Timeline',
    description: 'Complete chronological timeline of all major events',
    images: ['/images/story/timeline-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/story/timeline'
  }
};

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  type: 'Mission' | 'Character' | 'Discovery' | 'Incident' | 'Critical';
  description: string;
  details: string[];
  characters: string[];
  relatedEvents?: string[];
}

export default function TimelinePage() {
  const events: TimelineEvent[] = [
    {
      id: 'EVENT_001',
      date: 'March 15, 2184',
      title: 'Mission Preparation',
      type: 'Mission',
      description: 'Initial crew selection and mission briefing for the Tulpar expedition.',
      details: [
        'Crew members selected based on specialized criteria',
        'Initial mission parameters established',
        'Ship modifications completed',
        'Final psychological evaluations conducted'
      ],
      characters: ['Curly', 'Swansea'],
      relatedEvents: ['Crew Training', 'Ship Preparation']
    },
    {
      id: 'EVENT_002',
      date: 'April 3, 2184',
      title: 'Launch Day Incident',
      type: 'Incident',
      description: 'Unexplained anomaly during launch sequence raises first concerns.',
      details: [
        'Navigation systems showed momentary malfunction',
        'Unexplained energy signature detected',
        'Daisuke reports unusual readings',
        'First signs of ship\'s unique behavior'
      ],
      characters: ['Daisuke', 'Jimmy'],
      relatedEvents: ['System Anomalies', 'Initial Concerns']
    },
    {
      id: 'EVENT_003',
      date: 'April 15, 2184',
      title: 'First Discovery',
      type: 'Discovery',
      description: 'Anya discovers irregularities in crew medical data.',
      details: [
        'Unusual patterns in crew brain scans',
        'Inconsistencies in baseline medical records',
        'Evidence of unauthorized medical procedures',
        'Initial cover-up attempts detected'
      ],
      characters: ['Anya'],
      relatedEvents: ['Medical Mystery', 'Hidden Truth']
    },
    {
      id: 'EVENT_004',
      date: 'May 1, 2184',
      title: 'Critical System Failure',
      type: 'Critical',
      description: 'Major malfunction reveals deeper issues with ship\'s systems.',
      details: [
        'Multiple system failures cascade',
        'Hidden protocols activate automatically',
        'True nature of ship\'s AI revealed',
        'Crew forced to make first difficult choices'
      ],
      characters: ['Curly', 'Daisuke', 'Jimmy'],
      relatedEvents: ['System Collapse', 'AI Awakening']
    },
    {
      id: 'EVENT_005',
      date: 'May 10, 2184',
      title: 'Character Crisis',
      type: 'Character',
      description: 'Swansea\'s research breakthrough leads to ethical conflict.',
      details: [
        'Revolutionary discovery made in primary research',
        'Ethical implications become apparent',
        'Crew divisions begin to form',
        'Key decisions about research direction required'
      ],
      characters: ['Swansea', 'Anya', 'Curly'],
      relatedEvents: ['Research Ethics', 'Crew Division']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Story Timeline</h1>
          <p className={styles.subtitle}>
            Track the complete chronological sequence of events in MouthWashing Game.
            From mission preparation to its dramatic conclusion.
          </p>
        </section>

        <section className={styles.timelineSection}>
          {events.map((event) => (
            <div key={event.id} className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <Clock className={styles.timelineIcon} />
                <div>
                  <h2 className={styles.timelineTitle}>{event.title}</h2>
                  <div className={styles.timelineDetails}>
                    <span className={styles.timelineDate}>{event.date}</span>
                    <span className={`${styles.timelineType} ${styles[event.type.toLowerCase()]}`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className={styles.timelineDescription}>{event.description}</p>
              
              <div className={styles.detailsSection}>
                <h3>Event Details</h3>
                <ul>
                  {event.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.charactersSection}>
                <h3>Key Characters</h3>
                <div className={styles.characterTags}>
                  {event.characters.map((character, index) => (
                    <span key={index} className={styles.characterTag}>{character}</span>
                  ))}
                </div>
              </div>
              
              {event.relatedEvents && (
                <div className={styles.relatedSection}>
                  <h3>Related Events</h3>
                  <div className={styles.eventTags}>
                    {event.relatedEvents.map((relatedEvent, index) => (
                      <span key={index} className={styles.eventTag}>{relatedEvent}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
        <RelatedStories currentPath="/story/timeline" />
      </main>
    </>
  );
} 