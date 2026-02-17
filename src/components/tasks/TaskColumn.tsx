import { Task } from "../../types/task.types"
import TaskCard from "./TaskCard"

interface TaskColumnProps {
  title: string
  tasks: Task[]
}

const TaskColumn = ({ title, tasks }: TaskColumnProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col break-words">
      <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">
        {title}
      </h3>

      <div className="space-y-3 flex-1 overflow-y-auto max-h-[70vh] pr-1">
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-400">
            No tasks here
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  )
}

export default TaskColumn
