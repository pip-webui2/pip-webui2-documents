import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipFocusedModule } from 'pip-webui2-behaviors';
import { PipDocumentModule } from '../document/document.module';
import { PipDocumentEditModule } from '../document-edit/document-edit.module';

import { PipDocumentListEditComponent } from './document-list-edit.component';

@NgModule({
  declarations: [
    PipDocumentListEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,

    PipFocusedModule,

    PipDocumentModule,
    PipDocumentEditModule
  ],
  exports: [
    PipDocumentListEditComponent
  ],
  providers: [],
})
export class PipDocumentListEditModule { }