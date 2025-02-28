import { UserIcon } from 'lucide-react';
import { Person } from '../../types';
import { Card } from './Card.tsx';
import { PeopleDetails } from './PeopleDetails.tsx';

export function PeopleCard({ card, isWinner }: { card: Person; isWinner: boolean }) {
  return (
    <Card isWinner={isWinner}>
      <Card.Header icon={<UserIcon />} name={card.name} />
      <PeopleDetails person={card} />
    </Card>
  );
}
