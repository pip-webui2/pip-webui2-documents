import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatProgressBarModule } from '@angular/material';

import { PipDocumentComponent } from './document.component';

@NgModule({
  declarations: [
    PipDocumentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    PipDocumentComponent
  ],
  providers: [],
})
export class PipDocumentModule { }