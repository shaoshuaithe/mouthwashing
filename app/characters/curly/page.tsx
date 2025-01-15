import Navigation from '@/components/Navigation';
import { Quote } from 'lucide-react';
import {
  AnalysisPoint,
  Comment,
  GuideLink,
  InfoItem,
  RelationshipCard,
  SceneCard,
  Section,
  StoryPhase
} from '../components/CharacterComponents';
import styles from '../styles/character-layout.module.css';

export default function CurlyCharacterPage() {
  return (
    <>
      <Navigation />
      <div className={styles.page}>
        <div className={styles.container}>
          {/* Character Header */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <img src="/images/characters/Curly.webp" alt="Curly" className={styles.characterImage} />
                </div>
                
                <div className={styles.infoContainer}>
                  <h1>Curly</h1>
                  <p className={styles.description}>
                    Captain of the Tulpar, a seasoned leader with a mysterious past and a complex web of loyalties.
                  </p>
                  
                  <div className={styles.quote}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p>"Sometimes the hardest choices are the ones we have to make alone."</p>
                  </div>

                  <div className={styles.quickInfo}>
                    <InfoItem label="Role" value="Ship Captain" />
                    <InfoItem label="Age" value="42" />
                    <InfoItem label="ID Number" value="TPE-CPT-001" />
                    <InfoItem label="Status" value="Active Commander" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Story */}
          <Section title="Background Story">
            <p className={styles.backgroundText}>
              Before commanding the Tulpar, Curly served in various high-stakes missions across the galaxy.
              His reputation for handling difficult situations with a calm demeanor made him the perfect
              choice for this sensitive assignment.
            </p>
            <p className={styles.backgroundText}>
              Despite his outward composure, Curly carries the weight of past decisions that continue to
              influence his leadership style and relationships with the crew.
            </p>
          </Section>

          {/* Key Relationships */}
          <Section title="Key Relationships">
            <RelationshipCard
              name="Anya"
              relationship="Professional Dynamic"
              description="Maintains a careful balance between trusting Anya's medical expertise and
              protecting the mission's classified aspects."
              href="/characters/anya"
            />
            <RelationshipCard
              name="Jimmy"
              relationship="Mentor Figure"
              description="Takes a special interest in Jimmy's development, though their relationship
              becomes strained as secrets surface."
              href="/characters/jimmy"
            />
            <RelationshipCard
              name="Daisuke"
              relationship="Command Chain"
              description="Values Daisuke's technical skills while monitoring his increasingly
              erratic behavior."
              href="/characters/daisuke"
            />
            <RelationshipCard
              name="Swansea"
              relationship="Strategic Alliance"
              description="Forms a complex alliance with Swansea, balancing their shared mission objectives
              while navigating potential conflicts of interest in their leadership approaches."
              href="/characters/swansea"
            />
          </Section>

          {/* Story Arc */}
          <Section title="Story Arc">
            <StoryPhase
              phase="Command Authority"
              content="Establishes his presence as a respected leader while dealing with mounting
              pressures from mission control."
            />
            <StoryPhase
              phase="Hidden Agenda"
              content="Gradually reveals deeper layers of the mission's true purpose and his role
              in its execution."
            />
            <StoryPhase
              phase="Crisis Point"
              content="Faces critical decisions that test his loyalty to both his crew and his
              original mission objectives."
            />
            <StoryPhase
              phase="True Colors"
              content="Must ultimately choose between following orders and protecting his crew,
              revealing his true character."
            />
          </Section>

          {/* Key Scenes */}
          <Section title="Key Scenes">
            <SceneCard
              title="Bridge Confrontation"
              description="A tense moment where Curly must choose between following orders and protecting his crew."
            />
            <SceneCard
              title="Secret Meeting"
              description="A clandestine meeting reveals the true scope of the mission and Curly's involvement."
            />
            <SceneCard
              title="Final Decision"
              description="The climactic moment where Curly's true allegiances are revealed."
            />
          </Section>

          {/* Character Analysis */}
          <Section title="Character Analysis">
            <AnalysisPoint
              title="Leadership Style"
              content="Curly's approach to leadership combines military discipline with a deep understanding
              of human nature, making him both respected and trusted by his crew."
            />
            <AnalysisPoint
              title="Internal Conflict"
              content="The tension between his duty to the mission and his responsibility to the crew
              creates compelling character development throughout the story."
            />
            <AnalysisPoint
              title="Past Influences"
              content="His experiences in previous missions shape his decision-making and relationships,
              adding depth to his character arc."
            />
          </Section>

          {/* Voice Actor Info */}
          <Section title="Voice Actor">
            <div className={styles.voiceActor}>
              <div className={styles.voiceActorImage}>
                <img src="/images/characters/Ian Hayden.webp" alt="Voice Actor" />
              </div>
              <div className={styles.voiceActorInfo}>
                <h3>Ian Hayden</h3>
                <p>Voice of Curly</p>
                <p>
                  A veteran voice actor with extensive experience in video games. His deep, commanding
                  voice brings authority and complexity to Curly's character.
                </p>
              </div>
            </div>
          </Section>

          {/* Related Guides */}
          <Section title="Related Guides">
              <GuideLink
                href="/guide/walkthrough"
                title="Captain's Critical Decisions Guide"
                description="A complete guide to all major decision points in Curly's storyline"
              />
              <GuideLink
                href="/guide/endings"
                title="Curly's Endings Guide"
                description="How to achieve all endings related to Captain Curly's story"
              />
              <GuideLink
                href="/guide/puzzles"
                title="Bridge Command Puzzles"
                description="Solutions to all puzzles in the Captain's storyline"
              />
          </Section>

          {/* Comments Section */}
          <Section title="Community Discussion">
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Share your thoughts about Captain Curly..."
              ></textarea>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Post Comment
              </button>
            </div>
            
            <div className="space-y-4">
              <Comment
                username="SpaceExplorer"
                date="3 days ago"
                content="The way Curly's character develops throughout the story is masterful. His
                internal struggles really make you think about loyalty and duty."
              />
              <Comment
                username="CaptainFan"
                date="1 week ago"
                content="That scene in the bridge where he has to make the final choice... one of the
                most intense moments in the game!"
              />
              <Comment
                username="StorySeeker"
                date="2 weeks ago"
                content="Has anyone found all the hidden logs in his quarters? They add so much to his
                backstory!"
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata() {
  const canonicalUrl = 'https://mouthwashinggame.help/characters/curly';
  return {
    title: 'Captain Curly | MouthWashing Game Character',
    description: 'Meet Captain Curly, the mysterious leader of the Tulpar. Explore his background, relationships, and the difficult choices he faces in the MouthWashing Game.',
    openGraph: {
      title: 'Captain Curly | MouthWashing Game Character',
      description: 'Meet Captain Curly, the mysterious leader of the Tulpar. Explore his background, relationships, and the difficult choices he faces in the MouthWashing Game.',
      images: ['/images/characters/curly.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Captain Curly | MouthWashing Game Character',
      description: 'Meet Captain Curly, the mysterious leader of the Tulpar. Explore his background, relationships, and the difficult choices he faces in the MouthWashing Game.',
      images: ['/images/characters/curly.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
} 