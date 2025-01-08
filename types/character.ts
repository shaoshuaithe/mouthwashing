export interface CharacterInfo {
  age?: string;
  status?: string;
  id?: string;
}

export interface Relationship {
  name: string;
  type: string;
  description: string;
  image?: string;
}

export interface StoryPhase {
  phase: string;
  content: string;
}

export interface Scene {
  title: string;
  description: string;
}

export interface AnalysisPoint {
  title: string;
  content: string;
}

export interface VoiceActor {
  name: string;
  image: string;
  description: string;
}

export interface Character {
  name: string;
  image: string;
  description: string;
  role: string;
  background: string;
  quote?: string;
  info?: CharacterInfo;
  relationships: Relationship[];
  storyPhases: StoryPhase[];
  keyScenes: Scene[];
  analysis: AnalysisPoint[];
  voiceActor?: VoiceActor;
} 