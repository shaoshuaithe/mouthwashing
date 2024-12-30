import { Metadata } from 'next';
import HomePage from './homePage';

export const metadata: Metadata = {
  title: 'MouthWashing - A Psychological Horror Game Experience',
  description: 'Dive into the dark world of MouthWashing, a psychological horror game where reality and nightmare intertwine. Uncover the truth behind mysterious disappearances and face your deepest fears.',
  keywords: 'mouthwashing, horror game, psychological horror, anya, curly, jimmy, game story',
};

export default function Page() {
  return <HomePage />;
}
