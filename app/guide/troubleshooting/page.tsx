import Navigation from '@/components/Navigation';
import RelatedGuides from '@/components/RelatedGuides';
import { AlertCircle } from 'lucide-react';
import styles from './troubleshooting.module.css';

export const metadata = {
  title: 'Troubleshooting Guide | MouthWashing Game - Common Issues & Solutions',
  description: 'Find solutions to common issues in MouthWashing Game. Technical problems, gameplay bugs, and performance optimization tips.',
  openGraph: {
    title: 'MouthWashing Game Troubleshooting Guide',
    description: 'Solutions for common game issues and technical problems',
    images: ['/images/guide/troubleshooting-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/guide/troubleshooting'
  }
};

interface Issue {
  id: string;
  title: string;
  type: 'Technical' | 'Gameplay' | 'Performance' | 'Save Data' | 'Controls';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  symptoms: string[];
  solutions: string[];
  prevention?: string[];
}

export default function TroubleshootingPage() {
  const issues: Issue[] = [
    {
      id: 'ISSUE_001',
      title: 'Game Crashes During Cutscenes',
      type: 'Technical',
      severity: 'High',
      description: 'Game unexpectedly closes during story cutscenes or character dialogues.',
      symptoms: [
        'Game closes without error message',
        'Freezing before crash',
        'Audio continues playing after visual freeze'
      ],
      solutions: [
        'Verify game file integrity through Steam',
        'Update graphics drivers to latest version',
        'Disable background applications',
        'Lower graphics settings temporarily'
      ],
      prevention: [
        'Keep drivers updated regularly',
        'Monitor system temperature',
        'Maintain sufficient free disk space'
      ]
    },
    {
      id: 'ISSUE_002',
      title: 'Save Data Corruption',
      type: 'Save Data',
      severity: 'Critical',
      description: 'Save files become corrupted or unreadable, preventing game progress loading.',
      symptoms: [
        'Unable to load saved games',
        'Error message when accessing save menu',
        'Save files appear but load to black screen'
      ],
      solutions: [
        'Restore backup save files from cloud',
        'Verify game file integrity',
        'Delete corrupted save and start new game',
        'Check disk for errors'
      ],
      prevention: [
        'Enable cloud saves',
        'Don\'t exit game during save operations',
        'Maintain regular backups'
      ]
    },
    {
      id: 'ISSUE_003',
      title: 'Performance Drops in Engineering Bay',
      type: 'Performance',
      severity: 'Medium',
      description: 'Significant FPS drops when entering or navigating the Engineering Bay area.',
      symptoms: [
        'Stuttering gameplay',
        'Delayed input response',
        'Visual artifacts in specific areas'
      ],
      solutions: [
        'Lower particle effect quality',
        'Reduce shadow quality',
        'Update graphics drivers',
        'Clear shader cache'
      ],
      prevention: [
        'Regular system maintenance',
        'Monitor resource usage',
        'Keep graphics settings optimized'
      ]
    },
    {
      id: 'ISSUE_004',
      title: 'Controls Unresponsive',
      type: 'Controls',
      severity: 'High',
      description: 'Game stops responding to keyboard or controller inputs intermittently.',
      symptoms: [
        'Delayed or no response to inputs',
        'Character movement stuck',
        'Unable to interact with objects'
      ],
      solutions: [
        'Disconnect and reconnect controller',
        'Restart game and system',
        'Clear input device cache',
        'Check USB ports and connections'
      ],
      prevention: [
        'Keep controllers updated',
        'Regular system restarts',
        'Check for conflicting software'
      ]
    },
    {
      id: 'ISSUE_005',
      title: 'Quest Progress Not Updating',
      type: 'Gameplay',
      severity: 'Medium',
      description: 'Quest objectives don\'t update or complete despite meeting requirements.',
      symptoms: [
        'Stuck quest objectives',
        'Missing quest markers',
        'Unable to progress story'
      ],
      solutions: [
        'Reload previous save',
        'Complete quest steps in order',
        'Verify all requirements are met',
        'Contact support if persistent'
      ],
      prevention: [
        'Follow quest guidelines carefully',
        'Save regularly',
        'Don\'t skip cutscenes'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Troubleshooting Guide</h1>
          <p className={styles.subtitle}>
            Solutions for common issues in MouthWashing Game. Find fixes for technical problems,
            gameplay bugs, and performance optimization tips.
          </p>
        </section>

        <section className={styles.issuesSection}>
          {issues.map((issue) => (
            <div key={issue.id} className={styles.issueCard}>
              <div className={styles.issueHeader}>
                <AlertCircle className={styles.issueIcon} />
                <div>
                  <h2 className={styles.issueName}>{issue.title}</h2>
                  <div className={styles.issueDetails}>
                    <span className={`${styles.issueType} ${styles[issue.type.toLowerCase()]}`}>
                      {issue.type}
                    </span>
                    <span className={`${styles.issueSeverity} ${styles[issue.severity.toLowerCase()]}`}>
                      {issue.severity}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className={styles.issueDescription}>{issue.description}</p>
              
              <div className={styles.symptomsSection}>
                <h3>Symptoms</h3>
                <ul>
                  {issue.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.solutionsSection}>
                <h3>Solutions</h3>
                <ul>
                  {issue.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
              
              {issue.prevention && (
                <div className={styles.preventionSection}>
                  <h3>Prevention</h3>
                  <ul>
                    {issue.prevention.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>
        <RelatedGuides currentPath="/guide/troubleshooting" />
      </main>
    </>
  );
} 