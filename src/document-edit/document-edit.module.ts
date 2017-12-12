import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipDocumentModule } from '../document/document.module';
import { PipAddImageModule } from '../add-image/add-image.module';

import { PipDocumentEditComponent } from './document-edit.component';

@NgModule({
  declarations: [
    PipDocumentEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,

    PipDocumentModule,
    PipAddImageModule
  ],
  exports: [
    PipDocumentEditComponent
  ],
  providers: [],
})
export class PipDocumentEditModule { }