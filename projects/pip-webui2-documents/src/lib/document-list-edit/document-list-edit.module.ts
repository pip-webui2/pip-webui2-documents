import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { PipFocusedModule } from 'pip-webui2-behaviors-temp';

import { PipDocumentListEditComponent } from './document-list-edit.component';
import { PipDocumentModule } from '../document/document.module';
import { PipDocumentEditModule } from '../document-edit/document-edit.module';

@NgModule({
  declarations: [
    PipDocumentListEditComponent
  ],
  imports: [
    CommonModule,
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
