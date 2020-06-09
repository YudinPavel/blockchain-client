import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from "@ngrx/effects";
import { FilesPageComponent } from './components/files-page/files-page.component';
import { FilesDownloadComponent } from './components/files-download/files-download.component';
import { DndDirective } from '../../../common/directives/dnd.directive';
import { FilesPageEffects } from "./store/files-page.effects";

@NgModule({
    declarations: [FilesPageComponent, FilesDownloadComponent, DndDirective],
    exports: [
        FilesPageComponent, DndDirective
    ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FilesPageEffects]),
  ]
})
export class FilesPageModule { }
