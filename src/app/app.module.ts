import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import {
  PipAppbarModule,
  PipMediaModule,
  PipSidenavModule,
  PipRootLayoutModule, PipSidenavPosition,
} from 'pip-webui2-layouts';
import {
  PipBreadcrumbModule,
  PipNavIconModule,
  PipPrimaryActionsModule,
  PipSecondaryActionsModule,
  PipNavModule,
  PipNavHeaderModule,
  PipNavMenuModule
} from 'pip-webui2-nav';

import { PipThemesModule, pipWebUI2ThemesList } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentListExampleModule } from './document-list-example/document-list-example.module';
import { DocumentListEditExampleModule } from './document-list-edit-example/document-list-edit-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    TranslateModule.forRoot(),

    PipThemesModule.withConfig({
      themes: pipWebUI2ThemesList
    }),
    PipAppbarModule.forRoot(),
    PipMediaModule.forRoot(),
    PipSidenavModule.withConfig({
      start: {
        views: [
          {
            name: 'tablet',
            alias: 'lt-md',
            position: PipSidenavPosition.Root,
            mode: 'side',
            collapsed: true,
            opened: true,
            active: false
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over'
          }
        ]
      },
      end: {
        views: [
          {
            name: 'default',
            position: PipSidenavPosition.Root,
            mode: 'side',
            width: 350
          },
          {
            name: 'mobile',
            alias: 'lt-sm',
            position: PipSidenavPosition.Root,
            mode: 'over'
          }
        ]
      }
    }),
    PipRootLayoutModule,
    PipBreadcrumbModule,
    PipNavIconModule,
    PipPrimaryActionsModule,
    PipSecondaryActionsModule,
    PipNavModule.forRoot(),
    PipNavHeaderModule,
    PipNavMenuModule,

    AppRoutingModule,
    DocumentListExampleModule,
    DocumentListEditExampleModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
