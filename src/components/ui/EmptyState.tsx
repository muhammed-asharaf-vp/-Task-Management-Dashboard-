interface EmptyStateProps {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

const EmptyState = ({
  title = "Nothing here yet",
  description = "There is no data to display at the moment.",
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      
      {/* Icon Circle */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
        <span className="text-2xl">📭</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2 max-w-sm">
        {description}
      </p>

      {/* Optional Action Button */}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-5 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
