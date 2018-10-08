import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PipDocumentModule } from '../document/document.module';
import { PipDocumentEditComponent } from './document-edit.component';

@NgModule({
  declarations: [
    PipDocumentEditComponent
  ],
  imports: [
    CommonModule,
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
