import { validateName } from "./validate-input"
import { left } from "fp-ts/lib/Either"

describe("validator should", () => {
  test("handle short name", () => {
    expect(validateName("")).toStrictEqual(left("name is too short"))
  })
})