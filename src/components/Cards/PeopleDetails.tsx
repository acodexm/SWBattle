import { Person } from '../../types';

export function PeopleDetails({ person }: { person: Person }) {
  return (
    <div className="space-y-2">
      <p>
        <span className="font-semibold">Mass:</span> {person.mass}
      </p>
      <p>
        <span className="font-semibold">Height:</span> {person.height}
      </p>
      <p>
        <span className="font-semibold">Birth Year:</span> {person.birth_year}
      </p>
      <p>
        <span className="font-semibold">Gender:</span> {person.gender}
      </p>
    </div>
  );
}
