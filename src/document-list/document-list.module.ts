import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule, MatButtonModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core'

import { PipFocusedModule } from 'pip-webui2-behaviors';
import { PipDocumentModule } from '../document/document.module';

import { PipDocumentListComponent } from './document-list.component';

@NgModule({
  declarations: [
    PipDocumentListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,

    TranslateModule,

    PipFocusedModule,
    PipDocumentModule
  ],
  exports: [
    PipDocumentListComponent
  ],
  providers: [],
})
export class PipDocumentListModule { }