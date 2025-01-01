'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './CharacterComponents.module.css';

// 组件类型定义
export interface InfoItemProps {
  label: string;
  value: string;
}

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export interface RelationshipCardProps {
  name: string;
  relationship: string;
  description: string;
  href?: string;
}

export interface StoryPhaseProps {
  phase: string;
  content: string;
}

export interface SceneCardProps {
  title: string;
  description: string;
}

export interface AnalysisPointProps {
  title: string;
  content: string;
}

export interface GalleryItemProps {
  title: string;
}

export interface GuideLinkProps {
  href: string;
  title: string;
  description: string;
}

export interface CommentProps {
  username: string;
  date: string;
  content: string;
}

// 子组件定义
export function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoLabel}>{label}:</span>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
}

export function RelationshipCard({ name, relationship, description, href }: RelationshipCardProps) {
  const content = (
    <>
      <h3>{name}</h3>
      <p className={styles.relationshipType}>{relationship}</p>
      <p className={styles.relationshipDescription}>{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.relationship}>
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.relationship}>
      {content}
    </div>
  );
}

export function StoryPhase({ phase, content }: StoryPhaseProps) {
  return (
    <div className={styles.storyPhase}>
      <h3>{phase}</h3>
      <p>{content}</p>
    </div>
  );
}

export function SceneCard({ title, description }: SceneCardProps) {
  return (
    <div className={styles.scene}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export function AnalysisPoint({ title, content }: AnalysisPointProps) {
  return (
    <div className={styles.analysisPoint}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export function GalleryItem({ title }: GalleryItemProps) {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.galleryImageWrapper}>
        <img src="/api/placeholder/200/200" alt={title} className={styles.galleryImage} />
      </div>
      <p>{title}</p>
    </div>
  );
}

export function GuideLink({ href, title, description }: GuideLinkProps) {
  return (
    <a href={href} className={styles.guideLink}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export function Comment({ username, date, content }: CommentProps) {
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