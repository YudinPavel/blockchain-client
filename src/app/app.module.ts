import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TextPageModule } from './modules/pages/text-page/text-page.module';
import { OptionsPageModule } from './modules/pages/options-page/options-page.module';
import { FilesPageModule } from './modules/pages/files-page/files-page.module';
import { HeaderNavigationComponent } from './common/components/header-navigation/header-navigation.component';
import { EffectsModule } from '@ngrx/effects';
import { HeaderConfigEffects } from './common/store/effects/header.effects';
import { appReducers } from './common/store/reducers/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MainTreeComponent } from './common/components/main-tree/main-tree.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageElementComponent } from './modules/text-page/components/page-element/page-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    MainTreeComponent,
    PageElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {}),
    TextPageModule,
    OptionsPageModule,
    FilesPageModule,
    HttpClientModule,
    EffectsModule.forRoot([HeaderConfigEffects]),
    BrowserAnimationsModule,
    MatTreeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [],
  exports: [
    MainTreeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
