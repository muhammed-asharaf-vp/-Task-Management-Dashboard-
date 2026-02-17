interface TaskSearchProps {
  search: string
  setSearch: (value: string) => void
}

const TaskSearch = ({ search, setSearch }: TaskSearchProps) => {
  return (
    <div className="relative w-full lg:flex-1">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-4 pr-4 py-2.5 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
    </div>
  )
}

export default TaskSearch
