import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
