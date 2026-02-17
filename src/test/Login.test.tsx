import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"

describe("Login Page", () => {
  test("renders login heading", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const heading = screen.getByText(/login/i)
    expect(heading).toBeInTheDocument()
  })
})
