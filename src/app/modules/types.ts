import { Either } from "fp-ts/lib/Either";

export interface InputValidator {
  (value: string): Either<string, string>
}