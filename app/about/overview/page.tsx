import RelatedAbout from '@/components/about/RelatedAbout';
import Navigation from '@/components/Navigation';
import { Brain, Gamepad2, Palette, Users } from 'lucide-react';
import styles from './overview.module.css';

export const metadata = {
  title: 'Game Overview | MouthWashing - A Psychological Space Horror Adventure',
  description: 'Discover MouthWashing, a unique psychological horror game set aboard the Tulpar spacecraft. Experience an immersive narrative with multiple character perspectives and mind-bending mysteries.',
  openGraph: {
    title: 'MouthWashing Game Overview',
    description: 'Explore the immersive world of MouthWashing',
    images: ['/images/about/overview-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/about/overview'
  }
};

interface FeatureSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export default function OverviewPage() {
  const features: FeatureSection[] = [
    {
      title: 'Immersive Gameplay',
      icon: <Gamepad2 className={styles.featureIcon} />,
      description: 'Experience a unique blend of narrative exploration and psychological horror aboard the Tulpar.',
      details: [
        'First-person perspective exploration',
        'Environmental interaction and puzzle-solving',
        'Dynamic physics system',
        'Detailed inventory management'
      ]
    },
    {
      title: 'Complex Characters',
      icon: <Users className={styles.featureIcon} />,
      description: 'Follow the intertwining stories of the Tulpar\'s crew members as they face unimaginable challenges.',
      details: [
        'Multiple character perspectives',
        'Deep character development',
        'Evolving relationships',
        'Personal story arcs'
      ]
    },
    {
      title: 'Psychological Elements',
      icon: <Brain className={styles.featureIcon} />,
      description: 'Delve into a mind-bending narrative that challenges perception and reality.',
      details: [
        'Reality-altering sequences',
        'Psychological horror focus',
        'Atmospheric tension building',
        'Surreal story elements'
      ]
    },
    {
      title: 'Artistic Direction',
      icon: <Palette className={styles.featureIcon} />,
      description: 'Experience a unique visual style that enhances the horror atmosphere.',
      details: [
        'Distinctive art direction',
        'Atmospheric lighting',
        'Detailed environment design',
        'Immersive sound design'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>About MouthWashing</h1>
          <p className={styles.subtitle}>
            Step into a psychological horror adventure that challenges your perception of reality.
            Explore the mysterious Tulpar spacecraft and uncover the dark secrets of its crew.
          </p>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.storyOverview}>
            <h2>The Story</h2>
            <p>
              When the Tulpar's routine space freight mission goes catastrophically wrong, 
              the crew finds themselves stranded in the depths of space. As supplies dwindle
              and tensions rise, they discover disturbing truths about their mission and cargo
              that will test their sanity and humanity.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  {feature.icon}
                  <h3>{feature.title}</h3>
                </div>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.featureList}>
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <RelatedAbout currentPath="/about/overview" />
      </main>
    </>
  );
} 