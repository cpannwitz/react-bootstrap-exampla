import { render, screen, userEvent } from "./test-utils"
import App from "./App"

describe("App Test", () => {
  // we should be able to find the text <h1>Vite + React</h1>
  it("should display", () => {
    const { getByText } = render(<App />)
    getByText("Vite + React")
  })
})
