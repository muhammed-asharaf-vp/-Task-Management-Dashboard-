import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store/authStore"
import Button from "../ui/Button"
import ConfirmModal from "../ui/ConfirmModal"

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  const handleConfirmLogout = () => {
    logout()
    setIsLogoutOpen(false)
    navigate("/")
  }

  return (
    <>
      <header className="w-full bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">

          <h1 className="text-lg font-semibold text-gray-800">
            Task Board Dashboard
          </h1>

          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm text-gray-600 hidden sm:block">
                {user.email}
              </span>
            )}

            <Button
              variant="secondary"
              fullWidth={false}
              onClick={() => setIsLogoutOpen(true)}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

    {/* logout modal */}
      <ConfirmModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Sure"
        cancelText="No"
      />
    </>
  )
}

export default Navbar
