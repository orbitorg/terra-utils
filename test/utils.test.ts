import { warn } from "../src/utils"

describe("process.env", () => {
  const env = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...env }
  })

  afterEach(() => {
    process.env = env
  })
})

it("should mock process.env.NODE_ENV", () => {
  process.env.NODE_ENV = "development"
})

test("warn", () => {
  process.env.NODE_ENV = "development"
  const logSpy = jest.spyOn(console, "warn")
  warn("test")
  expect(logSpy).toHaveBeenCalledWith("test")
})
