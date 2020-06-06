import { HeaderElementModel } from "../../models/HeaderElement.model";

export interface HeaderState {
  headerConfig: HeaderElementModel[];
}

export const initialHeaderNavigationState: HeaderState = {
  headerConfig: [],
};
