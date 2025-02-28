import { ReactNode } from 'react';

interface CardProps {
  isWinner: boolean;
  children: ReactNode;
}

export const Card = ({ isWinner, children }: CardProps) => (
  <div
    className={`
      relative p-6 rounded-lg shadow-lg 
      ${isWinner ? 'bg-green-100 border-2 border-green-500' : 'bg-white'}
      transition-all duration-300
    `}
  >
    {isWinner && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
        Winner!
      </div>
    )}
    {children}
  </div>
);

interface HeaderProps {
  icon: ReactNode;
  name: string;
}

const Header = ({ icon, name }: HeaderProps) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-8 h-8 text-blue-500">{icon}</div>
    <h2 className="text-xl font-bold">{name}</h2>
  </div>
);
Card.Header = Header;
