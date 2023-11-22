 

export default function Pagination() {
  return (
    <div className="flex justify-between pt-3 min-w-full">
      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border
         border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
          dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        disabled // Add the disabled attribute
      >
        Previous
      </button>

      <button
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border
         border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
          dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50"
         // Add the disabled attribute
      >
        Next
      </button>
    </div>
  );
}
