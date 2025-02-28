import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BackButton() {
  return (
    <Link
      to="/"
      className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Go back to Battle Selection"
    >
      <ArrowLeft className="w-6 h-6" />
    </Link>
  );
}
