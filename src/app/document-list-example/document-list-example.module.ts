import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { PipDocumentModule, PipDocumentListModule } from 'pip-webui2-documents';
import { PipSidenavModule } from 'pip-webui2-layouts';
import { PipNavModule } from 'pip-webui2-nav';

import { DocumentListExampleComponent } from './document-list-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatSlideToggleModule,
    TranslateModule,
    PipDocumentModule, PipDocumentListModule,
    PipSidenavModule,
    PipNavModule
  ],
  declarations: [DocumentListExampleComponent]
})
export class DocumentListExampleModule {}
