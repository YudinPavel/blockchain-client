import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { selectFilesInfo } from "../../../files-page/store/files-page.selectors";

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.less']
})
export class TextPageComponent implements OnInit {

  public _files;

  public _selectedFile;

  files$: Observable<any> = this.store.pipe(
    select(selectFilesInfo),
    map((item) => {
      this._files = item;

      for (let file of this._files) {
        for(let page of file.content) {
          for(let element of page) {
            element.text.replace('↵', '/n');
          }
        }
      }

      this._selectedFile = this._files[0];
      return item;
    }),
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
