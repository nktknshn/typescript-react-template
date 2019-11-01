import { Option } from "fp-ts/lib/Option";

export interface AppError {
  name: string;
  message: string;
}

export interface AppState {
  name: Option<string>;
  error: Option<AppError>
}
