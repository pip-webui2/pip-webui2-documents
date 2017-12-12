import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

import { PipDocumentComponent } from './document.component';

@NgModule({
  declarations: [
    PipDocumentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    PipDocumentComponent
  ],
  providers: [],
})
export class PipDocumentModule { }