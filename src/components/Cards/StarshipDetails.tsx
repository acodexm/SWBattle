import { Starship } from '../../types';

export function StarshipDetails({ starship }: { starship: Starship }) {
  return (
    <div className="space-y-2">
      <p>
        <span className="font-semibold">Crew:</span> {starship.crew}
      </p>
      <p>
        <span className="font-semibold">Model:</span> {starship.model}
      </p>
      <p>
        <span className="font-semibold">Class:</span> {starship.starship_class}
      </p>
      <p>
        <span className="font-semibold">Manufacturer:</span> {starship.manufacturer}
      </p>
    </div>
  );
}
