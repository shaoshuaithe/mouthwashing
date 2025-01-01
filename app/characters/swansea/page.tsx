import Navigation from '@/components/Navigation';
import { Quote } from 'lucide-react';
import {
  AnalysisPoint,
  Comment,
  GalleryItem,
  GuideLink,
  InfoItem,
  RelationshipCard,
  SceneCard,
  Section,
  StoryPhase
} from '../components/CharacterComponents';
import styles from '../styles/character-layout.module.css';

export default function SwanseaCharacterPage() {
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
                  <img src="/images/characters/swansea.png" alt="Swansea" className={styles.characterImage} />
                </div>
                
                <div className={styles.infoContainer}>
                  <h1>Swansea</h1>
                  <p className={styles.description}>
                    Research Director aboard the Tulpar, a brilliant scientist whose dedication to
                    the mission's scientific goals may unlock dangerous secrets.
                  </p>
                  
                  <div className={styles.quote}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p>"The pursuit of knowledge demands sacrifices. The question is: who pays the price?"</p>
                  </div>

                  <div className={styles.quickInfo}>
                    <InfoItem label="Role" value="Research Director" />
                    <InfoItem label="Age" value="45" />
                    <InfoItem label="ID Number" value="TPE-SCI-221" />
                    <InfoItem label="Status" value="Senior Staff" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Story */}
          <Section title="Background Story">
            <p className={styles.backgroundText}>
              A renowned scientist in quantum physics and deep space phenomena, Swansea's theories
              about space-time manipulation drew both acclaim and controversy in academic circles.
              The Tulpar mission represents an opportunity to prove these theories correct.
            </p>
            <p className={styles.backgroundText}>
              Their dedication to scientific discovery often conflicts with ethical considerations,
              creating tension between research objectives and crew safety.
            </p>
          </Section>

          {/* Key Relationships */}
          <Section title="Key Relationships">
            <RelationshipCard
              name="Curly"
              relationship="Professional Tension"
              description="Maintains a complex relationship with Captain Curly, often challenging
              his authority in favor of research priorities."
              href="/characters/curly"
            />
            <RelationshipCard
              name="Anya"
              relationship="Scientific Collaboration"
              description="Works with Anya on various research projects, though their views on
              ethical boundaries often differ."
              href="/characters/anya"
            />
            <RelationshipCard
              name="Daisuke"
              relationship="Technical Partnership"
              description="Collaborates with Daisuke on ship's systems, particularly those
              related to their experimental research."
              href="/characters/daisuke"
            />
            <RelationshipCard
              name="Jimmy"
              relationship="Mentor Role"
              description="Takes an interest in Jimmy's technical aptitude, seeing potential
              for advancing their research goals."
              href="/characters/jimmy"
            />
          </Section>

          {/* Story Arc */}
          <Section title="Story Arc">
            <StoryPhase
              phase="Research Focus"
              content="Initially concentrated on advancing their scientific theories through
              the ship's unique capabilities."
            />
            <StoryPhase
              phase="Ethical Dilemma"
              content="Begins to face moral questions as research findings suggest potentially
              dangerous implications."
            />
            <StoryPhase
              phase="Critical Decision"
              content="Must choose between pursuing groundbreaking discoveries and protecting
              the crew from their consequences."
            />
            <StoryPhase
              phase="Final Choice"
              content="Faces the ultimate decision between scientific achievement and human cost."
            />
          </Section>

          {/* Key Scenes */}
          <Section title="Key Scenes">
            <SceneCard
              title="Research Breakthrough"
              description="A major discovery in their quantum research reveals unexpected
              implications for the mission."
            />
            <SceneCard
              title="Ethical Confrontation"
              description="A heated debate with the crew about the moral implications of
              their research direction."
            />
            <SceneCard
              title="Laboratory Crisis"
              description="A critical moment where their experiments threaten the ship's
              stability and crew safety."
            />
          </Section>

          {/* Character Analysis */}
          <Section title="Character Analysis">
            <AnalysisPoint
              title="Scientific Drive"
              content="Their pursuit of knowledge and scientific truth often blinds them to
              the human cost of their research."
            />
            <AnalysisPoint
              title="Moral Complexity"
              content="Struggles with balancing scientific progress against ethical
              responsibilities and human safety."
            />
            <AnalysisPoint
              title="Leadership Style"
              content="Leads their research team with brilliant insight but sometimes
              lacks empathy for personal concerns."
            />
          </Section>

          {/* Voice Actor Info */}
          <Section title="Voice Actor">
            <div className={styles.voiceActor}>
              <div className={styles.voiceActorImage}>
                <img src="/api/placeholder/96/96" alt="Voice Actor" />
              </div>
              <div className={styles.voiceActorInfo}>
                <h3>Tilda Swinton</h3>
                <p>Voice of Swansea</p>
                <p>
                  Delivers a nuanced performance that captures Swansea's brilliant mind and complex
                  moral struggles throughout their journey of discovery.
                </p>
              </div>
            </div>
          </Section>

          {/* Character Gallery */}
          <Section title="Character Gallery">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GalleryItem title="Official Art" />
              <GalleryItem title="Early Sketches" />
              <GalleryItem title="Key Scenes" />
              <GalleryItem title="Expressions" />
            </div>
          </Section>

          {/* Related Guides */}
          <Section title="Related Guides">
            <GuideLink
              href="/guide/research-labs"
              title="Research Lab Guide"
              description="Complete walkthrough of all research-related puzzles and experiments"
            />
            <GuideLink
              href="/guide/endings/swansea"
              title="Swansea's Endings"
              description="Guide to all possible outcomes in Swansea's storyline"
            />
            <GuideLink
              href="/guide/quantum-mechanics"
              title="Quantum Mechanics Guide"
              description="Understanding the scientific concepts in Swansea's research"
            />
          </Section>

          {/* Comments Section */}
          <Section title="Community Discussion">
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Share your thoughts about Swansea..."
              ></textarea>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Post Comment
              </button>
            </div>
            
            <div className="space-y-4">
              <Comment
                username="ScienceBuff"
                date="2 days ago"
                content="The way Swansea's character explores the conflict between scientific
                progress and ethics is brilliantly written."
              />
              <Comment
                username="QuantumTheory"
                date="5 days ago"
                content="The research puzzles in their storyline are some of the most
                intellectually challenging parts of the game."
              />
              <Comment
                username="MoralCompass"
                date="1 week ago"
                content="Their interactions with the crew really make you think about the cost
                of progress. Such a well-developed character!"
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata() {
  const canonicalUrl = 'https://mouthwashinggame.help/characters/swansea';
  return {
    title: 'Swansea - Research Director | MouthWashing Game Character',
    description: 'Meet Swansea, the ambitious Research Director whose pursuit of scientific discovery may unlock dangerous secrets in the MouthWashing Game.',
    openGraph: {
      title: 'Swansea - Research Director | MouthWashing Game Character',
      description: 'Meet Swansea, the ambitious Research Director whose pursuit of scientific discovery may unlock dangerous secrets in the MouthWashing Game.',
      images: ['/images/characters/swansea.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Swansea - Research Director | MouthWashing Game Character',
      description: 'Meet Swansea, the ambitious Research Director whose pursuit of scientific discovery may unlock dangerous secrets in the MouthWashing Game.',
      images: ['/images/characters/swansea.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
} 