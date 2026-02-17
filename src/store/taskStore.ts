import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "../types/task.types";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;

  setTasks: (tasks: Task[]) => void;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;

  addTask: (task: Task) => void;
  updateTask: (id: number, updatedData: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  clearTasks: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      loading: false,
      error: null,

      setTasks: (tasks) => set({ tasks }),

      setLoading: (value) => set({ loading: value }),

      setError: (value) => set({ error: value }),

      addTask: (task) =>
        set((state) => ({
          tasks: [task, ...state.tasks],
        })),

      updateTask: (id, updatedData) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedData } : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: "task-storage",

      // Persist only tasks (not loading/error)
      partialize: (state) => ({
        tasks: state.tasks,
      }),
    }
  )
);
