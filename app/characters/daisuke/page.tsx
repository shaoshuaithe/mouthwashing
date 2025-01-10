import Navigation from "@/components/Navigation";
import { Quote } from "lucide-react";
import {
  AnalysisPoint,
  Comment,
  GuideLink,
  InfoItem,
  RelationshipCard,
  SceneCard,
  Section,
  StoryPhase,
} from "../components/CharacterComponents";
import styles from "../styles/character-layout.module.css";

export default function DaisukeCharacterPage() {
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
                  <img
                    src="/images/characters/daisuke.webp"
                    alt="Daisuke"
                    className={styles.characterImage}
                  />
                </div>

                <div className={styles.infoContainer}>
                  <h1>Daisuke</h1>
                  <p className={styles.description}>
                    Chief Engineer of the Tulpar, a brilliant technician whose
                    obsession with the vessel's operations may uncover more than
                    just technical irregularities.
                  </p>

                  <div className={styles.quote}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p>
                      "The patterns in the data... they're trying to tell us
                      something."
                    </p>
                  </div>

                  <div className={styles.quickInfo}>
                    <InfoItem label="Role" value="Chief Engineer" />
                    <InfoItem label="Age" value="35" />
                    <InfoItem label="ID Number" value="TPE-ENG-772" />
                    <InfoItem label="Status" value="Active Duty" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Story */}
          <Section title="Background Story">
            <p className={styles.backgroundText}>
              A prodigy in quantum engineering, Daisuke's groundbreaking methods
              in spacecraft mechanics garnered him early acclaim in the field.
              His unparalleled grasp of the Tulpar's experimental machinery
              solidified his position as the ideal candidate for Chief Engineer.
            </p>
            <p className={styles.backgroundText}>
              However, his unwavering fixation on the vessel's operations and
              escalating suspicions regarding peculiar irregularities have
              started to unsettle his fellow crew members.
            </p>
          </Section>

          {/* Key Relationships */}
          <Section title="Key Relationships">
            <RelationshipCard
              name="Curly"
              relationship="Command Structure"
              description="Reports directly to Captain Curly, though their relationship becomes strained
              as Daisuke's behavior grows more erratic."
              href="/characters/curly"
            />
            <RelationshipCard
              name="Anya"
              relationship="Medical Oversight"
              description="Becomes a frequent visitor to the medical bay as Anya monitors his
              increasing stress levels and unusual behavior patterns."
              href="/characters/anya"
            />
            <RelationshipCard
              name="Jimmy"
              relationship="Technical Mentor"
              description="Takes Jimmy under his wing in engineering matters, sharing both his
              expertise and potentially his growing suspicions."
              href="/characters/jimmy"
            />
            <RelationshipCard
              name="Swansea"
              relationship="Professional Rivalry"
              description="Maintains a complex relationship with Swansea, as both respect and
              question each other's technical theories about the ship."
              href="/characters/swansea"
            />
          </Section>

          {/* Story Arc */}
          <Section title="Story Arc">
            <StoryPhase
              phase="Technical Excellence"
              content="Initially showcases his extraordinary expertise in managing the vessel's sophisticated mechanisms while mentoring his engineering team."
            />
            <StoryPhase
              phase="Growing Suspicion"
              content="Begins to notice unusual patterns in the ship's data, leading him to
              question the true nature of their mission."
            />
            <StoryPhase
              phase="Obsessive Investigation"
              content="Becomes increasingly focused on uncovering the truth behind the ship's
              anomalies, potentially at the cost of his own well-being."
            />
            <StoryPhase
              phase="Critical Discovery"
              content="Makes a breakthrough that could either save the ship or reveal dangerous
              secrets about its true purpose."
            />
          </Section>

          {/* Key Scenes */}
          <Section title="Key Scenes">
            <SceneCard
              title="Engine Room Discovery"
              description="A late-night inspection reveals a disturbing anomaly within the vessel's central framework."
            />
            <SceneCard
              title="Data Analysis"
              description="A crucial scene where Daisuke presents his findings to the crew,
              leading to a dramatic confrontation."
            />
            <SceneCard
              title="System Override"
              description="A tense moment where Daisuke must choose between following protocols
              and acting on his suspicions."
            />
          </Section>

          {/* Character Analysis */}
          <Section title="Character Analysis">
            <AnalysisPoint
              title="Technical Brilliance"
              content="His exceptional understanding of the ship's systems makes him invaluable
              to the mission, while also leading him toward dangerous discoveries."
            />
            <AnalysisPoint
              title="Psychological Descent"
              content="The progression from dedicated engineer to obsessed investigator showcases
              the psychological toll of uncovering difficult truths."
            />
            <AnalysisPoint
              title="Moral Conflict"
              content="Struggles between his duty to maintain the ship's systems and his growing
              conviction that something is fundamentally wrong."
            />
          </Section>

          {/* Voice Actor Info */}
          <Section title="Voice Actor">
            <div className={styles.voiceActor}>
              <div className={styles.voiceActorImage}>
                <img
                  src="/images/characters/Ken Watanabe.webp"
                  alt="Voice Actor"
                />
              </div>
              <div className={styles.voiceActorInfo}>
                <h3>Ken Watanabe</h3>
                <p>Voice of Daisuke</p>
                <p>
                  An accomplished voice actor known for his ability to portray
                  complex technical characters. His performance adds depth to
                  Daisuke's obsessive nature.
                </p>
              </div>
            </div>
          </Section>

          {/* Related Guides */}
          <Section title="Related Guides">
            <GuideLink
              href="/guide/engineering-puzzles"
              title="Engineering Puzzle Solutions"
              description="Complete walkthrough of all engineering-related puzzles and challenges"
            />
            <GuideLink
              href="/guide/endings/daisuke"
              title="Daisuke's Story Paths"
              description="Guide to all possible outcomes in Daisuke's storyline"
            />
            <GuideLink
              href="/guide/ship-systems"
              title="Ship Systems Guide"
              description="Technical details about the Tulpar's systems and Daisuke's role"
            />
          </Section>

          {/* Comments Section */}
          <Section title="Community Discussion">
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Share your thoughts about Daisuke..."
              ></textarea>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Post Comment
              </button>
            </div>

            <div className="space-y-4">
              <Comment
                username="TechExplorer"
                date="2 days ago"
                content="The way Daisuke's story unfolds through the ship's technical mysteries is
                brilliant. Really makes you question everything about the mission."
              />
              <Comment
                username="EngineerFan"
                date="4 days ago"
                content="Those engineering puzzle sequences with Daisuke are some of the most
                challenging and rewarding parts of the game."
              />
              <Comment
                username="StorySeeker"
                date="1 week ago"
                content="The scene where he finally connects all the dots in the engine room...
                absolutely chilling. Fantastic character development!"
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata() {
  const canonicalUrl = "https://mouthwashinggame.help/characters/daisuke";
  return {
    title: "Daisuke - Chief Engineer | MouthWashing Game Character",
    description:
      "Learn about Daisuke, the brilliant but troubled Chief Engineer whose obsession with the Tulpar's systems reveals dark secrets in the MouthWashing Game.",
    openGraph: {
      title: "Daisuke - Chief Engineer | MouthWashing Game Character",
      description:
        "Learn about Daisuke, the brilliant but troubled Chief Engineer whose obsession with the Tulpar's systems reveals dark secrets in the MouthWashing Game.",
      images: ["/images/characters/daisuke.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Daisuke - Chief Engineer | MouthWashing Game Character",
      description:
        "Learn about Daisuke, the brilliant but troubled Chief Engineer whose obsession with the Tulpar's systems reveals dark secrets in the MouthWashing Game.",
      images: ["/images/characters/daisuke.jpg"],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
