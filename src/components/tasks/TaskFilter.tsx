interface TaskFilterProps {
  statusFilter: string
  setStatusFilter: (value: string) => void
}

const TaskFilter = ({
  statusFilter,
  setStatusFilter,
}: TaskFilterProps) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-56">
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="w-full h-11 px-4 rounded-xl 
                   border border-gray-300 bg-white 
                   text-sm sm:text-base
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500
                   transition duration-200 ease-in-out
                   shadow-sm"
      >
        <option value="all">All Status</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}

export default TaskFilter
