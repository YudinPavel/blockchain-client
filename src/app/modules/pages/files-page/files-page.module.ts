import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesPageComponent } from './components/files-page/files-page.component';
import { FilesDownloadComponent } from './components/files-download/files-download.component';
import { DndDirective } from '../../../common/directives/dnd.directive';

@NgModule({
    declarations: [FilesPageComponent, FilesDownloadComponent, DndDirective],
    exports: [
        FilesPageComponent, DndDirective
    ],
  imports: [
    CommonModule,
  ]
})
export class FilesPageModule { }
