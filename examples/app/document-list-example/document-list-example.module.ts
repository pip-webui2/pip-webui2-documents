import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { DocumentListExampleComponent } from './document-list-example.component';
import { PipDocumentModule } from '../pip-webui2-documents';

@NgModule({
  declarations: [
    DocumentListExampleComponent
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

    PipDocumentModule
  ],
  exports: [
    DocumentListExampleComponent
  ],
  providers: [
    
  ],
})
export class DocumentListExampleModule { }