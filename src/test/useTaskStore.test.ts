import { describe, test, expect, beforeEach } from "vitest"
import { useTaskStore } from "../store/taskStore"


describe("Task Store", () => {
  beforeEach(() => {
    // Reset state before each test
    useTaskStore.setState({
      tasks: [],
    })
  })

  test("initial state should be empty", () => {
    const state = useTaskStore.getState()
    expect(state.tasks).toEqual([])
  })

  test("addTask should add a task", () => {
    const { addTask } = useTaskStore.getState()

    addTask({
      id: 1,
      title: "Test Task",
      description: "Testing",
      status: "todo",
    })

    const tasks = useTaskStore.getState().tasks

    expect(tasks.length).toBe(1)
    expect(tasks[0].title).toBe("Test Task")
  })

  test("updateTask should update a task", () => {
    const { addTask, updateTask } = useTaskStore.getState()

    addTask({
      id: 1,
      title: "Old Title",
      description: "Testing",
      status: "todo",
    })

    updateTask(1, { title: "New Title" })

    const updatedTask = useTaskStore.getState().tasks[0]

    expect(updatedTask.title).toBe("New Title")
  })

  test("deleteTask should remove a task", () => {
    const { addTask, deleteTask } = useTaskStore.getState()

    addTask({
      id: 1,
      title: "Delete Me",
      description: "Testing",
      status: "todo",
    })

    deleteTask(1)

    const tasks = useTaskStore.getState().tasks

    expect(tasks.length).toBe(0)
  })
})
