const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r p-6 flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Navigation
      </h2>

      <nav className="space-y-3 text-sm">
        <button className="block text-left w-full px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium">
          Dashboard
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
