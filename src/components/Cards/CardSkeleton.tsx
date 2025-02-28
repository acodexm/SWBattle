export function CardSkeleton() {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="h-6 w-32 bg-gray-200 rounded" />
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <div className="h-4 w-20 bg-gray-200 rounded mr-2" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
