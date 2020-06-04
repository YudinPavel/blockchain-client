import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesPageComponent } from './modules/pages/files-page/components/files-page/files-page.component';
import { TextPageComponent } from './modules/pages/text-page/components/text-page/text-page.component';
import { OptionsPageComponent } from './modules/pages/options-page/components/options-page/options-page.component';


const routes: Routes = [
  {path: 'text-page', component: TextPageComponent},
  {path: 'options-page', component: OptionsPageComponent},
  {path: 'files-page', component: FilesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
