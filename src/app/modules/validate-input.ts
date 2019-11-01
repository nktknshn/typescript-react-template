import { InputValidator } from "./types";
import { right, left } from "fp-ts/lib/Either";

export const validateName: InputValidator =
  (name: string) =>
    name.length > 0 ? right(name) : left("name is too short")