import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'blockchain';

  items: any[] = [
    {
      caption: "first",
    },
    {
      caption: "second",
      childrens: [
        {
          caption: "second first",
        },
        {
          caption: "second second"
        }
      ]
    },
    {
      caption: "third",
      childrens: [
        {
          caption: "third first",
          childrens: [
            {
              caption: "third first first"
            }
          ]
        }
      ]
    }
  ]

}
