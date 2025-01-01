'use client';

import Navigation from '@/components/Navigation';
import { Quote } from 'lucide-react';
import styles from './character.module.css';

// 组件类型定义
interface InfoItemProps {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface RelationshipCardProps {
  name: string;
  relationship: string;
  description: string;
  href: string;
}

interface StoryPhaseProps {
  phase: string;
  content: string;
}

interface SceneCardProps {
  title: string;
  description: string;
}

interface AnalysisPointProps {
  title: string;
  content: string;
}

interface GalleryItemProps {
  title: string;
}

interface GuideLinkProps {
  href: string;
  title: string;
  description: string;
}

interface CommentProps {
  username: string;
  date: string;
  content: string;
}

// 子组件定义
function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoLabel}>{label}:</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
}

function RelationshipCard({ name, relationship, description, href }: RelationshipCardProps) {
  return (
    <div className={styles.relationship}>
      <h3>{name}</h3>
      <p className={styles.relationshipType}>{relationship}</p>
      <p className={styles.relationshipDescription}>{description}</p>
      <a href={href} className={styles.relationshipLink}>
        View Character
      </a>
    </div>
  );
}

function StoryPhase({ phase, content }: StoryPhaseProps) {
  return (
    <div className={styles.storyPhase}>
      <h3>{phase}</h3>
      <p>{content}</p>
    </div>
  );
}

