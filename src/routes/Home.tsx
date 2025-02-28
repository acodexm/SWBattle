import { RocketIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-start p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 text-center">
        Star Wars Battle
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Link
          to="/people"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 transition-all hover:scale-105"
        >
          <div className="flex items-center gap-4 mb-4">
            <UserIcon className="w-8 h-8" />
            <h2 className="text-2xl font-bold">People Battle</h2>
          </div>
          <p className="text-blue-100">Battle legendary characters based on their mass</p>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-all" />
        </Link>

        <Link
          to="/starships"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500 to-red-700 p-8 transition-all hover:scale-105"
        >
          <div className="flex items-center gap-4 mb-4">
            <RocketIcon className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Starships Battle</h2>
          </div>
          <p className="text-red-100">Compare mighty vessels by their crew size</p>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-all" />
        </Link>
      </div>
    </div>
  );
}