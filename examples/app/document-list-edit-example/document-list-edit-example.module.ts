import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { DocumentListEditExampleComponent } from './document-list-edit-example.component';
import { PipDocumentListEditModule, PipDocumentEditModule } from '../pip-webui2-documents';

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

    TranslateModule,

    PipDocumentListEditModule,
    PipDocumentEditModule
  ],
  exports: [
    DocumentListEditExampleComponent
  ]
})
export class DocumentListEditExampleModule { }