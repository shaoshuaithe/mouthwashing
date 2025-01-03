import Navigation from '@/components/Navigation';
import RelatedStories from '@/components/story/RelatedStories';
import { BookOpen } from 'lucide-react';
import styles from './analysis.module.css';

export const metadata = {
  title: 'Story Analysis | MouthWashing Game - Deep Dive into the Plot',
  description: 'In-depth analysis of MouthWashing Game\'s story, characters, themes and hidden meanings. Explore the complex narrative and uncover all the secrets.',
  openGraph: {
    title: 'MouthWashing Game Story Analysis',
    description: 'Deep dive into the complex narrative and hidden meanings',
    images: ['/images/story/analysis-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/story/analysis'
  }
};

interface StoryAnalysis {
  id: string;
  title: string;
  type: 'Plot' | 'Character' | 'Theme' | 'Symbol' | 'Theory';
  description: string;
  content: string[];
  evidence: string[];
  relatedTopics?: string[];
}

export default function StoryAnalysisPage() {
  const analyses: StoryAnalysis[] = [
    {
      id: 'ANALYSIS_001',
      title: 'The True Nature of the Tulpar',
      type: 'Plot',
      description: 'An examination of the ship\'s real purpose and its connection to the crew\'s fate.',
      content: [
        'The Tulpar\'s experimental technology suggests more than a simple research vessel',
        'Hidden documents reveal military applications',
        'Crew selection process indicates predetermined roles in a larger experiment'
      ],
      evidence: [
        'Engineering logs showing unauthorized modifications',
        'Classified documents in Swansea\'s lab',
        'Crew psychological profiles'
      ],
      relatedTopics: ['Ship Design', 'Military Involvement', 'Crew Selection']
    },
    {
      id: 'ANALYSIS_002',
      title: 'Character Motivations',
      type: 'Character',
      description: 'Deep dive into the hidden motivations driving each crew member.',
      content: [
        'Anya\'s ethical dilemma between duty and truth',
        'Curly\'s struggle with command responsibility',
        'Daisuke\'s obsession with the ship\'s systems'
      ],
      evidence: [
        'Personal logs and diary entries',
        'Interaction patterns between crew members',
        'Medical psychological evaluations'
      ],
      relatedTopics: ['Character Relationships', 'Hidden Agendas', 'Psychological Profiles']
    },
    {
      id: 'ANALYSIS_003',
      title: 'Symbolism of the Ship',
      type: 'Symbol',
      description: 'The Tulpar as a metaphor for human ambition and the price of progress.',
      content: [
        'Ship name "Tulpar" references mythological winged horse - symbol of power and transcendence',
        'Ship\'s isolation reflects humanity\'s hubris in pushing boundaries',
        'Experimental technology represents the double-edged nature of progress'
      ],
      evidence: [
        'Ship\'s design documents emphasizing experimental nature',
        'Crew discussions about mission ethics',
        'Visual motifs throughout the ship\'s architecture'
      ],
      relatedTopics: ['Ship Mythology', 'Environmental Symbolism', 'Visual Themes']
    },
    {
      id: 'ANALYSIS_004',
      title: 'Recurring Themes',
      type: 'Theme',
      description: 'Analysis of major thematic elements throughout the narrative.',
      content: [
        'Isolation and its psychological effects on the crew',
        'Trust vs Suspicion in closed environments',
        'Ethics of scientific advancement',
        'Human nature under extreme conditions'
      ],
      evidence: [
        'Character psychological breakdowns',
        'Crew relationship deterioration patterns',
        'Research log ethical debates',
        'Environmental storytelling elements'
      ],
      relatedTopics: ['Psychological Horror', 'Moral Choices', 'Character Development']
    },
    {
      id: 'ANALYSIS_005',
      title: 'The Hidden Experiment',
      type: 'Theory',
      description: 'Examining evidence that suggests the crew themselves are part of a larger experiment.',
      content: [
        'Inconsistencies in mission briefing documents',
        'Unusual crew selection criteria',
        'Hidden monitoring systems throughout the ship',
        'Patterns in "random" events'
      ],
      evidence: [
        'Classified personnel files',
        'Surveillance footage anomalies',
        'Redacted mission parameters',
        'Crew behavioral analysis reports'
      ],
      relatedTopics: ['Conspiracy Theories', 'Hidden Agendas', 'True Mission Purpose']
    },
    {
      id: 'ANALYSIS_006',
      title: 'Parallel Narratives',
      type: 'Plot',
      description: 'How different character perspectives reveal multiple layers of truth.',
      content: [
        'Conflicting accounts of key events',
        'Unreliable narrator elements',
        'Timeline discrepancies',
        'Hidden connections between seemingly unrelated incidents'
      ],
      evidence: [
        'Personal log contradictions',
        'Security footage vs reported events',
        'Memory inconsistencies among crew',
        'Cross-referenced mission reports'
      ],
      relatedTopics: ['Narrative Structure', 'Unreliable Narrators', 'Story Branches']
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Story Analysis</h1>
          <p className={styles.subtitle}>
            Dive deep into the complex narrative of MouthWashing Game. Uncover hidden meanings,
            character motivations, and the true nature of the Tulpar's mission.
          </p>
        </section>

        <section className={styles.analysisSection}>
          {analyses.map((analysis) => (
            <div key={analysis.id} className={styles.analysisCard}>
              <div className={styles.analysisHeader}>
                <BookOpen className={styles.analysisIcon} />
                <div>
                  <h2 className={styles.analysisTitle}>{analysis.title}</h2>
                  <span className={`${styles.analysisType} ${styles[analysis.type.toLowerCase()]}`}>
                    {analysis.type}
                  </span>
                </div>
              </div>
              
              <p className={styles.analysisDescription}>{analysis.description}</p>
              
              <div className={styles.contentSection}>
                <h3>Key Points</h3>
                <ul>
                  {analysis.content.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.evidenceSection}>
                <h3>Supporting Evidence</h3>
                <ul>
                  {analysis.evidence.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {analysis.relatedTopics && (
                <div className={styles.relatedSection}>
                  <h3>Related Topics</h3>
                  <div className={styles.topicTags}>
                    {analysis.relatedTopics.map((topic, index) => (
                      <span key={index} className={styles.topicTag}>{topic}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
        <RelatedStories currentPath="/story/analysis" />
      </main>
    </>
  );
} 