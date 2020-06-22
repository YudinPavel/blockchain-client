import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPageComponent } from './components/text-page/text-page.component';
import { TreeComponent } from './components/tree/tree.component';



@NgModule({
  declarations: [TextPageComponent, TreeComponent],
  imports: [
    CommonModule
  ]
})
export class TextPageModule { }
