import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { DocumentListEditExampleComponent } from './document-list-edit-example.component';
import { PipDocumentListEditModule, PipAddImageModule, PipCameraDialogComponent } from '../pip-webui2-documents';

@NgModule({
  declarations: [
    DocumentListEditExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,

    PipDocumentListEditModule,
    PipAddImageModule
  ],
  exports: [
    DocumentListEditExampleComponent
  ]
})
export class DocumentListEditExampleModule { }