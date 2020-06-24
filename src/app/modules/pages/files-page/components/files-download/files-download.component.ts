import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Store } from "@ngrx/store";
import { addingNewFile } from "../../store/files-page.action";

@Component({
  selector: 'app-files-download',
  templateUrl: './files-download.component.html',
  styleUrls: ['./files-download.component.less']
})
export class FilesDownloadComponent implements OnInit {

  @ViewChild('fileInput')
  public fileInput: ElementRef;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onClickDropArea(event): void {
    this.fileInput.nativeElement.click();
  }

  onFileUpload(event): void {
    this.store.dispatch(addingNewFile({file: event[event.length - 1]}));
  }

}
