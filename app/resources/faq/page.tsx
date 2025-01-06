import Navigation from '@/components/Navigation';
import RelatedResources from '@/components/resources/RelatedResources';
import { Clock, Gamepad, Heart, Info, Users } from 'lucide-react';
import styles from './faq.module.css';

export const metadata = {
  title: 'FAQ | MouthWashing Game - Frequently Asked Questions',
  description: 'Find answers to common questions about MouthWashing Game. Learn about gameplay, story, characters, and more.',
  openGraph: {
    title: 'MouthWashing Game FAQ',
    description: 'Common questions and answers about the game',
    images: ['/images/resources/faq-banner.jpg'],
  },
  alternates: {
    canonical: 'https://mouthwashinggame.help/resources/faq'
  }
};

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  questions: Array<{
    question: string;
    answer: string | React.ReactNode;
  }>;
}

export default function FAQPage() {
  const categories: FAQCategory[] = [
    {
      title: 'About the Game',
      icon: <Info className={styles.categoryIcon} />,
      questions: [
        {
          question: 'What is MouthWashing?',
          answer: 'MouthWashing is a psychological horror adventure game that takes place aboard the Tulpar, a deep-space freighter. The game blends narrative exploration with surreal horror elements, offering a unique nonlinear story experienced through multiple crew members\' perspectives.'
        },
        {
          question: 'What\'s the story premise?',
          answer: 'Following a catastrophic crash, the crew finds themselves stranded in the depths of space. As supplies dwindle and tensions rise, players uncover disturbing truths about their mission and cargo. The narrative unfolds across multiple timelines, focusing on the experiences of Captain Curly and co-pilot Jimmy.'
        }
      ]
    },
    {
      title: 'Gameplay Features',
      icon: <Gamepad className={styles.categoryIcon} />,
      questions: [
        {
          question: 'How does the gameplay work?',
          answer: 'The game is played from a first-person perspective, emphasizing exploration and puzzle-solving over combat. Players interact with the environment, manage resources, and engage in dialogue to uncover the story. The game features realistic physics and dynamic environmental interactions.'
        },
        {
          question: 'What makes MouthWashing unique?',
          answer: (
            <ul className={styles.featureList}>
              <li>Nonlinear storytelling across multiple timelines</li>
              <li>Psychological horror with minimal reliance on jump scares</li>
              <li>Deep character interactions and relationships</li>
              <li>Immersive atmosphere through visuals and sound design</li>
            </ul>
          )
        }
      ]
    },
    {
      title: 'Characters & Story',
      icon: <Users className={styles.categoryIcon} />,
      questions: [
        {
          question: 'Who are the main characters?',
          answer: (
            <ul className={styles.characterList}>
              <li><strong>Captain Curly:</strong> The ship's injured leader</li>
              <li><strong>Jimmy:</strong> Co-pilot thrust into leadership</li>
              <li><strong>Anya:</strong> Medical officer maintaining order</li>
              <li><strong>Daisuke:</strong> Newcomer facing crew challenges</li>
              <li><strong>Swansea:</strong> Veteran with conflicting priorities</li>
            </ul>
          )
        },
        {
          question: 'What inspired the game?',
          answer: 'The game draws inspiration from classic survival horror and psychological thrillers like Twin Peaks, Mothered, and Skinamarink. Its unique visual style combines retro-futuristic elements with psychological horror to create an immersive experience.'
        }
      ]
    },
    {
      title: 'Technical Details',
      icon: <Clock className={styles.categoryIcon} />,
      questions: [
        {
          question: 'How long is the game?',
          answer: 'A typical playthrough lasts 2-3 hours, though this can vary based on exploration style and narrative engagement. The nonlinear structure encourages multiple playthroughs to uncover all story elements.'
        },
        {
          question: 'Are there future updates planned?',
          answer: 'The development team is actively working on updates based on community feedback. Planned additions include an original soundtrack, trading cards, and ongoing gameplay refinements.'
        }
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Find answers to common questions about MouthWashing. Learn about the
            game's features, story, characters, and more.
          </p>
        </section>

        <section className={styles.faqSection}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryHeader}>
                {category.icon}
                <h2>{category.title}</h2>
              </div>
              
              <div className={styles.questions}>
                {category.questions.map((item, idx) => (
                  <div key={idx} className={styles.questionCard}>
                    <h3>{item.question}</h3>
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.supportSection}>
          <h2>Still Have Questions?</h2>
          <p>
            Join our community on Steam or visit our support channels for additional help.
            Our team and community members are always ready to assist you.
          </p>
          <div className={styles.supportLinks}>
            <a 
              href="https://steamcommunity.com/app/2475490/discussions/" 
              className={styles.supportLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className={styles.supportIcon} />
              Steam Community
            </a>
          </div>
        </section>

        <RelatedResources currentPath="/resources/faq" />
      </main>
    </>
  );
} 