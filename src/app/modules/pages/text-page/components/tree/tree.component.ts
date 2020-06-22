import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {



  @Input()
  set files(items$) {
    items$.subscribe(
      item => this._files = item
    )

    console.log(this._files);
  }

  private _files;

  constructor() { }

  ngOnInit(): void {
    console.log(this._files);
  }

}
