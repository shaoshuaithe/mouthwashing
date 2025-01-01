import { Metadata } from 'next';
import HomePage from './homePage';

export const metadata: Metadata = {
  title: 'MouthWashing Game - A Psychological Horror Adventure',
  description: 'Uncover the truth aboard the Tulpar in this psychological horror adventure. Experience a deep narrative that adapts to your choices.',
  openGraph: {
    title: 'MouthWashing Game - A Psychological Horror Adventure',
    description: 'Uncover the truth aboard the Tulpar in this psychological horror adventure. Experience a deep narrative that adapts to your choices.',
    images: ['/images/homepage-banner.jpg'],
    type: 'website',
    siteName: 'MouthWashing Game',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MouthWashing Game - A Psychological Horror Adventure',
    description: 'Uncover the truth aboard the Tulpar in this psychological horror adventure. Experience a deep narrative that adapts to your choices.',
    images: ['/images/homepage-banner.jpg'],
    creator: '@MouthWashingGame',
  },
  keywords: [
    'MouthWashing Game',
    'psychological horror',
    'space adventure',
    'narrative game',
    'mystery game',
    'story-driven game',
    'choice-based game'
  ],
  alternates: {
    canonical: 'https://mouthwashinggame.help',
  },
};

export default function Page() {
  return <HomePage />;
}
