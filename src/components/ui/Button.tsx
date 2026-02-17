import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  fullWidth?: boolean
}

const Button = ({
  variant = "primary",
  fullWidth = true,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "py-2.5 px-4 rounded-lg font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer"

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",
  }

  return (
    <button
      className= {`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
