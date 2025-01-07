import Navigation from '@/components/Navigation';
import styles from './terms.module.css';

export const metadata = {
  title: 'Terms of Service | MouthWashing Game',
  description: 'Terms of service and user agreement for MouthWashing Game.',
  alternates: {
    canonical: 'https://mouthwashinggame.help/terms'
  }
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: March 15, 2024</p>

          <section className={styles.section}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using MouthWashing Game and our website, you agree to be bound by these
              Terms of Service. If you disagree with any part of these terms, you may not access our
              services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Intellectual Property</h2>
            <p>
              MouthWashing Game and all related content, including but not limited to graphics,
              characters, music, story elements, and code, are protected by copyright and other
              intellectual property laws.
            </p>
            <ul>
              <li>You may not copy, modify, or distribute game content without authorization</li>
              <li>User-created content must respect our intellectual property rights</li>
              <li>The game may only be used for personal, non-commercial purposes</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. User Accounts</h2>
            <p>
              When creating an account, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not share or transfer your account to others</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use cheats, automation software, or exploits</li>
              <li>Harass other players or engage in harmful behavior</li>
              <li>Attempt to access restricted areas of the game</li>
              <li>Use the game for commercial purposes without authorization</li>
              <li>Distribute modified versions of the game</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. User-Generated Content</h2>
            <p>
              When creating and sharing content within the game community:
            </p>
            <ul>
              <li>You retain ownership of your original content</li>
              <li>You grant us license to use and display your content</li>
              <li>Content must not infringe on others' rights</li>
              <li>We may remove content that violates our policies</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Modifications to Service</h2>
            <p>
              We reserve the right to:
            </p>
            <ul>
              <li>Modify or discontinue game features</li>
              <li>Update these terms with reasonable notice</li>
              <li>Change pricing for additional content</li>
              <li>Suspend or terminate accounts for violations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Limitation of Liability</h2>
            <p>
              We provide the game "as is" without warranties of any kind. We are not liable for any
              damages arising from your use of the game or inability to access our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by applicable laws. Any disputes shall be resolved in the
              appropriate courts with jurisdiction over such matters.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              <br />
              <a href="mailto:legal@mouthwashinggame.help" className={styles.email}>
                legal@mouthwashinggame.help
              </a>
            </p>
          </section>
        </section>
      </main>
    </>
  );
} 