import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipDocumentModule } from '../document/document.module';

import { PipDocumentEditComponent } from './document-edit.component';

@NgModule({
  declarations: [
    PipDocumentEditComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,

    PipDocumentModule
  ],
  exports: [
    PipDocumentEditComponent
  ],
  providers: [],
})
export class PipDocumentEditModule { }