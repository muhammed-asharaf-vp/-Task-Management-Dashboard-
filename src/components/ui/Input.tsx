import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = ({ label, error, className = "", ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-600">
          {label}
        </label>
      )}

      <input
        className={`w-full px-4 py-2.5 border rounded-lg 
        focus:outline-none transition
        ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        } ${className}`}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
