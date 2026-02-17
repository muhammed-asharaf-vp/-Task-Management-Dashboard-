import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"

describe("Dashboard Page", () => {
  test("renders dashboard layout correctly", () => {
    render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
    )

    // Heading
    expect(
      screen.getByRole("heading", { name: /task board dashboard/i })
    ).toBeInTheDocument()

    // Logout button
    expect(
      screen.getByRole("button", { name: /logout/i })
    ).toBeInTheDocument()

    // Sidebar navigation
    expect(
      screen.getByText(/navigation/i)
    ).toBeInTheDocument()
  })
})
