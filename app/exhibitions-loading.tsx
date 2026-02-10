export default function ExhibitionsLoading() {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Exhibitions
      </h2>
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse pt-8 border-t border-gray-200 dark:border-gray-800 first:pt-0 first:border-t-0"
          >
            {/* Title skeleton */}
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4"></div>
            
            {/* Date skeleton */}
            <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-48 mb-4"></div>
            
            {/* Image skeleton */}
            <div className="relative w-full aspect-video max-w-2xl bg-gray-200 dark:bg-gray-800 rounded-lg mb-4"></div>
            
            {/* Description skeleton */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
            </div>
            
            {/* Link skeleton */}
            <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-40 mb-4"></div>
            
            {/* Button skeleton */}
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-36"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
