import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { OptionModel } from "../../../../../common/models/Option.model";
import { addingNewFile, deleteFile } from "../../../files-page/store/files-page.action";
import { selectFilesInfo } from "../../../files-page/store/files-page.selectors";
import { addingNewOption, deleteOption } from "../../store/options-page.action";
import { selectOptionsInfo } from "../../store/options-page.selectors";

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.less']
})
export class OptionsPageComponent implements OnInit {

  options: Observable<OptionModel[]> = this.store.pipe(
    select(selectOptionsInfo),
    map((item) => {
      return item;
    }),
  );

  constructor(
    private store: Store) { }

  ngOnInit(): void {
  }

  addOption(): void {
    this.store.dispatch(addingNewOption({option: new OptionModel()}));
  }

  deleteOption(option: OptionModel): void {
    this.store.dispatch(deleteOption({option: option}));
  }

}
