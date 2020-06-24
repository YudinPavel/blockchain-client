import { OptionModel } from "../../../../common/models/Option.model";

export interface OptionsState {
  options: OptionModel[];
}

export const initialOptionsState: OptionsState = {
  options: [],
};
