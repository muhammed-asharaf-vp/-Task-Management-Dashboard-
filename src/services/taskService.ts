import api from "../lib/axios";
import { Task } from "../types/task.types";

interface ApiTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const res = await api.get<ApiTask[]>("/todos?_limit=15");

    return res.data.map((task) => ({
      id: task.id,
      title: task.title,
      description: "",
      status: task.completed ? "completed" : "todo",
    }));
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
};
