import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from "@ngrx/effects";
import { AppModule } from "../../../app.module";
import { FilesPageComponent } from './components/files-page/files-page.component';
import { FilesDownloadComponent } from './components/files-download/files-download.component';
import { DndDirective } from '../../../common/directives/dnd.directive';
import { ProgressComponent } from "./components/progress/progress.component";
import { FilesPageEffects } from "./store/files-page.effects";

@NgModule({
    declarations: [FilesPageComponent, FilesDownloadComponent, DndDirective, ProgressComponent],
    exports: [
        FilesPageComponent, DndDirective
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([FilesPageEffects]),
    ]
})
export class FilesPageModule { }
