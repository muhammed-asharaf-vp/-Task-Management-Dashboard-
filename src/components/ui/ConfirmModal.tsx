import Modal from "./Modal"
import Button from "./Button"

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">

        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="text-sm text-gray-600">
          {message}
        </p>

        <div className="flex justify-end gap-3 pt-2">
          <Button
            variant="secondary"
            fullWidth={false}
            onClick={onClose}
          >
            {cancelText}
          </Button>

          <Button
            fullWidth={false}
            className="bg-red-500 hover:bg-red-600"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>

      </div>
    </Modal>
  )
}

export default ConfirmModal
