import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-files-download',
  templateUrl: './files-download.component.html',
  styleUrls: ['./files-download.component.less']
})
export class FilesDownloadComponent implements OnInit {

  @ViewChild('fileInput')
  public fileInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onClickDropArea(event) {
    this.fileInput.nativeElement.click();
  }

  onFileDropped($event) {

  }

}
