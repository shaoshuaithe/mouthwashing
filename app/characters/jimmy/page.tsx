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

export default function JimmyCharacterPage() {
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
                  <img src="/images/characters/jimmy.png" alt="Jimmy" className={styles.characterImage} />
                </div>
                
                <div className={styles.infoContainer}>
                  <h1>Jimmy</h1>
                  <p className={styles.description}>
                    Junior Engineer aboard the Tulpar, whose natural curiosity and technical aptitude
                    place him at the center of unfolding mysteries.
                  </p>
                  
                  <div className={styles.quote}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p>"There's more to this ship than they're telling us. I can feel it."</p>
                  </div>

                  <div className={styles.quickInfo}>
                    <InfoItem label="Role" value="Junior Engineer" />
                    <InfoItem label="Age" value="24" />
                    <InfoItem label="ID Number" value="TPE-ENG-887" />
                    <InfoItem label="Status" value="Active Crew" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Story */}
          <Section title="Background Story">
            <p className={styles.backgroundText}>
              A rising star in the engineering field, Jimmy's exceptional problem-solving abilities
              caught the attention of senior officers. Despite his youth, he was specifically
              requested for the Tulpar's mission due to his innovative thinking.
            </p>
            <p className={styles.backgroundText}>
              As he delves deeper into the ship's systems alongside Daisuke, Jimmy begins to
              uncover layers of mystery that challenge everything he thought he knew about their mission.
            </p>
          </Section>

          {/* Key Relationships */}
          <Section title="Key Relationships">
            <RelationshipCard
              name="Daisuke"
              relationship="Engineering Mentor"
              description="Works closely with Chief Engineer Daisuke, learning both technical skills
              and sharing in his growing suspicions about the ship."
              href="/characters/daisuke"
            />
            <RelationshipCard
              name="Curly"
              relationship="Authority Figure"
              description="Views Captain Curly as both a leader and potential obstacle as questions
              about the mission's true nature arise."
              href="/characters/curly"
            />
            <RelationshipCard
              name="Anya"
              relationship="Confidant"
              description="Develops a trust-based relationship with Anya, sharing crucial information
              about the ship's anomalies."
              href="/characters/anya"
            />
            <RelationshipCard
              name="Swansea"
              relationship="Technical Collaboration"
              description="Works with Swansea on various ship systems, leading to important
              discoveries about the vessel's capabilities."
              href="/characters/swansea"
            />
          </Section>

          {/* Story Arc */}
          <Section title="Story Arc">
            <StoryPhase
              phase="Eager Apprentice"
              content="Begins his role aboard the Tulpar with enthusiasm and a desire to prove
              himself to the senior engineering team."
            />
            <StoryPhase
              phase="Rising Doubts"
              content="Starts noticing discrepancies in the ship's systems that don't align with
              standard protocols."
            />
            <StoryPhase
              phase="Active Investigation"
              content="Partners with Daisuke to investigate the ship's mysteries, putting himself
              in increasingly dangerous situations."
            />
            <StoryPhase
              phase="Crucial Choice"
              content="Must decide whether to reveal his discoveries or protect the crew from
              potentially dangerous truths."
            />
          </Section>

          {/* Key Scenes */}
          <Section title="Key Scenes">
            <SceneCard
              title="First Discovery"
              description="An unexpected finding during routine maintenance leads Jimmy down a
              path of investigation."
            />
            <SceneCard
              title="Secret Meeting"
              description="A clandestine exchange of information with Anya reveals the true scope
              of the situation."
            />
            <SceneCard
              title="Engineering Crisis"
              description="Jimmy must use his skills to prevent a system failure while protecting
              his discoveries."
            />
          </Section>

          {/* Character Analysis */}
          <Section title="Character Analysis">
            <AnalysisPoint
              title="Growth Arc"
              content="Jimmy's journey from eager junior engineer to key investigator shows his
              rapid maturation under pressure."
            />
            <AnalysisPoint
              title="Moral Development"
              content="Faces increasingly complex ethical decisions as he uncovers more about
              the ship's true nature."
            />
            <AnalysisPoint
              title="Technical Evolution"
              content="His technical skills grow alongside his understanding of the ship's
              mysteries, making him invaluable to both sides of the conflict."
            />
          </Section>

          {/* Voice Actor Info */}
          <Section title="Voice Actor">
            <div className={styles.voiceActor}>
              <div className={styles.voiceActorImage}>
                <img src="/api/placeholder/96/96" alt="Voice Actor" />
              </div>
              <div className={styles.voiceActorInfo}>
                <h3>Tom Holland</h3>
                <p>Voice of Jimmy</p>
                <p>
                  Brings Jimmy's youthful energy and growing determination to life, perfectly
                  capturing his transformation from rookie engineer to key player in the ship's mysteries.
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
              href="/guide/engineering-basics"
              title="Engineering Basics Guide"
              description="Master the fundamental engineering mechanics with Jimmy"
            />
            <GuideLink
              href="/guide/endings/jimmy"
              title="Jimmy's Story Paths"
              description="Guide to all possible outcomes in Jimmy's storyline"
            />
            <GuideLink
              href="/guide/investigation"
              title="Investigation Guide"
              description="How to uncover all the clues in Jimmy's investigation"
            />
          </Section>

          {/* Comments Section */}
          <Section title="Community Discussion">
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Share your thoughts about Jimmy..."
              ></textarea>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Post Comment
              </button>
            </div>
            
            <div className="space-y-4">
              <Comment
                username="MysteryFan"
                date="1 day ago"
                content="Jimmy's character development is incredible. The way he grows from a rookie
                engineer into a key player in the story is so well done."
              />
              <Comment
                username="EngineerInTraining"
                date="3 days ago"
                content="The engineering puzzles in Jimmy's storyline are challenging but so
                rewarding when you solve them!"
              />
              <Comment
                username="PlotHunter"
                date="1 week ago"
                content="His interactions with Daisuke are some of the best parts of the game.
                Really shows how mentorship can go in unexpected directions."
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata() {
  const canonicalUrl = 'https://mouthwashinggame.help/characters/jimmy';
  return {
    title: 'Jimmy - Junior Engineer | MouthWashing Game Character',
    description: 'Discover Jimmy, the curious Junior Engineer whose technical aptitude leads him to uncover the mysteries of the Tulpar in the MouthWashing Game.',
    openGraph: {
      title: 'Jimmy - Junior Engineer | MouthWashing Game Character',
      description: 'Discover Jimmy, the curious Junior Engineer whose technical aptitude leads him to uncover the mysteries of the Tulpar in the MouthWashing Game.',
      images: ['/images/characters/jimmy.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Jimmy - Junior Engineer | MouthWashing Game Character',
      description: 'Discover Jimmy, the curious Junior Engineer whose technical aptitude leads him to uncover the mysteries of the Tulpar in the MouthWashing Game.',
      images: ['/images/characters/jimmy.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
} 