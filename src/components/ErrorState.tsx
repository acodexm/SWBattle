import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  onRetry: () => void;
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <h2 className="text-xl font-bold mb-2">Failed to load battle data</h2>
      <p className="text-gray-600 mb-4">There was an error fetching the data. Please try again.</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Retry
      </button>
    </div>
  );
}
