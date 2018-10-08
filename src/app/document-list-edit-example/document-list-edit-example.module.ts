import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatButtonToggleModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { PipDocumentListEditModule } from 'pip-webui2-documents';
import { PipSidenavModule } from 'pip-webui2-layouts-temp';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { DocumentListEditExampleComponent } from './document-list-edit-example.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatButtonToggleModule,
    TranslateModule,
    PipDocumentListEditModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [DocumentListEditExampleComponent]
})
export class DocumentListEditExampleModule { }
