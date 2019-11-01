import { isSome, none, some } from "fp-ts/lib/Option";
import { ThunkAC } from "Store";
import { setName } from "./actions";

export const someEpic = (): ThunkAC<Promise<void>> => async (
  dispatch,
  getState
) => {

};
