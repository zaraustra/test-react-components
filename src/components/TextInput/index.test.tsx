import React from "react"
import {render, screen} from "@testing-library/react"
import TextInput from "./index"

test("renders TextInput component", () => {
  render(<TextInput onChange={() => null} />)

  const linkElement = screen.getByTestId("text-input")
  expect(linkElement).toBeInTheDocument()
})
