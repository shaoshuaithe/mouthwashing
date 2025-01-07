import Navigation from '@/components/Navigation';
import styles from './privacy.module.css';

export const metadata = {
  title: 'Privacy Policy | MouthWashing Game',
  description: 'Privacy policy and data protection information for MouthWashing Game users.',
  alternates: {
    canonical: 'https://mouthwashinggame.help/privacy'
  }
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: March 15, 2024</p>

          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information
              when you use MouthWashing Game and our website. We are committed to ensuring the privacy
              and security of your data.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <h3>Game Data</h3>
            <ul>
              <li>Game progress and save data</li>
              <li>In-game choices and achievements</li>
              <li>Game settings and preferences</li>
            </ul>

            <h3>Technical Data</h3>
            <ul>
              <li>Device information and specifications</li>
              <li>Operating system version</li>
              <li>Crash reports and performance data</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and maintain game functionality</li>
              <li>To improve game performance and user experience</li>
              <li>To analyze game usage and optimize features</li>
              <li>To provide technical support and address issues</li>
              <li>To communicate important updates and announcements</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your information from unauthorized
              access, alteration, or disclosure. Your data is stored securely and accessed only when
              necessary for game operation.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for specific game features. These services have their
              own privacy policies and data handling practices. We recommend reviewing their policies
              for complete information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of non-essential data collection</li>
              <li>Receive a copy of your data</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data, please contact us at:
              <br />
              <a href="mailto:privacy@mouthwashinggame.help" className={styles.email}>
                privacy@mouthwashinggame.help
              </a>
            </p>
          </section>
        </section>
      </main>
    </>
  );
} 