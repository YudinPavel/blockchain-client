import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {

  @Input()
  progress = 0;

  constructor() {}

  ngOnInit() {}
}
