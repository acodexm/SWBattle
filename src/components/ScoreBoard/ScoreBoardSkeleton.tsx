export function ScoreBoardSkeleton() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md animate-pulse">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <div className="h-6 w-16 bg-gray-200 rounded mb-2" />
          <div className="h-8 w-8 bg-gray-200 rounded mx-auto" />
        </div>
        <div className="h-8 w-8 bg-gray-200 rounded" />
        <div className="text-center">
          <div className="h-6 w-16 bg-gray-200 rounded mb-2" />
          <div className="h-8 w-8 bg-gray-200 rounded mx-auto" />
        </div>
      </div>
    </div>
  );
}
