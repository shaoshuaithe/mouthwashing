'use client';

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
import layoutStyles from '../styles/character-layout.module.css';

export default function CurlyCharacterPage() {
  return (
    <>
      <Navigation />
      <div className={layoutStyles.page}>
        <div className={layoutStyles.container}>
          {/* Character Header */}
          <div className={layoutStyles.header}>
            <div className={layoutStyles.headerContent}>
              <div className={layoutStyles.imageContainer}>
                <div className={layoutStyles.imageWrapper}>
                  <img src="/images/characters/curly.png" alt="Curly" className={layoutStyles.characterImage} />
                </div>
                
                <div className={layoutStyles.infoContainer}>
                  <h1>Curly</h1>
                  <p className={layoutStyles.description}>
                    Captain of the Tulpar, a seasoned leader with a mysterious past and a complex web of loyalties.
                  </p>
                  
                  <div className={layoutStyles.quote}>
                    <Quote className={layoutStyles.quoteIcon} size={24} />
                    <p>"Sometimes the hardest choices are the ones we have to make alone."</p>
                  </div>

                  <div className={layoutStyles.quickInfo}>
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
            <p className={layoutStyles.backgroundText}>
              Before commanding the Tulpar, Curly served in various high-stakes missions across the galaxy.
              His reputation for handling difficult situations with a calm demeanor made him the perfect
              choice for this sensitive assignment.
            </p>
            <p className={layoutStyles.backgroundText}>
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
            />
            <RelationshipCard
              name="Jimmy"
              relationship="Mentor Figure"
              description="Takes a special interest in Jimmy's development, though their relationship
              becomes strained as secrets surface."
            />
            <RelationshipCard
              name="Daisuke"
              relationship="Command Chain"
              description="Values Daisuke's technical skills while monitoring his increasingly
              erratic behavior."
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
            <div className={layoutStyles.sceneGrid}>
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
            </div>
          </Section>

          {/* Character Analysis */}
          <Section title="Character Analysis">
            <div className={layoutStyles.analysisPoints}>
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
            </div>
          </Section>

          {/* Voice Actor Info */}
          <Section title="Voice Actor">
            <div className={layoutStyles.voiceActor}>
              <div className={layoutStyles.voiceActorImage}>
                <img src="/api/placeholder/96/96" alt="Voice Actor" />
              </div>
              <div className={layoutStyles.voiceActorInfo}>
                <h3>Michael Thompson</h3>
                <p>Voice of Captain Curly</p>
                <p>
                  A veteran voice actor known for portraying complex authority figures. His performance
                  captures both Curly's commanding presence and his hidden vulnerabilities.
                </p>
              </div>
            </div>
          </Section>

          {/* Interactive Gallery */}
          <Section title="Character Gallery">
            <div className={layoutStyles.galleryGrid}>
              <GalleryItem title="Captain's Portrait" />
              <GalleryItem title="Bridge Scenes" />
              <GalleryItem title="Character Development" />
              <GalleryItem title="Key Moments" />
            </div>
          </Section>

          {/* Related Guides */}
          <Section title="Related Guides">
            <div className={layoutStyles.guideLinks}>
              <GuideLink
                href="/guide/captain-decisions"
                title="Captain's Critical Decisions Guide"
                description="A complete guide to all major decision points in Curly's storyline"
              />
              <GuideLink
                href="/guide/endings/curly"
                title="Curly's Endings Guide"
                description="How to achieve all endings related to Captain Curly's story"
              />
              <GuideLink
                href="/guide/bridge-puzzles"
                title="Bridge Command Puzzles"
                description="Solutions to all puzzles in the Captain's storyline"
              />
            </div>
          </Section>

          {/* Comments Section */}
          <Section title="Community Discussion">
            <div className="mb-6">
              <textarea
                className={layoutStyles.commentInput}
                placeholder="Share your thoughts about Captain Curly..."
              ></textarea>
              <button className={layoutStyles.commentButton}>
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