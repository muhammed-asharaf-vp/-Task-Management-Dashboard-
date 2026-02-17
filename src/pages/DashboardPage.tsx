import { useEffect, useState, useMemo } from "react";
import { useTaskStore } from "../store/taskStore";
import { fetchTasks } from "../services/taskService";
import TaskModal from "../components/tasks/TaskModal";
import Button from "../components/ui/Button";
import DashboardLayout from "../components/layout/DashboardLayout";
import TaskColumn from "../components/tasks/TaskColumn";
import TaskSearch from "../components/tasks/TaskSearch";
import TaskFilter from "../components/tasks/TaskFilter";
import { useDebounce } from "../hooks/useDebounce";
import EmptyState from "../components/ui/EmptyState";
import Loader from "../components/ui/Loader";

const DashboardPage = () => {
  const { tasks, loading, error, setTasks, setLoading, setError } =
    useTaskStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const debouncedSearch = useDebounce(search, 400);

  // Fetch Tasks
  useEffect(() => {
  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  if (!tasks.length) loadTasks();
}, []);


  // Filter Logic
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, debouncedSearch, statusFilter]);

  const todoTasks = filteredTasks.filter((t) => t.status === "todo");
  const inProgressTasks = filteredTasks.filter(
    (t) => t.status === "in-progress"
  );
  const completedTasks = filteredTasks.filter(
    (t) => t.status === "completed"
  );

  /* ----------------------------
     PROFESSIONAL LOADING PATTERN
  ---------------------------- */

 if (loading) {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[70vh] transition-opacity duration-300">
        <Loader size="lg" />
      </div>
    </DashboardLayout>
  );
}


  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
  <p className="text-red-500 text-lg font-medium">{error}</p>
  <button
    onClick={() => window.location.reload()}
    className="mt-4 text-sm text-blue-600 hover:underline"
  >
    Retry
  </button>
</div>


  return (
    <DashboardLayout>
      {/* Search + Filter Section */}
      <div className="bg-white dark:bg-gray-300 shadow-sm rounded-xl p-3 md:p-5 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <TaskSearch search={search} setSearch={setSearch} />

          <TaskFilter
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          <div className="w-full lg:w-auto">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="py-2.5 px-5 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
            >
              + Add Task
            </Button>
          </div>
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Board / Empty State */}
      {filteredTasks.length === 0 ? (
        <EmptyState
          title="No Tasks Found"
          description={
            search
              ? `No tasks match "${search}"`
              : "You haven't added any tasks yet."
          }
          actionLabel={!search ? "Add Task" : undefined}
          onAction={!search ? () => setIsModalOpen(true) : undefined}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
          <TaskColumn title="Todo" tasks={todoTasks} />
          <TaskColumn title="In Progress" tasks={inProgressTasks} />
          <TaskColumn title="Completed" tasks={completedTasks} />
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;
