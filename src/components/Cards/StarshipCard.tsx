import { RocketIcon } from 'lucide-react';
import { Starship } from '../../types';
import { Card } from './Card.tsx';
import { StarshipDetails } from './StarshipDetails.tsx';

export function StarshipCard({ card, isWinner }: { card: Starship; isWinner: boolean }) {
  return (
    <Card isWinner={isWinner}>
      <Card.Header icon={<RocketIcon />} name={card.name} />
      <StarshipDetails starship={card} />
    </Card>
  );
}