function SceneCard({ title, description }: SceneCardProps) {
  return (
    <div className={styles.scene}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function AnalysisPoint({ title, content }: AnalysisPointProps) {
  return (
    <div className={styles.analysisPoint}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function GalleryItem({ title }: GalleryItemProps) {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.galleryImageWrapper}>
        <img src="/api/placeholder/200/200" alt={title} className={styles.galleryImage} />
      </div>
      <p>{title}</p>
    </div>
  );
}

function GuideLink({ href, title, description }: GuideLinkProps) {
  return (
    <a href={href} className={styles.guideLink}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

function Comment({ username, date, content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <span>{username}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default function AnyaCharacterPage() {
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
                  <img src="/api/placeholder/400/400" alt="Anya" className={styles.characterImage} />
                </div>
                
                <div className={styles.infoContainer}>
                  <h1>Anya</h1>
                  <p className={styles.description}>
                    Ship's Medical Officer aboard the Tulpar, responsible for crew health and medical research.
                  </p>
                  
                  <div className={styles.quote}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <p>"I have to tell them. They need to know what really happened."</p>
                  </div>

                  <div className={styles.quickInfo}>
                    <InfoItem label="Role" value="Medical Officer" />
                    <InfoItem label="Age" value="27" />
                    <InfoItem label="ID Number" value="TPE-MED-443" />
                    <InfoItem label="Status" value="Active Crew Member" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Story */}
          <Section title="Background Story">
            <p className={styles.backgroundText}>
              Prior to joining the Tulpar's crew, Anya worked as a medical researcher specializing in
              experimental treatments. Her expertise in advanced medical procedures made her an ideal
              candidate for long-haul space missions.
            </p>
            <p className={styles.backgroundText}>
              Her dedication to medical ethics and patient care often puts her at odds with corporate
              policies, leading to internal conflicts within the crew.
            </p>
          </Section>

          {/* Key Relationships */}
          <Section title="Key Relationships">
            <RelationshipCard
              name="Curly"
              relationship="Professional Trust"
              description="As the ship's medical officer, Anya maintains a professional relationship with
              Captain Curly, though tensions rise as she uncovers concerning medical data."
              href="/characters/curly"
            />
            <RelationshipCard
              name="Jimmy"
              relationship="Complex Dynamic"
              description="Their relationship becomes central to the story's development, marked by
              shared medical mysteries and growing trust issues."
              href="/characters/jimmy"
            />
            <RelationshipCard
              name="Daisuke"
              relationship="Doctor-Patient Bond"
              description="Anya's role as Daisuke's attending physician reveals crucial plot elements
              and challenges her medical ethics."
              href="/characters/daisuke"
            />
            <RelationshipCard
              name="Swansea"
              relationship="Medical Collaboration"
              description="Works closely with Swansea on advanced medical research, leading to
              discoveries that impact both their professional views and the mission's direction."
              href="/characters/swansea"
            />
          </Section>

          {/* Story Arc */}
          <Section title="Story Arc">
            <StoryPhase
              phase="Initial Role"
              content="Anya begins as the dutiful medical officer, focused on maintaining crew health
              and following protocols."
            />
            <StoryPhase
              phase="Discovery"
              content="Her medical examinations reveal disturbing information about the crew's
              condition and the true nature of their mission."
            />
            <StoryPhase
              phase="Conflict"
              content="Faced with ethical dilemmas and conflicting loyalties, Anya must make
              decisions that affect the entire crew."
            />
            <StoryPhase
              phase="Resolution"
              content="Her choices and actions play a crucial role in determining the story's
              outcome and the fate of other characters."
            />
          </Section>

          {/* Key Scenes */}
          <Section title="Key Scenes">
            <SceneCard
              title="Medical Bay Discovery"
              description="A pivotal scene where Anya discovers crucial information through routine
              medical examinations."
            />
            <SceneCard
              title="Confrontation with Jimmy"
              description="A tense encounter that reveals hidden truths and past connections."
            />
            <SceneCard
              title="Critical Decision"
              description="Anya faces a moral choice that impacts the entire crew's fate."
            />
          </Section>

          {/* Character Analysis */}
          <Section title="Character Analysis">
            <div className="space-y-6">
              <AnalysisPoint
                title="Moral Compass"
                content="Anya's strong ethical principles drive many of her decisions, often
                placing her in difficult situations."
              />
              <AnalysisPoint
                title="Professional vs. Personal"
                content="The conflict between her professional duties and personal feelings creates
                compelling character development."
              />
              <AnalysisPoint
                title="Truth Seeker"
                content="Her role as a medical professional makes her uniquely positioned to
                uncover the truth about the ship's situation."
              />
            </div>
          </Section>

          {/* Voice Actor Info */}
          <Section title="Voice Actor">
            <div className={styles.voiceActor}>
              <div className={styles.voiceActorImage}>
                <img src="/api/placeholder/96/96" alt="Voice Actor" />
              </div>
              <div className={styles.voiceActorInfo}>
                <h3>Sarah Mitchell</h3>
                <p>Voice of Anya</p>
                <p>
                  An experienced voice actor known for her work in various games and animations. Her portrayal
                  of Anya brings depth to the character's emotional journey throughout the story.
                </p>
              </div>
            </div>
          </Section>

          {/* Interactive Gallery */}
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
            <div className="space-y-4">
              <GuideLink
                href="/guide/medical-bay"
                title="Medical Bay Puzzle Guide"
                description="Complete walkthrough of all Medical Bay puzzles and Anya's role"
              />
              <GuideLink
                href="/guide/endings/anya"
                title="Anya's Endings Guide"
                description="How to achieve all endings related to Anya's story"
              />
              <GuideLink
                href="/story/analysis/anya-jimmy"
                title="Anya & Jimmy Relationship Analysis"
                description="Deep dive into the complex relationship between Anya and Jimmy"
              />
            </div>
          </Section>

          {/* Comments Section */}
          <Section title="Community Discussion">
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Share your thoughts about Anya..."
              ></textarea>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Post Comment
              </button>
            </div>
            
            {/* Sample Comments */}
            <div className="space-y-4">
              <Comment
                username="GameExplorer"
                date="2 days ago"
                content="Anya's character development throughout the game is incredible. The way her past
                is revealed piece by piece really keeps you engaged."
              />
              <Comment
                username="StorySeeker"
                date="5 days ago"
                content="The medical bay scenes with Anya are some of the most intense moments in the game.
                Her voice acting really sells the emotional weight of those scenes."
              />
              <Comment
                username="LoreHunter"
                date="1 week ago"
                content="Has anyone else found all the hidden documents in Anya's office? They add so much
                to her backstory!"
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
