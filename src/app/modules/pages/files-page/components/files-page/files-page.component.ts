import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { selectHeaderConfigInfo } from "../../../../../common/store/selectors/header.selector";
import { addingNewFile, deleteFile } from "../../store/files-page.action";
import { selectFilesInfo } from "../../store/files-page.selectors";

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.less']
})
export class FilesPageComponent implements OnInit {

  files: Observable<any> = this.store.pipe(
    select(selectFilesInfo),
    map((item) => {
      return item;
    }),
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  deleteItem(file) {
    this.store.dispatch(deleteFile({file: file}));
  }

}
