


import { useEffect, useState } from "react"
import { Task } from "../../types/task.types"
import { useTaskStore } from "../../store/taskStore"
import Modal from "../ui/Modal"
import Input from "../ui/Input"
import Button from "../ui/Button"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  existingTask?: Task
}

const TaskModal = ({
  isOpen,
  onClose,
  existingTask,
}: TaskModalProps) => {
  const addTask = useTaskStore((state) => state.addTask)
  const updateTask = useTaskStore((state) => state.updateTask)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  // Prefill data in edit mode
  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title)
      setDescription(existingTask.description || "")
    } else {
      setTitle("")
      setDescription("")
    }
    setError("")
  }, [existingTask, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      setError("Title is required")
      return
    }

    if (existingTask) {
      updateTask(existingTask.id, {
        title: title.trim(),
        description: description.trim(),
      })
    } else {
      addTask({
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        status: "todo",
      })
    }

    handleClose()
  }

  const handleClose = () => {
    setTitle("")
    setDescription("")
    setError("")
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-lg font-semibold mb-4">
        {existingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          label="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (error) setError("")
          }}
        />

        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

        <Button type="submit">
          {existingTask ? "Update Task" : "Add Task"}
        </Button>

      </form>
    </Modal>
  )
}

export default TaskModal
