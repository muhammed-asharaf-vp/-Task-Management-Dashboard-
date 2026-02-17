import { useState } from "react";
import { Task, TaskStatus } from "../../types/task.types";
import Button from "../ui/Button";
import TaskModal from "./TaskModal";
import ConfirmModal from "../ui/ConfirmModal";
import { useTaskStore } from "../../store/taskStore";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateTask = useTaskStore((state) => state.updateTask);

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setIsDeleteOpen(false);
  };

  const handleStatusChange = (newStatus: TaskStatus) => {
    updateTask(task.id, { status: newStatus });
  };

  return (
    <>
      <div className="bg-gray-50 rounded-lg p-3 border hover:shadow-md transition break-words">
        <h4 className="text-sm font-medium text-gray-800">{task.title}</h4>

        {task.description && (
          <p className="text-xs text-gray-500 mt-1">{task.description}</p>
        )}

        {/* status selectors */}

        <div className="mt-3">
          <select
            value={task.status}
            onChange={(e) => handleStatusChange(e.target.value as TaskStatus)}
            className="
      w-full sm:w-auto
      min-h-[36px]
      px-3 py-1.5
      text-sm sm:text-xs
      rounded-lg
      border border-gray-300
      bg-white
      focus:outline-none
      focus:ring-2 focus:ring-blue-500
      focus:border-blue-500
      transition
    "
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mt-3 flex justify-end gap-2">
          <Button
            variant="secondary"
            fullWidth={false}
            className="text-xs px-3 py-1"
            onClick={() => setIsEditOpen(true)}
          >
            Edit
          </Button>

          <Button
            fullWidth={false}
            className="text-xs px-3 py-1 bg-red-500 hover:bg-red-600"
            onClick={() => setIsDeleteOpen(true)}
          >
            Delete
          </Button>
        </div>
      </div>

      {/* edit modal */}
      <TaskModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        existingTask={task}
      />

      {/* confirm delete modal */}
      <ConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Task"
        message="Are you sure you want to delete this task?"
      />
    </>
  );
};

export default TaskCard;
